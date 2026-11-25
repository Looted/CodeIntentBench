---
title: mobile.offline_tag_drafts name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: mobile.offline_tag_drafts
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-264AC07AF53AB76A
claim_text: Offline tag drafts in the mobile app are unique per device regardless of letter case
text_ref: REQ-mobile-offline-tag-drafts-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-179'
  recorded_at: '2026-09-19T09:42:04.000Z'
id: FACT-mobile-offline-tag-drafts-name-uniqueness
type: fact
---
Offline tag drafts in the mobile app are unique per device regardless of letter case.

Modeled from REQ-mobile-offline-tag-drafts-unique-ignoring-case so the claim can be checked for contradictions.
