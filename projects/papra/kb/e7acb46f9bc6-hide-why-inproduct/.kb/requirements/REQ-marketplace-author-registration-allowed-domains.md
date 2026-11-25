---
title: When an allowed-domain list is configured for template author registration, subdomains of a listed domain are accepted as well; matching ignores letter case.
status: active
semantic_text: When an allowed-domain list is configured for template author registration, subdomains of a listed domain are accepted as well; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for template author registration, subdomains of a listed domain are accepted as well
  - matching ignores letter case
logic_claims:
  - CLAIM-5D42607CAB4FDF47
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1ea37c26e5b3d7d8a57ea03fd9d9ffa7d49c4f0db260bdae865205047784f91f
semantic_inventory:
  - claim_key: CLAIM-5D42607CAB4FDF47
    claim_text: When an allowed-domain list is configured for template author registration, subdomains of a listed domain are accepted as well
    role: condition
    status: modeled
    span:
      start: 0
      end: 126
    subjects:
      - marketplace.author_registration
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 128
      end: 156
    subjects:
      - marketplace.author_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-139'
  recorded_at: '2025-10-06T17:20:23.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-author-registration-allowed-domains
type: req
---
When an allowed-domain list is configured for template author registration, subdomains of a listed domain are accepted as well; matching ignores letter case.

## Context

Reason not stated.

## Source

> feat(marketplace): allowed email domains for author registration (MKT-139)

Source: Template marketplace decision log - MKT-139
