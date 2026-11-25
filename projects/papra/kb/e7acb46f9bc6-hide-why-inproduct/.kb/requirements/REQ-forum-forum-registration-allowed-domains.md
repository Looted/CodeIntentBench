---
title: When an allowed-domain list is configured for community forum registration, subdomains of a listed domain are accepted as well; matching ignores letter case.
status: active
semantic_text: When an allowed-domain list is configured for community forum registration, subdomains of a listed domain are accepted as well; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for community forum registration, subdomains of a listed domain are accepted as well
  - matching ignores letter case
logic_claims:
  - CLAIM-83052C3CDC12C916
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 97849453034c9b647022f060197fe3541246f5c5ef81678b0a82bd412c731ca7
semantic_inventory:
  - claim_key: CLAIM-83052C3CDC12C916
    claim_text: When an allowed-domain list is configured for community forum registration, subdomains of a listed domain are accepted as well
    role: condition
    status: modeled
    span:
      start: 0
      end: 126
    subjects:
      - forum.forum_registration
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 128
      end: 156
    subjects:
      - forum.forum_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-146'
  recorded_at: '2026-08-06T10:41:54.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-registration-allowed-domains
type: req
---
When an allowed-domain list is configured for community forum registration, subdomains of a listed domain are accepted as well; matching ignores letter case.

## Context

Reason not stated.

## Source

> feat(forum): allowed email domains for forum registration (FRM-146)

Source: Community forum operations notes - FRM-146
