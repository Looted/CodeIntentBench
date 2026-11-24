"""Seed and export the gitea arm's Gitea instance.

  gitea_store.py seed <gitea-binary> <workDir> <tracker-seed.json>
  gitea_store.py export <gitea-binary> <workDir> <out.json>

seed creates an instance in workDir (SQLite, the default bleve issue indexer, a Unix socket, no SSH or mail),
an admin user `papra` with an access token, a repository papra/papra, and one issue per decision with the
title, body and labels the tracker arm renders, closed as the tracker arm's are. It waits until the issue
indexer has indexed every issue. export lists every issue the instance holds (title, body, labels, state).
"""
import hashlib, http.client, json, os, socket, subprocess, sys, time, urllib.parse

APP_INI = """I_AM_BEING_UNSAFE_RUNNING_AS_ROOT = true
APP_NAME = Papra
RUN_MODE = prod
RUN_USER = {user}
[server]
PROTOCOL = http+unix
HTTP_ADDR = gitea.sock
ROOT_URL = http://localhost/
OFFLINE_MODE = true
DISABLE_SSH = true
LFS_START_SERVER = false
[database]
DB_TYPE = sqlite3
PATH = data/gitea.db
[security]
INSTALL_LOCK = true
SECRET_KEY = {secret}
INTERNAL_TOKEN = {internal}
[oauth2]
JWT_SECRET = {jwt}
[service]
DISABLE_REGISTRATION = true
[indexer]
ISSUE_INDEXER_TYPE = bleve
REPO_INDEXER_ENABLED = false
[log]
MODE = file
LEVEL = Warn
[repository]
ROOT = repos
[cron]
ENABLED = false
[mailer]
ENABLED = false
"""


class UnixConn(http.client.HTTPConnection):
    def __init__(self, path):
        super().__init__("localhost", timeout=60)
        self.path = path

    def connect(self):
        self.sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        self.sock.connect(self.path)


def sock_path(work):
    """A Unix socket path must fit in 108 bytes, so the socket lives under /tmp/gs, named by the work directory."""
    return f"/tmp/gs/{hashlib.sha1(work.encode()).hexdigest()[:12]}.sock"


def point_socket(work):
    """Before each start: this instance's work path, and its short socket path (Gitea makes HTTP_ADDR absolute)."""
    os.makedirs("/tmp/gs", exist_ok=True)
    ini = os.path.join(work, "custom", "conf", "app.ini")
    lines = open(ini).read().splitlines()
    lines = [f"HTTP_ADDR = {sock_path(work)}" if l.startswith("HTTP_ADDR") else l for l in lines if not l.startswith("WORK_PATH")]
    # Gitea writes WORK_PATH into app.ini on its first start; an instance copied elsewhere must not keep the old one.
    lines.insert(0, f"WORK_PATH = {work}")
    open(ini, "w").write("\n".join(lines) + "\n")


def api(work, token, method, path, body=None):
    c = UnixConn(sock_path(work))
    headers = {"Authorization": f"token {token}", "Content-Type": "application/json"}
    c.request(method, "/api/v1" + path, body=json.dumps(body) if body is not None else None, headers=headers)
    r = c.getresponse()
    data = r.read()
    if r.status >= 300:
        raise RuntimeError(f"{method} {path}: {r.status} {data[:300]!r}")
    total = r.getheader("X-Total-Count")
    c.close()
    return (json.loads(data) if data else None), (int(total) if total else None)


def start(gitea, work):
    point_socket(work)
    sock = sock_path(work)
    if os.path.exists(sock):
        os.remove(sock)
    p = subprocess.Popen([gitea, "--work-path", work, "web"], cwd=work, stdin=subprocess.DEVNULL,
                         stdout=open(os.path.join(work, "web.log"), "a"), stderr=subprocess.STDOUT)
    for _ in range(240):
        if os.path.exists(sock):
            try:
                api(work, "", "GET", "/version")
                return p
            except Exception:
                pass
        time.sleep(0.25)
    p.kill()
    raise RuntimeError("gitea did not start")


def stop(p):
    p.terminate()
    try:
        p.wait(timeout=30)
    except subprocess.TimeoutExpired:
        p.kill()


def run(gitea, work, *args):
    return subprocess.run([gitea, "--work-path", work, *args], cwd=work, check=True, capture_output=True, text=True).stdout


def seed(gitea, work, seed_file):
    issues = json.load(open(seed_file))["issues"]
    os.makedirs(os.path.join(work, "custom", "conf"), exist_ok=True)
    secret = lambda kind: subprocess.run([gitea, "generate", "secret", kind], check=True, capture_output=True, text=True).stdout.strip()
    with open(os.path.join(work, "custom", "conf", "app.ini"), "w") as f:
        f.write(APP_INI.format(user=os.environ.get("USER") or subprocess.run(["whoami"], capture_output=True, text=True).stdout.strip(),
                               secret=secret("SECRET_KEY"), internal=secret("INTERNAL_TOKEN"), jwt=secret("JWT_SECRET")))
    run(gitea, work, "migrate")
    run(gitea, work, "admin", "user", "create", "--admin", "--username", "papra", "--password", "papra-local-only-1",
        "--email", "papra@localhost", "--must-change-password=false")
    token = run(gitea, work, "admin", "user", "generate-access-token", "--username", "papra", "--token-name", "mcp",
                "--scopes", "all", "--raw").strip().splitlines()[-1]
    with open(os.path.join(work, "token"), "w") as f:
        f.write(token)
    p = start(gitea, work)
    try:
        api(work, token, "POST", "/user/repos", {"name": "papra", "description": "Papra: document management and archiving"})
        label_ids = {}
        for issue in issues:
            for name in issue.get("labels", []):
                if name not in label_ids:
                    created, _ = api(work, token, "POST", "/repos/papra/papra/labels", {"name": name, "color": "#888888"})
                    label_ids[name] = created["id"]
        for k, issue in enumerate(issues):
            api(work, token, "POST", "/repos/papra/papra/issues", {
                "title": issue["title"], "body": issue["body"],
                "labels": [label_ids[n] for n in issue.get("labels", [])],
                "closed": issue.get("status") == "closed",
            })
            if k % 200 == 0:
                print(f"filed {k + 1}/{len(issues)}", flush=True)
        # The issue indexer runs from a queue; wait until a search sees every issue.
        for _ in range(600):
            _, total = api(work, token, "GET", "/repos/issues/search?" + urllib.parse.urlencode({"q": "Decision", "state": "all", "limit": 1}))
            if total is not None and total >= len(issues):
                break
            time.sleep(1)
        else:
            raise RuntimeError(f"indexer saw {total} of {len(issues)} issues")
        print(f"seeded {len(issues)} issues, indexed {total}", flush=True)
    finally:
        stop(p)


def export(gitea, work, out):
    token = open(os.path.join(work, "token")).read().strip()
    p = start(gitea, work)
    try:
        rows, page = [], 1
        while True:
            batch, _ = api(work, token, "GET", f"/repos/papra/papra/issues?state=all&type=issues&limit=50&page={page}")
            if not batch:
                break
            rows += [{"number": i["number"], "title": i["title"], "body": i["body"], "state": i["state"],
                      "labels": [l["name"] for l in i.get("labels", [])]} for i in batch]
            page += 1
    finally:
        stop(p)
    with open(out, "w") as f:
        json.dump(rows, f, indent=1)
    print(f"exported {len(rows)} issues", flush=True)


if __name__ == "__main__":
    cmd, gitea, work, arg = sys.argv[1:5]
    {"seed": seed, "export": export}[cmd](os.path.abspath(gitea), os.path.abspath(work), arg)
