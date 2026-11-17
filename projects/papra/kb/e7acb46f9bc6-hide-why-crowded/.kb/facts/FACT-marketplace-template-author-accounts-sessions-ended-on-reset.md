---
title: marketplace.template_author_accounts sessions_ended_on_reset = all but current
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all but current
claim_key: CLAIM-2A8464A32593E42A
claim_text: Resetting the password of a template author account keeps the session that performed the reset and ends all others
text_ref: REQ-marketplace-template-author-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-253'
  recorded_at: '2026-06-23T17:20:28.000Z'
id: FACT-marketplace-template-author-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a template author account keeps the session that performed the reset and ends all others.

Modeled from REQ-marketplace-template-author-accounts-reset-and-sessions so the claim can be checked for contradictions.
