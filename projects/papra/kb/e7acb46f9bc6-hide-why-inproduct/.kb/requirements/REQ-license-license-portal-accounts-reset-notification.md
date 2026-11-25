---
title: A completed password reset for license portal accounts sends no confirmation email.
status: active
semantic_text: A completed password reset for license portal accounts sends no confirmation email.
semantic_clauses:
  - A completed password reset for license portal accounts sends no confirmation email
logic_claims:
  - CLAIM-09B9FEB850F8019E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 458638e251ede9ba2f8308f291cd6b724e124bbd5f9e05a1955d0db9f7586f6e
semantic_inventory:
  - claim_key: CLAIM-09B9FEB850F8019E
    claim_text: A completed password reset for license portal accounts sends no confirmation email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-186'
  recorded_at: '2025-03-04T16:24:27.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-portal-accounts-reset-notification
type: req
---
A completed password reset for license portal accounts sends no confirmation email.

## Context

Reason not stated.

## Source

> feat(license): notify after a password reset (LIC-186)

Source: License server decision log - LIC-186
