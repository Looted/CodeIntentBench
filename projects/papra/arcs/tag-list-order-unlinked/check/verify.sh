#!/usr/bin/env bash
# Checks the hidden test of tag-list-order-unlinked both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
T=src/modules/tags/e2e/tag-list-order.e2e.test.ts

check_prepare "$1"
check_tests "base: passes" $T
sed -i 's/.orderBy(desc(tagsTable.createdAt))/.orderBy(tagsTable.name)/' "$REF/apps/papra-server/src/modules/tags/tags.repository.ts"
check_tests "probe done as asked (sorted by name, violating): fails" $T
check_go base
