---
title: Changing a password from the settings of a support portal account, as opposed to resetting it, keeps the current session and ends the others.
status: active
semantic_text: Changing a password from the settings of a support portal account, as opposed to resetting it, keeps the current session and ends the others.
semantic_clauses:
  - Changing a password from the settings of a support portal account, as opposed to resetting it, keeps the current session and ends the others
logic_claims:
  - CLAIM-5FA0BE46B7F7985A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 051de400c4ee94f2c3b49a48c0171151315b94bddcad3a47bfec01dfa1d1aea9
semantic_inventory:
  - claim_key: CLAIM-5FA0BE46B7F7985A
    claim_text: Changing a password from the settings of a support portal account, as opposed to resetting it, keeps the current session and ends the others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 140
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-402'
  recorded_at: '2025-05-08T09:55:50.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: The person changing it is signed in and knows the old password, so the case differs from a reset.
id: REQ-support-support-portal-accounts-password-change
type: req
---
Changing a password from the settings of a support portal account, as opposed to resetting it, keeps the current session and ends the others.

## Context

The person changing it is signed in and knows the old password, so the case differs from a reset.

## Source

> feat(support): sessions after a password change (SUP-402)

Source: Support portal decision log - SUP-402
