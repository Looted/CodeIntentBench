---
title: search.index maintained_by = document_event_handlers
status: active
fact_kind: property_value
subject_key: search.index
property_key: maintained_by
operator: eq
value_type: string
value_string: document_event_handlers
claim_key: CLAIM-5E984BDF0E20280A
claim_text: The full-text search index is maintained by event handlers on document created, updated, trashed and restored events
text_ref: REQ-the-full-text-search-index-is-maintained-b-1B169822
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #683'
  recorded_at: '2026-11-15T21:51:13.685Z'
id: FACT-papra-search-index-maintained-by
type: fact
---
The full-text search index is maintained by event handlers on document created, updated, trashed and restored events.

Modeled from REQ-the-full-text-search-index-is-maintained-b-1B169822 so the claim can be checked for contradictions.
