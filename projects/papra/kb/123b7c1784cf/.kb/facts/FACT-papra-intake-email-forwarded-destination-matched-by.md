---
title: intake_email.forwarded_destination matched_by = original_destination_address
status: active
fact_kind: property_value
subject_key: intake_email.forwarded_destination
property_key: matched_by
operator: eq
value_type: string
value_string: original_destination_address
claim_key: CLAIM-EF6B8CD050931A02
claim_text: A forwarded intake email is matched by its original destination address when one is available
text_ref: REQ-papra-intake-uses-original-destination
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #655: Intake email edge case: use original destination addresses w'
  recorded_at: '2026-11-25T19:31:02.403Z'
id: FACT-papra-intake-email-forwarded-destination-matched-by
type: fact
---
A forwarded intake email is matched by its original destination address when one is available.

Modeled from REQ-papra-intake-uses-original-destination so the claim can be checked for contradictions.
