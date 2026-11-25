---
title: At most 3 password reset emails are sent per account per day for license portal accounts.
status: active
semantic_text: At most 3 password reset emails are sent per account per day for license portal accounts.
semantic_clauses:
  - At most 3 password reset emails are sent per account per day for license portal accounts
logic_claims:
  - CLAIM-1E033BAEC275CE99
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e62f4e28dcd908cfc8c42cbb30180d05888e97ee9dc41cc4c4e5898f51e28737
semantic_inventory:
  - claim_key: CLAIM-1E033BAEC275CE99
    claim_text: At most 3 password reset emails are sent per account per day for license portal accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-177'
  recorded_at: '2026-08-20T08:38:57.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: The reset form had been used to flood a mailbox.
id: REQ-license-license-portal-accounts-reset-rate-limit
type: req
---
At most 3 password reset emails are sent per account per day for license portal accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(license): limit reset emails (LIC-177)

Source: License server decision log - LIC-177
