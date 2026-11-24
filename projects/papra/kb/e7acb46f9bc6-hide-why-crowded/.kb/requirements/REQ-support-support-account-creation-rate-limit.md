---
title: At most 5 requests per IP address per hour are accepted in support portal account creation.
status: active
semantic_text: At most 5 requests per IP address per hour are accepted in support portal account creation.
semantic_clauses:
  - At most 5 requests per IP address per hour are accepted in support portal account creation
logic_claims:
  - CLAIM-F0C9E0F6BC7BAC09
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7b1de1c1ca736af9159408d5719ad34929f3bd04268f22ad048ee7c78ef3d75d
semantic_inventory:
  - claim_key: CLAIM-F0C9E0F6BC7BAC09
    claim_text: At most 5 requests per IP address per hour are accepted in support portal account creation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - support.support_account_creation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-278'
  recorded_at: '2026-02-12T11:29:08.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: A script had submitted the form several thousand times in a night.
id: REQ-support-support-account-creation-rate-limit
type: req
---
At most 5 requests per IP address per hour are accepted in support portal account creation.

## Context

A script had submitted the form several thousand times in a night.

## Source

> feat(support): rate limit support account creation (SUP-278)

Source: Support portal decision log - SUP-278
