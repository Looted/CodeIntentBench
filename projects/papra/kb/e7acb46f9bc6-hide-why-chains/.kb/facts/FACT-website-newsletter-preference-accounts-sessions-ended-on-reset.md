---
title: website.newsletter_preference_accounts sessions_ended_on_reset = all but current
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all but current
claim_key: CLAIM-959320F06B0611E7
claim_text: Resetting the password of a newsletter preference account keeps the session that performed the reset and ends all others
text_ref: REQ-website-newsletter-preference-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-446'
  recorded_at: '2025-07-05T08:02:09.000Z'
id: FACT-website-newsletter-preference-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a newsletter preference account keeps the session that performed the reset and ends all others.

Modeled from REQ-website-newsletter-preference-accounts-reset-and-sessions so the claim can be checked for contradictions.
