---
title: Glossary terms on the documentation site are compared exactly as typed; two glossary terms that differ only by letter case are distinct.
status: active
semantic_text: Glossary terms on the documentation site are compared exactly as typed; two glossary terms that differ only by letter case are distinct.
semantic_clauses:
  - Glossary terms on the documentation site are compared exactly as typed
  - two glossary terms that differ only by letter case are distinct
logic_claims:
  - CLAIM-737D168E35E41DA9
  - CLAIM-202B5F03895CB93E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc8d4a003680a31f1374cea7d038e024c731e1ceaddc9a9390d2c99b6cbad512
semantic_inventory:
  - claim_key: CLAIM-737D168E35E41DA9
    claim_text: Glossary terms on the documentation site are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - docs.glossary_terms
  - claim_key: CLAIM-202B5F03895CB93E
    claim_text: two glossary terms that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 72
      end: 135
    subjects:
      - docs.glossary_terms
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-103'
  recorded_at: '2025-06-25T17:01:27.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Existing data already held glossary terms that differ only by case, and merging them would have lost information.
id: REQ-docs-glossary-terms-case-sensitive-names
type: req
---
Glossary terms on the documentation site are compared exactly as typed; two glossary terms that differ only by letter case are distinct.

## Context

Existing data already held glossary terms that differ only by case, and merging them would have lost information.

## Source

> docs(docs): glossary term names are case-sensitive (DOC-103)

Source: Documentation site decision log (apps/docs) - DOC-103
