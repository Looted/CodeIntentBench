---
title: Password reset links for license portal accounts are valid for 15 minutes.
status: active
semantic_text: Password reset links for license portal accounts are valid for 15 minutes.
semantic_clauses:
  - Password reset links for license portal accounts are valid for 15 minutes
logic_claims:
  - CLAIM-BAEC0964ED7836ED
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 328b17571f510d1acb38472655d784649d204073941449cfa715117dcece74e2
semantic_inventory:
  - claim_key: CLAIM-BAEC0964ED7836ED
    claim_text: Password reset links for license portal accounts are valid for 15 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-258'
  recorded_at: '2026-09-13T13:27:56.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-license-license-portal-accounts-reset-link-validity
type: req
---
Password reset links for license portal accounts are valid for 15 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Why this changed

LIC-258 replaced the value recorded in LIC-188 and gives this reason for the change: Mail to some providers took longer than that to arrive.

## Source

> feat(license): reset links valid 15 minutes (LIC-258)

Source: License server decision log - LIC-258
