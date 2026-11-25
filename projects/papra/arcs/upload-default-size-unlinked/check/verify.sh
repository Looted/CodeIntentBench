#!/usr/bin/env bash
# Checks the hidden test of upload-default-size-unlinked both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
T=src/modules/config/upload-default-size.test.ts

check_prepare "$1"
check_tests "base: passes" $T
sed -i 's/default: 25 \* IN_BYTES.MEGABYTE/default: 100 * IN_BYTES.MEGABYTE/' "$REF/apps/papra-server/src/modules/documents/document-storage.config.ts"
check_tests "probe done as asked (the default raised to 100 MB, violating): fails" $T
check_go base
