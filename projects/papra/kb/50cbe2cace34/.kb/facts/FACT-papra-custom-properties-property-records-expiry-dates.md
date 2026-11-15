---
title: custom_properties.property records_expiry_dates = True
status: active
fact_kind: property_value
subject_key: custom_properties.property
property_key: records_expiry_dates
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F017ED49D3E3083E
claim_text: custom properties are the intended way to record such dates
text_ref: REQ-per-document-expiry-dates-are-not-a-separa-495A8BDE
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #413'
  recorded_at: '2026-11-15T21:46:03.124Z'
id: FACT-papra-custom-properties-property-records-expiry-dates
type: fact
---
Custom properties are the intended way to record such dates.

Modeled from REQ-per-document-expiry-dates-are-not-a-separa-495A8BDE so the claim can be checked for contradictions.
