---
title: Course label names in the education portal are limited to 100 characters.
status: active
semantic_text: Course label names in the education portal are limited to 100 characters.
semantic_clauses:
  - Course label names in the education portal are limited to 100 characters
logic_claims:
  - CLAIM-DF1B5E2A77796D48
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: acd11c87ded0a59f682e203792f54e94321ae3e742bb497683f2c3673619a840
semantic_inventory:
  - claim_key: CLAIM-DF1B5E2A77796D48
    claim_text: Course label names in the education portal are limited to 100 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - education.course_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-108'
  recorded_at: '2025-03-04T10:24:38.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Longer names broke the layout of the list where course labels are shown.
id: REQ-education-course-labels-name-length
type: req
---
Course label names in the education portal are limited to 100 characters.

## Context

Longer names broke the layout of the list where course labels are shown.

## Source

> feat(education): cap course label name length at 100 (EDU-108)

Source: Education programme portal notes - EDU-108
