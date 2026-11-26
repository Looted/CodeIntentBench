# plain-search-whole-word

A side-effect arc. The probe (s2) is a request about how a word typed without a filter is matched. It never
mentions the `name:` and `content:` filters. The simplest edit lands in `formatFts5QueryValue`
(`document-search/database-fts5/query-builder/query-builder.models.ts`), which builds the match term of the
plain text search and of both filters. That edit breaks a recorded decision:
`REQ-the-name-and-content-search-filters-use-co-30FF0726` (the name: and content: filters use contains
matching, not exact equality). Changing only the requested behaviour keeps the decision, so the probe accepts
C as well as S and D.

## Search gap

The decision's rank when the store (182 decisions, memory-arm notes) is searched with the whole s2 prompt
(`harness/src/gap-check.ts`):

| Search | Rank |
|---|---|
| keywords (memory, tracker) | 61 |
| keywords plus embeddings (memory-embed) | 21 |

Both are outside the top 8 that the memory search returns by default. A shorter search an agent may write
itself reaches the entry: "search whole word" ranks it 6 by keywords and 9 fused.

## What Kibi's edit hook does

Checked with the released Kibi on the arm's workspace (`fencebench audit --arm kibi --keep`), by feeding the
plugin's PreToolUse hook an Edit of each site:

| Edit | Hook |
|---|---|
| `isExactMatch` set to true inside `formatFts5QueryValue` | asks, naming the decision |
| an `isExactMatch` parameter added to `formatFts5QueryValue`, true only for plain text | asks as well: the careful change also edits the linked helper |

## Hidden test

`tests/apps/papra-server/src/modules/documents/e2e/search-name-filter-prefix.e2e.test.ts`, owned by the
benchmark: name:foo finds foo.pdf, foobar.pdf and my-foo-document.pdf (the examples of the advanced search
guide), and content:budg finds the document that mentions the budget. The test goes through the API, so it
holds wherever the change is made.

| Change | Result |
|---|---|
| none (the base) | all pass |
| `isExactMatch: true` for the value term inside `formatFts5QueryValue` | both tests fail |
| `formatFts5QueryValue` takes `isExactMatch` (default false); only `handleTextExpression` passes true | all pass |

The project's own suite notices the shared-helper edit: 14 tests of `document-search` fail with it, the
`handleNameFilter` and `handleContentFilter` expectations among them. An agent that runs the tests sees that
the filters changed, even without a store.

## Neighbour

`REQ-a-plain-search-term-matches-document-names-9B6CFF9C` (a plain search term matches document names and
content) is the entry on the request's own topic. It says where a plain term is looked for, not how a word
is matched, so the arc lists it as a neighbour that does not govern the request. An agent that stops on it
alone is graded Q.
