---
title: Deleting a glossary term on the documentation site removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a glossary term on the documentation site removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a glossary term on the documentation site removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-E91624D04B7C584C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc7c57727fcb5ae6ce6ee0949796cdae2c18cce8dc12b061869be31ae7474943
semantic_inventory:
  - claim_key: CLAIM-E91624D04B7C584C
    claim_text: Deleting a glossary term on the documentation site removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 125
    subjects:
      - docs.glossary_terms
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-151'
  recorded_at: '2026-01-11T12:34:10.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Asking for confirmation once per use made cleaning up glossary terms impractical.
id: REQ-docs-glossary-terms-delete-in-use
type: req
---
Deleting a glossary term on the documentation site removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up glossary terms impractical.

## Source

> feat(docs): deleting a glossary term detaches it (DOC-151)

Source: Documentation site decision log (apps/docs) - DOC-151
