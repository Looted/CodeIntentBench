---
title: docs.documentation_contributor_accounts concurrent_sessions = 2
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-0CA8DB9F7325F173
claim_text: A documentation contributor account can have at most 2 sessions at a time
text_ref: REQ-docs-documentation-contributor-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-391'
  recorded_at: '2025-12-28T13:56:35.000Z'
id: FACT-docs-documentation-contributor-accounts-concurrent-sessions
type: fact
---
A documentation contributor account can have at most 2 sessions at a time.

Modeled from REQ-docs-documentation-contributor-accounts-concurrent-sessions so the claim can be checked for contradictions.
