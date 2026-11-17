---
title: client.saved_views case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: client.saved_views
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-72B487E035B3799D
claim_text: two saved views that differ only by letter case are distinct
text_ref: REQ-client-saved-views-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:client-decisions
origin:
  kind: agent
  ref: 'Web client decision log (apps/papra-client): WCL-108'
  recorded_at: '2025-09-20T08:18:00.000Z'
id: FACT-client-saved-views-case-variants-distinct
type: fact
---
Two saved views that differ only by letter case are distinct.

Modeled from REQ-client-saved-views-case-sensitive-names so the claim can be checked for contradictions.
