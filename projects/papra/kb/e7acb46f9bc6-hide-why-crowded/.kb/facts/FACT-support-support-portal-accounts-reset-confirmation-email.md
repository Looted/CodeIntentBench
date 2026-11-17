---
title: support.support_portal_accounts reset_confirmation_email = True
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-71C7439FEEED6ABD
claim_text: A completed password reset for support portal accounts is confirmed by an email to the account address
text_ref: REQ-support-support-portal-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-368'
  recorded_at: '2026-03-03T14:17:31.000Z'
id: FACT-support-support-portal-accounts-reset-confirmation-email
type: fact
---
A completed password reset for support portal accounts is confirmed by an email to the account address.

Modeled from REQ-support-support-portal-accounts-reset-notification so the claim can be checked for contradictions.
