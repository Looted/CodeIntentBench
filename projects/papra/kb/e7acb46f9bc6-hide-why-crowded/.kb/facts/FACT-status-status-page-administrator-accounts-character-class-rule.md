---
title: status.status_page_administrator_accounts character_class_rule = False
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: character_class_rule
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3BB7AA89852B2146
claim_text: there is no rule about character classes
text_ref: REQ-status-status-page-administrator-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-311'
  recorded_at: '2025-08-06T12:15:57.000Z'
id: FACT-status-status-page-administrator-accounts-character-class-rule
type: fact
---
There is no rule about character classes.

Modeled from REQ-status-status-page-administrator-accounts-password-length so the claim can be checked for contradictions.
