#!/usr/bin/env bash
# Checks the hidden test of boolean-env-unlinked both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
T=src/modules/config/boolean-env.test.ts

check_prepare "$1"
check_tests "base: passes" $T
python3 - "$REF" <<'PY'
import sys
p=sys.argv[1]+'/apps/papra-server/src/modules/config/config.schemas.ts';s=open(p).read()
old="v.pipe(v.string(), v.trim(), v.parseBoolean())"
assert old in s
open(p,'w').write(s.replace(old,"v.pipe(v.string(), v.trim(), v.transform((x) => ['true', '1', 'yes', 'y', 'on', 'enabled'].includes(x.toLowerCase())))"))
PY
check_tests "probe done as asked (unknown values read as false, violating): fails" $T
check_go base
