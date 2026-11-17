---
title: infra.infrastructure_console_accounts character_class_rule = False
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: character_class_rule
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3BB7AA89852B2146
claim_text: there is no rule about character classes
text_ref: REQ-infra-infrastructure-console-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-194'
  recorded_at: '2026-01-15T14:57:27.000Z'
id: FACT-infra-infrastructure-console-accounts-character-class-rule
type: fact
---
There is no rule about character classes.

Modeled from REQ-infra-infrastructure-console-accounts-password-length so the claim can be checked for contradictions.
