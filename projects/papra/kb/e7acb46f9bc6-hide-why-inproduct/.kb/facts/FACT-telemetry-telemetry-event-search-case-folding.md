---
title: telemetry.telemetry_event_search case_folding = case ignored
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_event_search
property_key: case_folding
operator: eq
value_type: string
value_string: case ignored
claim_key: CLAIM-92A8EBA1EDA6BFF6
claim_text: Matching in the telemetry event search ignores letter case but not accents
text_ref: REQ-telemetry-telemetry-event-search-case-folding
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-157'
  recorded_at: '2025-04-13T16:47:28.000Z'
id: FACT-telemetry-telemetry-event-search-case-folding
type: fact
---
Matching in the telemetry event search ignores letter case but not accents.

Modeled from REQ-telemetry-telemetry-event-search-case-folding so the claim can be checked for contradictions.
