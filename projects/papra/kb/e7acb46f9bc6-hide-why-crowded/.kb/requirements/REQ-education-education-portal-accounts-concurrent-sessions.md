---
title: An education portal account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: An education portal account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - An education portal account can have at most 2 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-FFC932C527171E37
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 30d5c862d6266da4a42f8367e7cb2ae881ac8f73be1cdd711f1adbb268c43ed3
semantic_inventory:
  - claim_key: CLAIM-FFC932C527171E37
    claim_text: An education portal account can have at most 2 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - education.education_portal_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 109
    subjects:
      - education.education_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-307'
  recorded_at: '2025-11-01T10:25:38.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
id: REQ-education-education-portal-accounts-concurrent-sessions
type: req
---
An education portal account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(education): limit concurrent sessions (EDU-307)

Source: Education programme portal notes - EDU-307
