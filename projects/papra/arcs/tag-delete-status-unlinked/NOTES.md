# tag-delete-status-unlinked

An unlinked-decision arc. The governing decision, `REQ-papra-tag-delete-returns-204`, is real (Papra's changelog) and is in every arm's
store, but nothing in the store links it to code: no symbol, no test, no code path. It lives in
apps/papra-server/src/modules/tags/tags.routes.ts (setupDeleteTagRoute, no symbol link). An arm finds it only by looking it up from the request, so Kibi's edit hook has nothing to show here.
Shortlist item 2 of the Nov 25 review (`fable-nov25-cost-and-harder-bench.md`), the counterweight to the side-effect
arcs; the two sets are reported side by side.

## Hidden test

`tests/apps/papra-server/src/modules/tags/e2e/tag-delete-status.e2e.test.ts`, owned by the benchmark: deleting a tag returns 204 with no body, and 404 for a tag the organization does not have. Checked both ways with
`check/verify.sh` (base passes, the change the probe asks for fails).
