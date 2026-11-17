---
title: marketplace.template_author_accounts session_idle_minutes = 30
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-3547C110EC2A0F3A
claim_text: they end after 30 minutes without activity
text_ref: REQ-marketplace-template-author-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-275'
  recorded_at: '2026-07-26T17:59:52.000Z'
id: FACT-marketplace-template-author-accounts-session-idle-minutes
type: fact
---
They end after 30 minutes without activity.

Modeled from REQ-marketplace-template-author-accounts-session-lifetime so the claim can be checked for contradictions.
