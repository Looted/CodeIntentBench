---
title: docs.documentation_contributor_accounts session_days = 7
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-5720DD9344A408F0
claim_text: Sessions of documentation contributor accounts last at most 7 days
text_ref: REQ-docs-documentation-contributor-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-211'
  recorded_at: '2025-12-28T13:41:28.000Z'
id: FACT-docs-documentation-contributor-accounts-session-days
type: fact
---
Sessions of documentation contributor accounts last at most 7 days.

Modeled from REQ-docs-documentation-contributor-accounts-session-lifetime so the claim can be checked for contradictions.
