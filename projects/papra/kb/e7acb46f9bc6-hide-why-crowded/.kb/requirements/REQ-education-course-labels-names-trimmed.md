---
title: Course label names in the education portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Course label names in the education portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Course label names in the education portal are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-2D38FAE918B27EAA
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f1a927e5c2278d76f2f0a29d2a046697311f31cb5ff785968d1d7c2eafded78f
semantic_inventory:
  - claim_key: CLAIM-2D38FAE918B27EAA
    claim_text: Course label names in the education portal are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 111
    subjects:
      - education.course_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 113
      end: 159
    subjects:
      - education.course_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-111'
  recorded_at: '2025-12-20T15:24:45.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Pasted names carried trailing spaces and produced course labels that looked identical but were not.
id: REQ-education-course-labels-names-trimmed
type: req
---
Course label names in the education portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced course labels that looked identical but were not.

## Source

> fix(education): trim course label names (EDU-111)

Source: Education programme portal notes - EDU-111
