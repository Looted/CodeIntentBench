"""Point a copied Basic Memory config (config.json and the project row of its SQLite index) from the cached notes folder to the run's copy. Note paths in the index are relative to the project folder."""
import os, sqlite3, sys

cfg, old, new = sys.argv[1:4]
path = os.path.join(cfg, "config.json")
text = open(path).read().replace(old, new)
open(path, "w").write(text)
db = sqlite3.connect(os.path.join(cfg, "memory.db"))
try:
    db.execute("UPDATE project SET path = ? WHERE path = ?", (new, old))
    db.commit()
finally:
    db.close()
