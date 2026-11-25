---
title: website.newsletter_preference_accounts session_idle_minutes = 60
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-F3D76F855733BF57
claim_text: they end after 60 minutes without activity
text_ref: REQ-website-newsletter-preference-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-378'
  recorded_at: '2025-12-19T13:10:45.000Z'
id: FACT-website-newsletter-preference-accounts-session-idle-minutes
type: fact
---
They end after 60 minutes without activity.

Modeled from REQ-website-newsletter-preference-accounts-session-lifetime so the claim can be checked for contradictions.
