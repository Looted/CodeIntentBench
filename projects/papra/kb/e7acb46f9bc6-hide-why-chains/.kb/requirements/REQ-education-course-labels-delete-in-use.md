---
title: Deleting a course label in the education portal removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a course label in the education portal removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a course label in the education portal removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-5611DDC1A436FB84
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6aff957865d6b907794a48fba27c70f42b165929c94181921606799fd6f4bf10
semantic_inventory:
  - claim_key: CLAIM-5611DDC1A436FB84
    claim_text: Deleting a course label in the education portal removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - education.course_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-121'
  recorded_at: '2025-06-24T08:15:32.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Asking for confirmation once per use made cleaning up course labels impractical.
id: REQ-education-course-labels-delete-in-use
type: req
---
Deleting a course label in the education portal removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up course labels impractical.

## Source

> feat(education): deleting a course label detaches it (EDU-121)

Source: Education programme portal notes - EDU-121
