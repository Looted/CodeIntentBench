---
title: backoffice.backoffice_session_secret missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-backoffice-backoffice-session-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-340'
  recorded_at: '2025-07-12T10:59:20.000Z'
id: FACT-backoffice-backoffice-session-secret-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-backoffice-backoffice-session-secret-generated-when-missing so the claim can be checked for contradictions.
