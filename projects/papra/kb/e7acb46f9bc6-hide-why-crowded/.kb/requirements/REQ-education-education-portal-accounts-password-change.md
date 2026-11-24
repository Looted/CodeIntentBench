---
title: Changing a password from the settings of an education portal account, as opposed to resetting it, keeps every session.
status: active
semantic_text: Changing a password from the settings of an education portal account, as opposed to resetting it, keeps every session.
semantic_clauses:
  - Changing a password from the settings of an education portal account, as opposed to resetting it, keeps every session
logic_claims:
  - CLAIM-1A29B95BDD59EC10
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d13a27476c4cec69930473998b1dfadf3186b49a9783b227177e5f9c47696917
semantic_inventory:
  - claim_key: CLAIM-1A29B95BDD59EC10
    claim_text: Changing a password from the settings of an education portal account, as opposed to resetting it, keeps every session
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - education.education_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-318'
  recorded_at: '2026-05-04T12:36:39.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: The person changing it is signed in and knows the old password, so the case differs from a reset.
id: REQ-education-education-portal-accounts-password-change
type: req
---
Changing a password from the settings of an education portal account, as opposed to resetting it, keeps every session.

## Context

The person changing it is signed in and knows the old password, so the case differs from a reset.

## Source

> feat(education): sessions after a password change (EDU-318)

Source: Education programme portal notes - EDU-318
