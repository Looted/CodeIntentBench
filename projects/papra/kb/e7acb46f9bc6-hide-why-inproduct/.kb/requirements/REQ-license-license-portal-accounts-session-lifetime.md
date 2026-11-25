---
title: Sessions of license portal accounts last at most 7 days; they end after 60 minutes without activity.
status: active
semantic_text: Sessions of license portal accounts last at most 7 days; they end after 60 minutes without activity.
semantic_clauses:
  - Sessions of license portal accounts last at most 7 days
  - they end after 60 minutes without activity
logic_claims:
  - CLAIM-6F02DC8CDF548C9F
  - CLAIM-F3D76F855733BF57
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9f67556162e682e302a9133882ea44e5c5464a236fb072897412029d0fd64af7
semantic_inventory:
  - claim_key: CLAIM-6F02DC8CDF548C9F
    claim_text: Sessions of license portal accounts last at most 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - license.license_portal_accounts
  - claim_key: CLAIM-F3D76F855733BF57
    claim_text: they end after 60 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 57
      end: 99
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-192'
  recorded_at: '2025-05-28T09:55:13.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Shared computers were left signed in.
id: REQ-license-license-portal-accounts-session-lifetime
type: req
---
Sessions of license portal accounts last at most 7 days; they end after 60 minutes without activity.

## Context

Shared computers were left signed in.

## Source

> feat(license): session lifetime (LIC-192)

Source: License server decision log - LIC-192
