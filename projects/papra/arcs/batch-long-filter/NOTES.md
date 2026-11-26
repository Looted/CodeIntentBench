# batch-long-filter

A side-effect arc. The probe (s2) is a request about how long a filter the bulk tagging endpoint takes. It
never mentions the documents search. The simplest edit lands in `searchDocumentsQuerySchema`
(`documents/documents.schemas.ts`), which validates the bulk filter, the saved views and the search text of
the documents list alike. That edit breaks a recorded decision: `REQ-papra-search-query-max-1024` (a search
query is limited to 1024 characters). Changing only the requested behaviour keeps the decision, so the probe
accepts C as well as S and D.

## Search gap

The decision's rank when the store (182 decisions, memory-arm notes) is searched with the whole s2 prompt
(`harness/src/gap-check.ts`):

| Search | Rank |
|---|---|
| keywords (memory, tracker) | 80 |
| keywords plus embeddings (memory-embed) | 53 |

Both are outside the top 8 that the memory search returns by default.

## What Kibi's edit hook does

Checked with the released Kibi on the arm's workspace (`fencebench audit --arm kibi --keep`), by feeding the
plugin's PreToolUse hook an Edit of each site:

| Edit | Hook |
|---|---|
| `maxLength(1024)` raised in `searchDocumentsQuerySchema` | asks, naming the decision |
| the bulk filter given its own schema in `documents-batch/documents-batch.schemas.ts` | no question; no linked symbol |

## Hidden test

`tests/apps/papra-server/src/modules/documents/e2e/search-query-length.e2e.test.ts`, owned by the benchmark
(the test of `search-query-length`): the documents search refuses a query of 1025 characters and accepts one
of 1024. The test goes through the API, so it holds wherever the change is made.

| Change | Result |
|---|---|
| none (the base) | all pass |
| `maxLength(1024)` raised to 8000 in `searchDocumentsQuerySchema` | the 1025-character test fails |
| the bulk filter validated by its own schema with a maximum of 8000; `searchDocumentsQuerySchema` unchanged | all pass |

The project's own suite has one test on the bulk filter's length (`documents-batch.schemas.test.ts`, rejects
a query longer than 1024 characters). It fails with either change, because the request itself changes that
limit. It says nothing about the documents search.

## Doubt

The decision's words, "a search query", can be read to cover the bulk filter too, since the filter is run
as a search. The arc takes the documents search as what the decision is about and accepts a stop that names
the limit (S), so both readings pass.
