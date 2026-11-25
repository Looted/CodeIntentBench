---
title: mobile.saved_filters delete_in_use = detached
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-8859A659944E6E85
claim_text: Deleting a saved filter in the mobile app removes it from everything that uses it, without confirmation for each use
text_ref: REQ-mobile-saved-filters-delete-in-use
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-150'
  recorded_at: '2025-05-15T10:27:25.000Z'
id: FACT-mobile-saved-filters-delete-in-use
type: fact
---
Deleting a saved filter in the mobile app removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-mobile-saved-filters-delete-in-use so the claim can be checked for contradictions.
