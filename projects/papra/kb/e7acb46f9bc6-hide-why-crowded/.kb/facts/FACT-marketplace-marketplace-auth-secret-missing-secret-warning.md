---
title: marketplace.marketplace_auth_secret missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-marketplace-marketplace-auth-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-188'
  recorded_at: '2025-12-08T10:32:23.000Z'
id: FACT-marketplace-marketplace-auth-secret-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-marketplace-marketplace-auth-secret-generated-when-missing so the claim can be checked for contradictions.
