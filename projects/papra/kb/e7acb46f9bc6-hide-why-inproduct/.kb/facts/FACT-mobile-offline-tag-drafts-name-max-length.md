---
title: mobile.offline_tag_drafts name_max_length = 64
status: active
fact_kind: property_value
subject_key: mobile.offline_tag_drafts
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-1E4B29B88B85168D
claim_text: Offline tag draft names in the mobile app are limited to 64 characters
text_ref: REQ-mobile-offline-tag-drafts-name-length
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-131'
  recorded_at: '2025-05-23T14:26:11.000Z'
id: FACT-mobile-offline-tag-drafts-name-max-length
type: fact
---
Offline tag draft names in the mobile app are limited to 64 characters.

Modeled from REQ-mobile-offline-tag-drafts-name-length so the claim can be checked for contradictions.
