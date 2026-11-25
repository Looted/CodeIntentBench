---
title: 'An invalid date in the since: filter of the API reference search makes the search return nothing.'
status: active
semantic_text: 'An invalid date in the since: filter of the API reference search makes the search return nothing.'
semantic_clauses:
  - 'An invalid date in the since: filter of the API reference search makes the search return nothing'
logic_claims:
  - CLAIM-9ED7FCED9DD730F6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a5fc1afafe1c39d1dd1f50f01d358606591c1e54a05dfbbee3a50860f0f54bad
semantic_inventory:
  - claim_key: CLAIM-9ED7FCED9DD730F6
    claim_text: 'An invalid date in the since: filter of the API reference search makes the search return nothing'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - docs.api_reference_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-232'
  recorded_at: '2025-02-26T14:11:06.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: A filter that cannot be understood must not be read as "no restriction".
id: REQ-docs-api-reference-search-invalid-date
type: req
---
An invalid date in the since: filter of the API reference search makes the search return nothing.

## Context

A filter that cannot be understood must not be read as "no restriction".

## Source

> fix(docs): invalid date in since: filter (DOC-232)

Source: Documentation site decision log (apps/docs) - DOC-232
