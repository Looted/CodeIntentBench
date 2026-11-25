---
title: mobile.pinned_organizations limit_configurable = True
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F92BF09F63EFDC08
claim_text: the limit is configured per deployment and 100 is the default
text_ref: REQ-mobile-pinned-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-234'
  recorded_at: '2025-05-07T10:24:09.000Z'
id: FACT-mobile-pinned-organizations-limit-configurable
type: fact
---
The limit is configured per deployment and 100 is the default.

Modeled from REQ-mobile-pinned-organizations-maximum-count so the claim can be checked for contradictions.
