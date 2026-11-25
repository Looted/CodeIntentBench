---
title: A user can own at most 3 organizations; An instance admin cannot change the limit for an individual user.
status: closed
semantic_text: A user can own at most 3 organizations; An instance admin cannot change the limit for an individual user.
semantic_clauses:
  - A user can own at most 3 organizations
  - An instance admin cannot change the limit for an individual user
logic_claims:
  - CLAIM-75EAFA2B3B07AA34
  - CLAIM-DBD226C4C76F02B0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ee0550dec3baf8fc0d8eaa93c48bca3e8a00f0c2af660a9ba85d61eb7ed40de0
semantic_inventory:
  - claim_key: CLAIM-75EAFA2B3B07AA34
    claim_text: A user can own at most 3 organizations
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 38
    subjects:
      - organizations.user_cap
  - claim_key: CLAIM-DBD226C4C76F02B0
    claim_text: An instance admin cannot change the limit for an individual user
    role: normative
    status: modeled
    span:
      start: 40
      end: 104
    subjects:
      - organizations.user_cap
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-094'
  recorded_at: '2025-04-03T11:17:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:organizations
id: REQ-papra-three-organizations-per-user
type: req
---
A user can own at most 3 organizations; An instance admin cannot change the limit for an individual user.

## Context

Reason not stated.

## Source

> Each user can own up to three organizations; the limit is the same for everyone. (SRV-094)

Source: Papra server decision log - SRV-094
