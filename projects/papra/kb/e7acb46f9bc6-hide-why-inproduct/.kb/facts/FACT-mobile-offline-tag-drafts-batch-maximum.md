---
title: mobile.offline_tag_drafts batch_maximum = 50
status: active
fact_kind: property_value
subject_key: mobile.offline_tag_drafts
property_key: batch_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-676ABD8488874916
claim_text: At most 50 offline tag drafts can be added or removed in one request in the mobile app
text_ref: REQ-mobile-offline-tag-drafts-batch-size
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-151'
  recorded_at: '2025-07-20T08:24:00.000Z'
id: FACT-mobile-offline-tag-drafts-batch-maximum
type: fact
---
At most 50 offline tag drafts can be added or removed in one request in the mobile app.

Modeled from REQ-mobile-offline-tag-drafts-batch-size so the claim can be checked for contradictions.
