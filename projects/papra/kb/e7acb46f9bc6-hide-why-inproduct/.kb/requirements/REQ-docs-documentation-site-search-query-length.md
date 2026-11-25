---
title: A query in the documentation site search is limited to 500 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the documentation site search is limited to 500 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the documentation site search is limited to 500 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-B1DD57FFC7297E6C
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 629ec3cc6b595e482ec4416535cade706385d1ea4ff0f3329e163a880a26bf9d
semantic_inventory:
  - claim_key: CLAIM-B1DD57FFC7297E6C
    claim_text: A query in the documentation site search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - docs.documentation_site_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 71
      end: 119
    subjects:
      - docs.documentation_site_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-145'
  recorded_at: '2025-05-13T15:24:41.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Very long queries were used to slow the search backend down.
id: REQ-docs-documentation-site-search-query-length
type: req
---
A query in the documentation site search is limited to 500 characters; longer input is rejected with a validation error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(docs): limit search query length to 500 (DOC-145)

Source: Documentation site decision log (apps/docs) - DOC-145
