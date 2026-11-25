---
title: Passwords of education portal accounts are at least 8 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of education portal accounts are at least 8 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of education portal accounts are at least 8 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-C51549E5113BCBB6
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a190dee7344e08d0cd4b3216c24e57eef44f73f612f3c74b0ece249e534a451b
semantic_inventory:
  - claim_key: CLAIM-C51549E5113BCBB6
    claim_text: Passwords of education portal accounts are at least 8 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - education.education_portal_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 111
    subjects:
      - education.education_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-159'
  recorded_at: '2026-05-21T11:19:06.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-education-education-portal-accounts-password-length
type: req
---
Passwords of education portal accounts are at least 8 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(education): password minimum length 8 (EDU-159)

Source: Education programme portal notes - EDU-159
