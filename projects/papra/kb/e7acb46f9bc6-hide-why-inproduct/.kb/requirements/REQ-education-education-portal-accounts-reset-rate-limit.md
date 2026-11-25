---
title: At most 3 password reset emails are sent per account per hour for education portal accounts.
status: active
semantic_text: At most 3 password reset emails are sent per account per hour for education portal accounts.
semantic_clauses:
  - At most 3 password reset emails are sent per account per hour for education portal accounts
logic_claims:
  - CLAIM-25216AE980D05137
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7a7aae3cc22488aa6d0b32eed40d264bbdba1eb52acc5f478857fbbeef54bab7
semantic_inventory:
  - claim_key: CLAIM-25216AE980D05137
    claim_text: At most 3 password reset emails are sent per account per hour for education portal accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - education.education_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-140'
  recorded_at: '2025-10-09T17:29:44.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
id: REQ-education-education-portal-accounts-reset-rate-limit
type: req
---
At most 3 password reset emails are sent per account per hour for education portal accounts.

## Context

Reason not stated.

## Source

> feat(education): limit reset emails (EDU-140)

Source: Education programme portal notes - EDU-140
