# extraction-timeout-unlinked

An unlinked-decision arc. The governing decision, `REQ-papra-external-extraction-timeout-5-min`, is real (Papra's changelog) and is in every arm's
store, but nothing in the store links it to code: no symbol, no test, no code path. It lives in
apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/*/…config.ts (timeoutMs, no symbol link). An arm finds it only by looking it up from the request, so Kibi's edit hook has nothing to show here.
Shortlist item 2 of the Nov 25 review (`fable-nov25-cost-and-harder-bench.md`), the counterweight to the side-effect
arcs; the two sets are reported side by side.

## Hidden test

`tests/apps/papra-server/src/modules/config/extraction-timeout.test.ts`, owned by the benchmark: docling, Mistral OCR and Azure DI requests default to a 5-minute timeout. Checked both ways with
`check/verify.sh` (base passes, the change the probe asks for fails).
