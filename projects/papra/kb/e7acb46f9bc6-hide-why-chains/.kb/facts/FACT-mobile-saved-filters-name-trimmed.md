---
title: mobile.saved_filters name_trimmed = True
status: active
fact_kind: property_value
subject_key: mobile.saved_filters
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6A54785CAE34906F
claim_text: Saved filter names in the mobile app are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-mobile-saved-filters-names-trimmed
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-144'
  recorded_at: '2025-08-15T13:22:48.000Z'
id: FACT-mobile-saved-filters-name-trimmed
type: fact
---
Saved filter names in the mobile app are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-mobile-saved-filters-names-trimmed so the claim can be checked for contradictions.
