---
title: A password reset link for education portal accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for education portal accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for education portal accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-8447222FBF586CC0
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a17b921874ecada15d660b71e955a57a0218a081c6736c4434d8ad913b9c6c80
semantic_inventory:
  - claim_key: CLAIM-8447222FBF586CC0
    claim_text: A password reset link for education portal accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - education.education_portal_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 64
      end: 114
    subjects:
      - education.education_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-287'
  recorded_at: '2025-06-03T11:46:05.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
id: REQ-education-education-portal-accounts-reset-link-single-use
type: req
---
A password reset link for education portal accounts works once; requesting a new link invalidates the earlier ones.

## Context

Reason not stated.

## Source

> feat(education): single-use reset links (EDU-287)

Source: Education programme portal notes - EDU-287
