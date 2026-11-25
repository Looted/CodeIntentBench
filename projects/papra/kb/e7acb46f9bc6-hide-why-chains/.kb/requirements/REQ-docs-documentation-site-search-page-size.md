---
title: The documentation site search returns at most 25 results per page.
status: active
semantic_text: The documentation site search returns at most 25 results per page.
semantic_clauses:
  - The documentation site search returns at most 25 results per page
logic_claims:
  - CLAIM-A267D95F50F037D4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e0f3ad483cb13ed24e97dba2603c78aa1061bd053fbc886facdef593fc791637
semantic_inventory:
  - claim_key: CLAIM-A267D95F50F037D4
    claim_text: The documentation site search returns at most 25 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - docs.documentation_site_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-211'
  recorded_at: '2026-09-26T08:50:58.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Larger pages were slow on the devices most people use.
id: REQ-docs-documentation-site-search-page-size
type: req
---
The documentation site search returns at most 25 results per page.

## Context

Larger pages were slow on the devices most people use.

## Source

> feat(docs): 25 results per page (DOC-211)

Source: Documentation site decision log (apps/docs) - DOC-211
