---
title: backoffice.sandbox_organizations restore_window_days = 14
status: active
fact_kind: property_value
subject_key: backoffice.sandbox_organizations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-189543D5D6B710AC
claim_text: A deleted sandbox organization in the Papra Cloud back office can be restored for 14 days
text_ref: REQ-backoffice-sandbox-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-481'
  recorded_at: '2025-02-13T10:31:52.000Z'
id: FACT-backoffice-sandbox-organizations-restore-window-days
type: fact
---
A deleted sandbox organization in the Papra Cloud back office can be restored for 14 days.

Modeled from REQ-backoffice-sandbox-organizations-deletion-grace so the claim can be checked for contradictions.
