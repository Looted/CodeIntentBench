---
title: infra.asset_url_signing_key missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: infra.asset_url_signing_key
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-infra-asset-url-signing-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-103'
  recorded_at: '2025-10-24T14:33:51.000Z'
id: FACT-infra-asset-url-signing-key-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-infra-asset-url-signing-key-generated-when-missing so the claim can be checked for contradictions.
