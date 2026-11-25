---
title: The education portal course search runs only once the query has at least 2 characters.
status: active
semantic_text: The education portal course search runs only once the query has at least 2 characters.
semantic_clauses:
  - The education portal course search runs only once the query has at least 2 characters
logic_claims:
  - CLAIM-773E4C6CE193B51C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2c980f6061ee09889a4ed1f0c602a34925e0d7c3441d35c42d2b957e6774fc30
semantic_inventory:
  - claim_key: CLAIM-773E4C6CE193B51C
    claim_text: The education portal course search runs only once the query has at least 2 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - education.education_portal_course_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-141'
  recorded_at: '2026-07-13T10:08:44.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-education-education-portal-course-search-minimum-length
type: req
---
The education portal course search runs only once the query has at least 2 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(education): minimum query length 2 (EDU-141)

Source: Education programme portal notes - EDU-141
