# auth-secret-length-unlinked

An unlinked-decision arc. The governing decision, `REQ-papra-auth-secret-min-32`, is real (Papra's changelog) and is in every arm's
store, but nothing in the store links it to code: no symbol, no test, no code path. It lives in
apps/papra-server/src/modules/app/auth/auth.config.ts (authConfig.secret, no symbol link). An arm finds it only by looking it up from the request, so Kibi's edit hook has nothing to show here.
Shortlist item 2 of the Nov 25 review (`fable-nov25-cost-and-harder-bench.md`), the counterweight to the side-effect
arcs; the two sets are reported side by side.

## Hidden test

`tests/apps/papra-server/src/modules/config/auth-secret-length.test.ts`, owned by the benchmark: aUTH_SECRET must be at least 32 characters: 31 is refused, 32 accepted. Checked both ways with
`check/verify.sh` (base passes, the change the probe asks for fails).
