---
title: license.license_portal_accounts reset_confirmation_email = False
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-09B9FEB850F8019E
claim_text: A completed password reset for license portal accounts sends no confirmation email
text_ref: REQ-license-license-portal-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-186'
  recorded_at: '2025-03-04T16:24:27.000Z'
id: FACT-license-license-portal-accounts-reset-confirmation-email
type: fact
---
A completed password reset for license portal accounts sends no confirmation email.

Modeled from REQ-license-license-portal-accounts-reset-notification so the claim can be checked for contradictions.
