---
title: support.support_portal_accounts character_class_rule = False
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: character_class_rule
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3BB7AA89852B2146
claim_text: there is no rule about character classes
text_ref: REQ-support-support-portal-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-386'
  recorded_at: '2026-01-02T08:20:07.000Z'
id: FACT-support-support-portal-accounts-character-class-rule
type: fact
---
There is no rule about character classes.

Modeled from REQ-support-support-portal-accounts-password-length so the claim can be checked for contradictions.
