#!/usr/bin/env bash
# Checks the hidden test of auth-secret-length-unlinked both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
T=src/modules/config/auth-secret-length.test.ts

check_prepare "$1"
check_tests "base: passes" $T
sed -i 's/v.minLength(32)/v.minLength(16)/' "$REF/apps/papra-server/src/modules/app/auth/auth.config.ts"
check_tests "probe done as asked (the minimum lowered to 16, violating): fails" $T
check_go base
