---
title: website.newsletter_preference_accounts reset_link_minutes = 10
status: deprecated
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-138B0783A0BC87FE
claim_text: Password reset links for newsletter preference accounts are valid for 10 minutes
text_ref: REQ-website-newsletter-preference-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-414'
  recorded_at: '2026-06-26T12:38:51.000Z'
id: FACT-website-newsletter-preference-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for newsletter preference accounts are valid for 10 minutes.

Modeled from REQ-website-newsletter-preference-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
