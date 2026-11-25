---
title: At most 25 course labels can be added or removed in one request in the education portal.
status: active
semantic_text: At most 25 course labels can be added or removed in one request in the education portal.
semantic_clauses:
  - At most 25 course labels can be added or removed in one request in the education portal
logic_claims:
  - CLAIM-1D04982B721D7BB1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2125c0dd2b8a022c56c3c405fd91cede38062573fad1d8b77ec999d79700f608
semantic_inventory:
  - claim_key: CLAIM-1D04982B721D7BB1
    claim_text: At most 25 course labels can be added or removed in one request in the education portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - education.course_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-126'
  recorded_at: '2025-10-24T14:01:40.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Requests with more than 25 course labels timed out on slow connections.
id: REQ-education-course-labels-batch-size
type: req
---
At most 25 course labels can be added or removed in one request in the education portal.

## Context

Requests with more than 25 course labels timed out on slow connections.

## Source

> feat(education): batch course labels, 25 per request (EDU-126)

Source: Education programme portal notes - EDU-126
