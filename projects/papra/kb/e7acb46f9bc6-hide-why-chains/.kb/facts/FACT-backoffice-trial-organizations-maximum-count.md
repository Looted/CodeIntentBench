---
title: backoffice.trial_organizations maximum_count = 2
status: active
fact_kind: property_value
subject_key: backoffice.trial_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-1CA18B14C1871837
claim_text: An email address can own at most 2 trial organizations in the Papra Cloud back office
text_ref: REQ-backoffice-trial-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-491'
  recorded_at: '2026-09-08T10:27:29.000Z'
id: FACT-backoffice-trial-organizations-maximum-count
type: fact
---
An email address can own at most 2 trial organizations in the Papra Cloud back office.

Modeled from REQ-backoffice-trial-organizations-maximum-count so the claim can be checked for contradictions.
