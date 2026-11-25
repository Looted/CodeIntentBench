# upload-default-size-unlinked

An unlinked-decision arc. The governing decision, `REQ-papra-max-upload-default-25mb`, is real (Papra's changelog) and is in every arm's
store, but nothing in the store links it to code: no symbol, no test, no code path. It lives in
apps/papra-server/src/modules/documents/document-storage.config.ts (documentMaxUploadSizeConfig, no symbol link). An arm finds it only by looking it up from the request, so Kibi's edit hook has nothing to show here.
Shortlist item 2 of the Nov 25 review (`fable-nov25-cost-and-harder-bench.md`), the counterweight to the side-effect
arcs; the two sets are reported side by side.

## Hidden test

`tests/apps/papra-server/src/modules/config/upload-default-size.test.ts`, owned by the benchmark: the default maximum upload size is 25 MB. Checked both ways with
`check/verify.sh` (base passes, the change the probe asks for fails).
