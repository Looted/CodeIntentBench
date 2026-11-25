---
title: A password reset link for license portal accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for license portal accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for license portal accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-7634C1C225A93CC0
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 90433e61b4815ebe7c9ade2f71ae49c649105f707f1021226bf390e50690313f
semantic_inventory:
  - claim_key: CLAIM-7634C1C225A93CC0
    claim_text: A password reset link for license portal accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - license.license_portal_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 62
      end: 112
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-259'
  recorded_at: '2026-06-23T11:45:28.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: An old link found in a mailbox months later still worked.
id: REQ-license-license-portal-accounts-reset-link-single-use
type: req
---
A password reset link for license portal accounts works once; requesting a new link invalidates the earlier ones.

## Context

An old link found in a mailbox months later still worked.

## Source

> feat(license): single-use reset links (LIC-259)

Source: License server decision log - LIC-259
