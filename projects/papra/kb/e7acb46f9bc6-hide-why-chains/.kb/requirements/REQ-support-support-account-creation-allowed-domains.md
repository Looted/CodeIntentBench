---
title: When an allowed-domain list is configured for support portal account creation, subdomains of a listed domain are accepted as well; matching ignores letter case.
status: active
semantic_text: When an allowed-domain list is configured for support portal account creation, subdomains of a listed domain are accepted as well; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for support portal account creation, subdomains of a listed domain are accepted as well
  - matching ignores letter case
logic_claims:
  - CLAIM-35E6A4695C971827
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ea6c540eddbc9df47ddbefd1eeb8b53ec97cd5d9fea1b9193f10c2a00d1703dc
semantic_inventory:
  - claim_key: CLAIM-35E6A4695C971827
    claim_text: When an allowed-domain list is configured for support portal account creation, subdomains of a listed domain are accepted as well
    role: condition
    status: modeled
    span:
      start: 0
      end: 129
    subjects:
      - support.support_account_creation
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 131
      end: 159
    subjects:
      - support.support_account_creation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-266'
  recorded_at: '2025-10-28T15:28:18.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-account-creation-allowed-domains
type: req
---
When an allowed-domain list is configured for support portal account creation, subdomains of a listed domain are accepted as well; matching ignores letter case.

## Context

Reason not stated.

## Source

> feat(support): allowed email domains for support account creation (SUP-266)

Source: Support portal decision log - SUP-266
