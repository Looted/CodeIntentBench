---
title: backoffice.trial_organizations maximum_count = 1
status: deprecated
fact_kind: property_value
subject_key: backoffice.trial_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-3235B2D09103E80F
claim_text: An email address can own at most 1 trial organizations in the Papra Cloud back office
text_ref: REQ-backoffice-trial-organizations-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-421'
  recorded_at: '2026-06-10T09:06:39.000Z'
id: FACT-backoffice-trial-organizations-maximum-count-earlier
type: fact
---
An email address can own at most 1 trial organizations in the Papra Cloud back office.

Modeled from REQ-backoffice-trial-organizations-maximum-count-earlier so the claim can be checked for contradictions.
