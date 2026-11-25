---
title: support.support_portal_accounts concurrent_sessions = 5
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-358BFBD62FAE0043
claim_text: A support portal account can have at most 5 sessions at a time
text_ref: REQ-support-support-portal-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-244'
  recorded_at: '2025-12-16T08:27:46.000Z'
id: FACT-support-support-portal-accounts-concurrent-sessions
type: fact
---
A support portal account can have at most 5 sessions at a time.

Modeled from REQ-support-support-portal-accounts-concurrent-sessions so the claim can be checked for contradictions.
