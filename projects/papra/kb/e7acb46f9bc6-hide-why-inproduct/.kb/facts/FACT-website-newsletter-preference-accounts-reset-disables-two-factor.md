---
title: website.newsletter_preference_accounts reset_disables_two_factor = False
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-660E8A76390B41A6
claim_text: Resetting the password of a newsletter preference account does not turn off two-factor authentication
text_ref: REQ-website-newsletter-preference-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-391'
  recorded_at: '2025-06-11T12:28:59.000Z'
id: FACT-website-newsletter-preference-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a newsletter preference account does not turn off two-factor authentication.

Modeled from REQ-website-newsletter-preference-accounts-reset-and-two-factor so the claim can be checked for contradictions.
