---
title: At most 25 glossary terms can be added or removed in one request on the documentation site.
status: active
semantic_text: At most 25 glossary terms can be added or removed in one request on the documentation site.
semantic_clauses:
  - At most 25 glossary terms can be added or removed in one request on the documentation site
logic_claims:
  - CLAIM-BBA4195AE3765A29
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7d989923cb7efc6055c77250f8875cd45d6387875e63c90bb189195e95e828fb
semantic_inventory:
  - claim_key: CLAIM-BBA4195AE3765A29
    claim_text: At most 25 glossary terms can be added or removed in one request on the documentation site
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - docs.glossary_terms
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-140'
  recorded_at: '2025-06-05T13:23:23.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Requests with more than 25 glossary terms timed out on slow connections.
id: REQ-docs-glossary-terms-batch-size
type: req
---
At most 25 glossary terms can be added or removed in one request on the documentation site.

## Context

Requests with more than 25 glossary terms timed out on slow connections.

## Source

> feat(docs): batch glossary terms, 25 per request (DOC-140)

Source: Documentation site decision log (apps/docs) - DOC-140
