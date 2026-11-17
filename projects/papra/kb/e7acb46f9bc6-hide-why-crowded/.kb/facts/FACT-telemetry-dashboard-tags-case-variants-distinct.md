---
title: telemetry.dashboard_tags case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: telemetry.dashboard_tags
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4FD622A0EBDFC33A
claim_text: two dashboard tags that differ only by letter case are distinct
text_ref: REQ-telemetry-dashboard-tags-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-102'
  recorded_at: '2025-10-21T13:15:42.000Z'
id: FACT-telemetry-dashboard-tags-case-variants-distinct
type: fact
---
Two dashboard tags that differ only by letter case are distinct.

Modeled from REQ-telemetry-dashboard-tags-case-sensitive-names so the claim can be checked for contradictions.
