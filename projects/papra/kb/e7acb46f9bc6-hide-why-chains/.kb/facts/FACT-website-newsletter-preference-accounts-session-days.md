---
title: website.newsletter_preference_accounts session_days = 14
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-DB9780F9FA8F18C9
claim_text: Sessions of newsletter preference accounts last at most 14 days
text_ref: REQ-website-newsletter-preference-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-486'
  recorded_at: '2025-12-19T13:10:45.000Z'
id: FACT-website-newsletter-preference-accounts-session-days
type: fact
---
Sessions of newsletter preference accounts last at most 14 days.

Modeled from REQ-website-newsletter-preference-accounts-session-lifetime so the claim can be checked for contradictions.
