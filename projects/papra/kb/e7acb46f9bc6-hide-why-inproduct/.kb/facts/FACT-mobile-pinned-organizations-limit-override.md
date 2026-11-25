---
title: mobile.pinned_organizations limit_override = per owner
status: active
fact_kind: property_value
subject_key: mobile.pinned_organizations
property_key: limit_override
operator: eq
value_type: string
value_string: per owner
claim_key: CLAIM-39845890AB99839C
claim_text: Staff can raise or lower the pinned organization limit for an individual device in the mobile app
text_ref: REQ-mobile-pinned-organizations-limit-override
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-245'
  recorded_at: '2026-06-01T09:44:49.000Z'
id: FACT-mobile-pinned-organizations-limit-override
type: fact
---
Staff can raise or lower the pinned organization limit for an individual device in the mobile app.

Modeled from REQ-mobile-pinned-organizations-limit-override so the claim can be checked for contradictions.
