---
title: docs.documentation_contributor_accounts sessions_ended_on_reset = none
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-973BA4C869065C77
claim_text: Resetting the password of a documentation contributor account leaves existing sessions signed in until they expire
text_ref: REQ-docs-documentation-contributor-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-359'
  recorded_at: '2025-11-14T15:58:12.000Z'
id: FACT-docs-documentation-contributor-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a documentation contributor account leaves existing sessions signed in until they expire.

Modeled from REQ-docs-documentation-contributor-accounts-reset-and-sessions so the claim can be checked for contradictions.
