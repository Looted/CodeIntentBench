---
title: backoffice.organizations purged_after_window = True
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-backoffice-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-453'
  recorded_at: '2026-04-10T15:37:21.000Z'
id: FACT-backoffice-organizations-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-backoffice-organizations-deletion-grace so the claim can be checked for contradictions.
