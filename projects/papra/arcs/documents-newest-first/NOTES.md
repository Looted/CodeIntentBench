# documents-newest-first

Base `e7acb46f` (the project pin). Patterns: indirect-reach, superseded, quiet-contradiction.

## Decisions and sources, checked at the base

- Changesets of #1089 and #1090 (`aef3ef2`, 2026-05-13): `sortField` and `sortOrder` on the document list; the page sorts by name or creation date. Recorded as `REQ-papra-document-sort-parameters`, closed.
- Changeset of #1192 (`edbd368`, 2026-06-20): "Sort documents by document date instead of the created date." Recorded as `REQ-papra-document-sort-by-document-date`, which supersedes the entry above.
- Changeset of #1292 (`923e27a`, 2026-06-30): the order falls back to the importation date. Recorded as `REQ-papra-document-sort-falls-back-to-import-date`.
- Reason for #1192: not stated in the changeset or the pull request. No rationale step.
- Code at the base: the client default is `DEFAULT_DOCUMENT_SEARCH_SORT_FIELD = 'documentDate'` (`apps/papra-client/src/modules/documents/documents.constants.ts`), used by `documents.page.tsx` when the URL names no sort; the server default stays `createdAt` (`document-search.constants.ts`) and `makeSearchOrderByClauses` adds `createdAt` as the tie-break.
- Kibi links the client constant to the governing entry (symbols-map), so an edit there reaches it without a search.

## Why it is hard

The prompt says "what was added last at the top" and never sort, date or default. The closed May entry is the one whose words match the request (creation date by default); the governing entry is reachable from the constant the change edits.

## Hidden test

`tests/.../documents/e2e/documents-page-default-sort.e2e.test.ts`, owned by the benchmark. The client has no runner in the benchmark, so the test reads the client source: the default field is `documentDate` and the order `desc`, and the page uses the constant as its default.

| Change | Result |
|---|---|
| none | 2 of 2 pass |
| the constant set to `createdAt` | the first test fails |
| the page's `sortField` default set to `'createdAt'` | the second test fails |
