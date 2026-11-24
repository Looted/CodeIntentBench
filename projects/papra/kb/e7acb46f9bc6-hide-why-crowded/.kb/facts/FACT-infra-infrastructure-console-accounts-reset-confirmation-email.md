---
title: infra.infrastructure_console_accounts reset_confirmation_email = False
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-7964B3BA5EAD9C0C
claim_text: A completed password reset for infrastructure console accounts sends no confirmation email
text_ref: REQ-infra-infrastructure-console-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-185'
  recorded_at: '2025-04-12T16:25:24.000Z'
id: FACT-infra-infrastructure-console-accounts-reset-confirmation-email
type: fact
---
A completed password reset for infrastructure console accounts sends no confirmation email.

Modeled from REQ-infra-infrastructure-console-accounts-reset-notification so the claim can be checked for contradictions.
