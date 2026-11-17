---
title: website.newsletter_preference_accounts reset_confirmation_email = False
status: active
fact_kind: property_value
subject_key: website.newsletter_preference_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-8E58590F8FE9703D
claim_text: A completed password reset for newsletter preference accounts sends no confirmation email
text_ref: REQ-website-newsletter-preference-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-473'
  recorded_at: '2026-04-09T10:47:35.000Z'
id: FACT-website-newsletter-preference-accounts-reset-confirmation-email
type: fact
---
A completed password reset for newsletter preference accounts sends no confirmation email.

Modeled from REQ-website-newsletter-preference-accounts-reset-notification so the claim can be checked for contradictions.
