---
title: license.license_lookup page_size_maximum = 20
status: active
fact_kind: property_value
subject_key: license.license_lookup
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-040034F85CC0F44A
claim_text: The license lookup returns at most 20 results per page
text_ref: REQ-license-license-lookup-page-size
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-118'
  recorded_at: '2026-06-10T09:07:51.000Z'
id: FACT-license-license-lookup-page-size-maximum
type: fact
---
The license lookup returns at most 20 results per page.

Modeled from REQ-license-license-lookup-page-size so the claim can be checked for contradictions.
