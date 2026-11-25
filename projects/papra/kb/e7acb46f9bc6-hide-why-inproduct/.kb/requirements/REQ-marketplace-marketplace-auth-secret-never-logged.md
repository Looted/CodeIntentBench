---
title: The template marketplace never writes MARKETPLACE_AUTH_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The template marketplace never writes MARKETPLACE_AUTH_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The template marketplace never writes MARKETPLACE_AUTH_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-AAF75BF6522F92B2
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8b817f8f8f1d0b65d27c5c139e4f3741f0747543810158c0021b890f064f78ba
semantic_inventory:
  - claim_key: CLAIM-AAF75BF6522F92B2
    claim_text: The template marketplace never writes MARKETPLACE_AUTH_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - marketplace.marketplace_auth_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 102
      end: 142
    subjects:
      - marketplace.marketplace_auth_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-128'
  recorded_at: '2025-05-08T11:20:27.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-marketplace-marketplace-auth-secret-never-logged
type: req
---
The template marketplace never writes MARKETPLACE_AUTH_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(marketplace): keep MARKETPLACE_AUTH_SECRET out of logs (MKT-128)

Source: Template marketplace decision log - MKT-128
