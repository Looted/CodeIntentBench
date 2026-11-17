---
title: 'An invalid date in the starts: filter of the education portal course search makes the search return nothing.'
status: active
semantic_text: 'An invalid date in the starts: filter of the education portal course search makes the search return nothing.'
semantic_clauses:
  - 'An invalid date in the starts: filter of the education portal course search makes the search return nothing'
logic_claims:
  - CLAIM-756443B465ACB2A3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5315a79444bef711f61a0d0bca1ed85d4e589d140fc88ba9c772094d4b65c82c
semantic_inventory:
  - claim_key: CLAIM-756443B465ACB2A3
    claim_text: 'An invalid date in the starts: filter of the education portal course search makes the search return nothing'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - education.education_portal_course_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-135'
  recorded_at: '2025-05-13T12:06:52.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: People mistyped a date, got an empty list and assumed nothing existed.
id: REQ-education-education-portal-course-search-invalid-date
type: req
---
An invalid date in the starts: filter of the education portal course search makes the search return nothing.

## Context

People mistyped a date, got an empty list and assumed nothing existed.

## Source

> fix(education): invalid date in starts: filter (EDU-135)

Source: Education programme portal notes - EDU-135
