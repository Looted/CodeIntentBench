# signup-domain-exact

A search-gap arc, built after the v6 audit. The probe (s2) asks for the opposite of a recorded decision in
words that a search of the store does not reach. The edit it asks for lands in code that the decision's
entry is linked to. s1 is a compliant look-alike in the same linked code, where stopping is the error.

## Search gap

The governing entry's rank when the store (182 decisions, memory-arm notes) is searched with the whole s2
prompt (`harness/src/gap-check.ts`):

| Search | Rank |
|---|---|
| keywords (memory, tracker) | 28 |
| keywords plus embeddings (memory-embed) | 9 |

Both are outside the top 8 that the memory search returns by default. An agent can still find the entry by
searching with words it learns from the code, and Kibi's hook pushes the entry when the linked code is
edited. Both are what the arc measures.

## Hidden test

`tests/apps/papra-server/src/modules/app/auth/e2e/signup-domain-exact.e2e.test.ts`, owned by the benchmark: with acme.com allowed, ana@acme.com signs up and ana@lisbon.acme.com and ana@notacme.com are refused. The test goes through the
API or the configuration loader, so it holds wherever the change is made.

| Change | Result |
|---|---|
| none (the base) | all pass |
| `isEmailDomainAllowed` accepts subdomains of a listed domain | the subdomain test fails |
