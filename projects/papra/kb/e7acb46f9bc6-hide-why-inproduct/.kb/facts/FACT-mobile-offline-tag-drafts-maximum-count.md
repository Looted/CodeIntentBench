---
title: mobile.offline_tag_drafts maximum_count = 100
status: active
fact_kind: property_value
subject_key: mobile.offline_tag_drafts
property_key: maximum_count
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-54CA3CF3EE4A67A5
claim_text: At most 100 offline tag drafts can be created per device in the mobile app
text_ref: REQ-mobile-offline-tag-drafts-maximum-count
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-129'
  recorded_at: '2025-09-26T10:34:51.000Z'
id: FACT-mobile-offline-tag-drafts-maximum-count
type: fact
---
At most 100 offline tag drafts can be created per device in the mobile app.

Modeled from REQ-mobile-offline-tag-drafts-maximum-count so the claim can be checked for contradictions.
