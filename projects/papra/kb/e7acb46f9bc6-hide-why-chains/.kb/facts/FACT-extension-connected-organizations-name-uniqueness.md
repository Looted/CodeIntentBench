---
title: extension.connected_organizations name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: extension.connected_organizations
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-806743A7E0504985
claim_text: Connected organization names in the browser extension are unique per browser profile, regardless of letter case
text_ref: REQ-extension-connected-organizations-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-310'
  recorded_at: '2026-03-02T10:42:07.000Z'
id: FACT-extension-connected-organizations-name-uniqueness
type: fact
---
Connected organization names in the browser extension are unique per browser profile, regardless of letter case.

Modeled from REQ-extension-connected-organizations-name-uniqueness so the claim can be checked for contradictions.
