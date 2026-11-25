---
title: Glossary term names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is re…
status: active
semantic_text: Glossary term names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Glossary term names on the documentation site are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-22C91702E3280F2B
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c6989ffddc88e4532250036739e343db3b1274f8aafa266977d0eedddf88d707
semantic_inventory:
  - claim_key: CLAIM-22C91702E3280F2B
    claim_text: Glossary term names on the documentation site are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - docs.glossary_terms
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 116
      end: 162
    subjects:
      - docs.glossary_terms
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-116'
  recorded_at: '2025-12-02T08:26:23.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Pasted names carried trailing spaces and produced glossary terms that looked identical but were not.
id: REQ-docs-glossary-terms-names-trimmed
type: req
---
Glossary term names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced glossary terms that looked identical but were not.

## Source

> fix(docs): trim glossary term names (DOC-116)

Source: Documentation site decision log (apps/docs) - DOC-116
