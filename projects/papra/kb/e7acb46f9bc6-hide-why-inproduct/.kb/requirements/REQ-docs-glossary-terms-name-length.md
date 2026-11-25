---
title: Glossary term names on the documentation site are limited to 40 characters.
status: active
semantic_text: Glossary term names on the documentation site are limited to 40 characters.
semantic_clauses:
  - Glossary term names on the documentation site are limited to 40 characters
logic_claims:
  - CLAIM-91896602861B2A4B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8021ec5c3896f13fe8e2b89bdca6f5ec53861c2191164d785bedfa8b3b38368f
semantic_inventory:
  - claim_key: CLAIM-91896602861B2A4B
    claim_text: Glossary term names on the documentation site are limited to 40 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - docs.glossary_terms
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-108'
  recorded_at: '2025-07-20T17:15:49.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: The column that stores the name is 40 characters wide.
id: REQ-docs-glossary-terms-name-length
type: req
---
Glossary term names on the documentation site are limited to 40 characters.

## Context

The column that stores the name is 40 characters wide.

## Source

> feat(docs): cap glossary term name length at 40 (DOC-108)

Source: Documentation site decision log (apps/docs) - DOC-108
