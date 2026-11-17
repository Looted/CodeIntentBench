---
title: MARKETPLACE_AUTH_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
status: active
semantic_text: MARKETPLACE_AUTH_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.
semantic_clauses:
  - MARKETPLACE_AUTH_SECRET is rotated every 30 days
  - the previous value stays valid for 72 hours after a rotation
logic_claims:
  - CLAIM-98BC7E3C4ED3A546
  - CLAIM-2B1E92178189FEAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3819618e2c2d4754cbad19f23e27d506b35b74a098d18683db8074c44ffa123e
semantic_inventory:
  - claim_key: CLAIM-98BC7E3C4ED3A546
    claim_text: MARKETPLACE_AUTH_SECRET is rotated every 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - marketplace.marketplace_auth_secret
  - claim_key: CLAIM-2B1E92178189FEAE
    claim_text: the previous value stays valid for 72 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 50
      end: 110
    subjects:
      - marketplace.marketplace_auth_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-194'
  recorded_at: '2025-04-01T17:21:09.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-marketplace-auth-secret-rotation
type: req
---
MARKETPLACE_AUTH_SECRET is rotated every 30 days; the previous value stays valid for 72 hours after a rotation.

## Context

Reason not stated.

## Source

> chore(marketplace): rotate MARKETPLACE_AUTH_SECRET every 30 days (MKT-194)

Source: Template marketplace decision log - MKT-194
