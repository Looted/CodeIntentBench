---
title: Course labels in the education portal are unique per classroom regardless of letter case; a duplicate is reported as course-label-already-exists.
status: active
semantic_text: Course labels in the education portal are unique per classroom regardless of letter case; a duplicate is reported as course-label-already-exists.
semantic_clauses:
  - Course labels in the education portal are unique per classroom regardless of letter case
  - a duplicate is reported as course-label-already-exists
logic_claims:
  - CLAIM-1B6DAC1D11960F69
  - CLAIM-5024943BE55584C3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ac062b5308bb9b6e30f206836a64f446983bfb214dcfd86c1e1b8b021fdc3d52
semantic_inventory:
  - claim_key: CLAIM-1B6DAC1D11960F69
    claim_text: Course labels in the education portal are unique per classroom regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - education.course_labels
  - claim_key: CLAIM-5024943BE55584C3
    claim_text: a duplicate is reported as course-label-already-exists
    role: descriptive
    status: modeled
    span:
      start: 90
      end: 144
    subjects:
      - education.course_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-102'
  recorded_at: '2025-05-18T17:15:37.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
id: REQ-education-course-labels-unique-ignoring-case
type: req
---
Course labels in the education portal are unique per classroom regardless of letter case; a duplicate is reported as course-label-already-exists.

## Context

Reason not stated.

## Source

> feat(education): case-insensitive unique course label names (EDU-102)

Source: Education programme portal notes - EDU-102
