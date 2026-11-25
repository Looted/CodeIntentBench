---
title: mobile.pinned_organizations counted_toward_limit = all accessible
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: all accessible
claim_key: CLAIM-80D07BE012A70DFA
claim_text: Every pinned organization the device can access counts toward the limit in the mobile app
text_ref: REQ-mobile-pinned-organizations-what-counts
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-242'
  recorded_at: '2026-08-12T11:16:14.000Z'
id: FACT-mobile-pinned-organizations-counted-toward-limit
type: fact
---
Every pinned organization the device can access counts toward the limit in the mobile app.

Modeled from REQ-mobile-pinned-organizations-what-counts so the claim can be checked for contradictions.
