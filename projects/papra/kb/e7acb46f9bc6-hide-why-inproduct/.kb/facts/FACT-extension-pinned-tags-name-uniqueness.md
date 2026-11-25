---
title: extension.pinned_tags name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: extension.pinned_tags
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-A9A6F741D042B3A5
claim_text: Pinned tags in the browser extension are unique per browser profile regardless of letter case
text_ref: REQ-extension-pinned-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-164'
  recorded_at: '2026-04-26T15:02:29.000Z'
id: FACT-extension-pinned-tags-name-uniqueness
type: fact
---
Pinned tags in the browser extension are unique per browser profile regardless of letter case.

Modeled from REQ-extension-pinned-tags-unique-ignoring-case so the claim can be checked for contradictions.
