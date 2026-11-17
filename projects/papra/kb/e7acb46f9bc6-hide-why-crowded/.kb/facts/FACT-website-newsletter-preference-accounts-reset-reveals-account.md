---
title: website.newsletter_preference_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-E35EE6EEA7D7BE22
claim_text: Asking for a password reset for an address that has no account among newsletter preference accounts gives the same answer as for one that does
text_ref: REQ-website-newsletter-preference-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-471'
  recorded_at: '2025-12-14T13:10:55.000Z'
id: FACT-website-newsletter-preference-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among newsletter preference accounts gives the same answer as for one that does.

Modeled from REQ-website-newsletter-preference-accounts-reset-unknown-address so the claim can be checked for contradictions.
