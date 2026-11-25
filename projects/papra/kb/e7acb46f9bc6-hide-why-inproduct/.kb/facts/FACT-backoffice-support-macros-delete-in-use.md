---
title: backoffice.support_macros delete_in_use = detached
status: active
fact_kind: property_value
subject_key: backoffice.support_macros
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-1A3C2759347DB4A8
claim_text: Deleting a support macro in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use
text_ref: REQ-backoffice-support-macros-delete-in-use
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-121'
  recorded_at: '2026-04-17T16:31:35.000Z'
id: FACT-backoffice-support-macros-delete-in-use
type: fact
---
Deleting a support macro in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-backoffice-support-macros-delete-in-use so the claim can be checked for contradictions.
