---
title: marketplace.template_author_accounts concurrent_sessions = 10
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-401D57EFA0E16945
claim_text: A template author account can have at most 10 sessions at a time
text_ref: REQ-marketplace-template-author-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-212'
  recorded_at: '2026-06-05T15:36:52.000Z'
id: FACT-marketplace-template-author-accounts-concurrent-sessions
type: fact
---
A template author account can have at most 10 sessions at a time.

Modeled from REQ-marketplace-template-author-accounts-concurrent-sessions so the claim can be checked for contradictions.
