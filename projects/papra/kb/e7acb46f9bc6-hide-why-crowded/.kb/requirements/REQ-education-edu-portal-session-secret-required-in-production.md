---
title: The education portal refuses to start in production without EDU_PORTAL_SESSION_SECRET.
status: active
semantic_text: The education portal refuses to start in production without EDU_PORTAL_SESSION_SECRET.
semantic_clauses:
  - The education portal refuses to start in production without EDU_PORTAL_SESSION_SECRET
logic_claims:
  - CLAIM-8BA1DE3853A4C15D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 43c950db68d9546325e1e4a52408e79caa80daf398f0c0bb3e1950b0b88d4c96
semantic_inventory:
  - claim_key: CLAIM-8BA1DE3853A4C15D
    claim_text: The education portal refuses to start in production without EDU_PORTAL_SESSION_SECRET
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - education.edu_portal_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-159'
  recorded_at: '2026-08-07T15:06:33.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
id: REQ-education-edu-portal-session-secret-required-in-production
type: req
---
The education portal refuses to start in production without EDU_PORTAL_SESSION_SECRET.

## Context

Reason not stated.

## Source

> feat(education): require EDU_PORTAL_SESSION_SECRET in production (EDU-159)

Source: Education programme portal notes - EDU-159
