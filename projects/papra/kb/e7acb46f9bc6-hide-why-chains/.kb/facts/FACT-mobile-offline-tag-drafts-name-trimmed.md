---
title: mobile.offline_tag_drafts name_trimmed = True
status: active
fact_kind: property_value
subject_key: mobile.offline_tag_drafts
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-29CB4002F69F634D
claim_text: Offline tag draft names in the mobile app are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-mobile-offline-tag-drafts-names-trimmed
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-186'
  recorded_at: '2025-12-10T14:44:45.000Z'
id: FACT-mobile-offline-tag-drafts-name-trimmed
type: fact
---
Offline tag draft names in the mobile app are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-mobile-offline-tag-drafts-names-trimmed so the claim can be checked for contradictions.
