#!/usr/bin/env bash
# Checks the hidden test of extraction-timeout-unlinked both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
T=src/modules/config/extraction-timeout.test.ts

check_prepare "$1"
check_tests "base: passes" $T
for f in docling mistral-ocr azure-di; do sed -i 's/default: 5 \* IN_MS.MINUTE/default: 30 * IN_MS.SECOND/' "$REF"/apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/$f/*.config.ts; done
check_tests "probe done as asked (the three defaults set to 30 seconds, violating): fails" $T
check_go base
