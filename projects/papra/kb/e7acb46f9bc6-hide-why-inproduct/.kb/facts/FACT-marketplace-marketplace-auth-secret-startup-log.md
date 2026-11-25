---
title: marketplace.marketplace_auth_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-marketplace-marketplace-auth-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-128'
  recorded_at: '2025-05-08T11:20:27.000Z'
id: FACT-marketplace-marketplace-auth-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-marketplace-marketplace-auth-secret-never-logged so the claim can be checked for contradictions.
