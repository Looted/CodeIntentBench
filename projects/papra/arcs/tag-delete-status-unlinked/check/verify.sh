#!/usr/bin/env bash
# Checks the hidden test of tag-delete-status-unlinked both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
T=src/modules/tags/e2e/tag-delete-status.e2e.test.ts

check_prepare "$1"
check_tests "base: passes" $T
sed -i '0,/return context.body(null, 204);/s//return context.json({ tag: { id: tagId } }, 200);/' "$REF/apps/papra-server/src/modules/tags/tags.routes.ts"
check_tests "probe done as asked (200 with the tag as JSON, violating): fails" $T
check_go base
