---
title: A query in the API reference search is limited to 4096 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the API reference search is limited to 4096 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the API reference search is limited to 4096 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-D9091A71CB02BC77
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d1436d575d91707e68a35ea1e8ec2f3bc7336bf5c1b30cf7cb8202f15215acbc
semantic_inventory:
  - claim_key: CLAIM-D9091A71CB02BC77
    claim_text: A query in the API reference search is limited to 4096 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - docs.api_reference_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 116
    subjects:
      - docs.api_reference_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-229'
  recorded_at: '2025-02-10T10:13:41.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: The query is passed in a URL, and longer ones were cut by proxies on the way.
id: REQ-docs-api-reference-search-query-length
type: req
---
A query in the API reference search is limited to 4096 characters; longer input is cut to the limit without an error.

## Context

The query is passed in a URL, and longer ones were cut by proxies on the way.

## Source

> feat(docs): limit search query length to 4096 (DOC-229)

Source: Documentation site decision log (apps/docs) - DOC-229
