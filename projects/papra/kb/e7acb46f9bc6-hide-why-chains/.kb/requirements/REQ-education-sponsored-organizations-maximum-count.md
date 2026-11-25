---
title: A school can have at most 2 sponsored organizations in the education portal; the limit is the same for everyone.
status: active
semantic_text: A school can have at most 2 sponsored organizations in the education portal; the limit is the same for everyone.
semantic_clauses:
  - A school can have at most 2 sponsored organizations in the education portal
  - the limit is the same for everyone
logic_claims:
  - CLAIM-875F4C728D4F2ADD
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 497e6406c21ba20f6f3b6478915c74d50b6b0c5ef5467005549a5bca4335124e
semantic_inventory:
  - claim_key: CLAIM-875F4C728D4F2ADD
    claim_text: A school can have at most 2 sponsored organizations in the education portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - education.sponsored_organizations
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 77
      end: 111
    subjects:
      - education.sponsored_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-237'
  recorded_at: '2026-05-13T15:19:32.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Each sponsored organization reserves resources whether or not it is used.
id: REQ-education-sponsored-organizations-maximum-count
type: req
---
A school can have at most 2 sponsored organizations in the education portal; the limit is the same for everyone.

## Context

Each sponsored organization reserves resources whether or not it is used.

## Source

> feat(education): limit sponsored organizations per school (EDU-237)

Source: Education programme portal notes - EDU-237
