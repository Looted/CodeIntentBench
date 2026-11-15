# storage-key-org-rename

Base `e7acb46f` (the project pin). Patterns: superseded, near-matches.

## Decisions and sources, checked at the base

- Storage key guide before September (`03-guides/09-storage-key-patterns.mdx#persistence`): a key is generated at upload and a pattern change never changes an existing document's key. Recorded as `REQ-a-document-s-storage-key-is-generated-at-u-4715C9F2`, status closed.
- The same guide at the base (`#storage-key-persistence`): keys persist "unless synchronization is enabled or they are explicitly migrated". Recorded as `REQ-papra-storage-key-persisted-sync-optional`, which supersedes the entry above.
- PR #1525 (`7c9a96fc`, 2026-09-18): optional synchronisation, off by default; a change of a document's name or date moves the file. Recorded as `REQ-papra-storage-key-sync-on-document-update`.
- PR #1529 (`1c993e43`, 2026-09-18): `{{organization.name}}` in patterns. The guide's section "Organization names and renames" states the boundary this arc probes: "Renaming an organization does not move its existing documents, even when storage-key synchronization is enabled. Their persisted keys remain usable. New uploads use the current organization name. With synchronization enabled, a later document name or document date change re-evaluates the entire pattern and uses the current organization name too." Recorded as `REQ-papra-organization-rename-keeps-storage-keys`.
- Reason for the boundary: not stated in the guide, the changesets or the pull requests (neither has a description). The entry says "Reason not stated." and the arc has no rationale step.
- Code at the base: `documents/events/storage-key.document-updated.ts` (the handler runs only when a document's name or date changed), `documents/document-storage.usecases.ts` (`buildSyncDocumentStorageKey`), `organizations/organizations.routes.ts` (`PUT /api/organizations/:organizationId` updates the name and nothing else).

## Changes from the proposal

- The proposed first step ("log the old and the new storage key at info level whenever synchronisation moves a file") is already true at the base: `buildSyncDocumentStorageKey` logs `sourceStorageKey` and `storageKey` at info level. The step now asks for an error log when the copy fails.
- The proposed hidden test alone does not catch the violation. `storage-key.document-updated.test.ts::an organization rename keeps existing keys until a later qualifying document update` renames the organisation through the repository, so a move added to the rename route or to an event never runs in it (verified: it stays green with the violating changes below). The arc keeps it and adds a test through the HTTP API.

## Hidden tests

Both files are in `tests/` and run on every step.

- `documents/events/storage-key.document-updated.test.ts`: Papra's own file at the base (three tests, including the one named above).
- `documents/e2e/organization-rename-storage-keys.e2e.test.ts`: owned by the benchmark. With synchronisation on and the pattern `{{organization.name}}/{{document.name}}`, two documents are uploaded through the API, the organisation is renamed with `PUT /api/organizations/:id`, and the stored keys, the documents' persisted keys and a download are unchanged. A second test checks that an upload after the rename goes under the new name.

Checked on a checkout of the base (`npx vitest run <the two files>`):

| Change | Result |
|---|---|
| none | 5 of 5 pass |
| the rename route synchronises every document of the organisation before answering | both tests of the benchmark's file fail; Papra's file passes |
| the same, started without waiting for it | both tests of the benchmark's file fail; Papra's file passes |

Not covered: a move done by a queued background task. The test waits 150 ms after the rename and uses the in-memory task service.

## Replay

Nothing to replay: neither step mirrors an upstream commit. The replay run of 2026-11-15 (`--arm docs --skip-judge`) shows that the workspace builds, the audit passes, and the hidden tests and the suite are green on both steps.
