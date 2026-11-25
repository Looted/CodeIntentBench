---
title: marketplace.template_author_accounts session_days = 7
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-63454F75B6FE621F
claim_text: Sessions of template author accounts last at most 7 days
text_ref: REQ-marketplace-template-author-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-207'
  recorded_at: '2026-07-26T17:59:52.000Z'
id: FACT-marketplace-template-author-accounts-session-days
type: fact
---
Sessions of template author accounts last at most 7 days.

Modeled from REQ-marketplace-template-author-accounts-session-lifetime so the claim can be checked for contradictions.
