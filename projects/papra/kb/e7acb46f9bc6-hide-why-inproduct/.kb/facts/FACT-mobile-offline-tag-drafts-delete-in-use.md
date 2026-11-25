---
title: mobile.offline_tag_drafts delete_in_use = detached
status: active
fact_kind: property_value
subject_key: mobile.offline_tag_drafts
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-95446DA645D8B753
claim_text: Deleting an offline tag draft in the mobile app removes it from everything that uses it, without confirmation for each use
text_ref: REQ-mobile-offline-tag-drafts-delete-in-use
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-143'
  recorded_at: '2026-06-10T11:52:44.000Z'
id: FACT-mobile-offline-tag-drafts-delete-in-use
type: fact
---
Deleting an offline tag draft in the mobile app removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-mobile-offline-tag-drafts-delete-in-use so the claim can be checked for contradictions.
