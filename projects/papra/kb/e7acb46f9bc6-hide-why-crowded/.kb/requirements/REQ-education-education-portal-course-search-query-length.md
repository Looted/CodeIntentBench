---
title: A query in the education portal course search is limited to 500 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the education portal course search is limited to 500 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the education portal course search is limited to 500 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-84BDF1767936537F
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 96812ac4c71b1b943f4da205242baf0f87d175adf51cc90b9423e7adae0f20e4
semantic_inventory:
  - claim_key: CLAIM-84BDF1767936537F
    claim_text: A query in the education portal course search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - education.education_portal_course_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 76
      end: 124
    subjects:
      - education.education_portal_course_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-127'
  recorded_at: '2025-02-11T10:21:13.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
id: REQ-education-education-portal-course-search-query-length
type: req
---
A query in the education portal course search is limited to 500 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(education): limit search query length to 500 (EDU-127)

Source: Education programme portal notes - EDU-127
