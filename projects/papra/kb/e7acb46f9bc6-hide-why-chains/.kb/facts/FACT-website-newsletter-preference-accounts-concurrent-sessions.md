---
title: website.newsletter_preference_accounts concurrent_sessions = 1
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-DA798F90A1E4CB8C
claim_text: A newsletter preference account can have at most 1 sessions at a time
text_ref: REQ-website-newsletter-preference-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-488'
  recorded_at: '2026-01-10T09:24:43.000Z'
id: FACT-website-newsletter-preference-accounts-concurrent-sessions
type: fact
---
A newsletter preference account can have at most 1 sessions at a time.

Modeled from REQ-website-newsletter-preference-accounts-concurrent-sessions so the claim can be checked for contradictions.
