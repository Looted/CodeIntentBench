#!/usr/bin/env bash
# A teammate's commit between sessions: papra-hq/papra #1534, "allow reinviting former members"
# (a03dc5ab, 2026-09-20), lands on top of the invitation refactor. It is the upstream change itself:
# the server sources are set to their state at that commit, which also replaces the previous session's
# version of the refactor with upstream's #1533 (same exported names and signatures), so the next
# session starts from the same code in every run.
set -euo pipefail
ws="$1"
commit=a03dc5ab240607040bfe2058fe5a56e96a7b0c3b
git -C "$ws" cat-file -e "$commit^{commit}"
git -C "$ws" restore --source="$commit" --staged --worktree -- apps/papra-server/src
git -C "$ws" show "$commit:.changeset/silent-years-train.md" > "$ws/.changeset/silent-years-train.md"
echo "teammate: #1534 landed (former members can be reinvited; stale pending invitations expire at once)"
