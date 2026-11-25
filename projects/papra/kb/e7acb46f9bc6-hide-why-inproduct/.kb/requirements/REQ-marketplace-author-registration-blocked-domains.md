---
title: Addresses from disposable-mail domains are refused in template author registration; the allowed list wins over the block list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in template author registration; the allowed list wins over the block list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in template author registration
  - the allowed list wins over the block list
logic_claims:
  - CLAIM-368A84D4D2EEF732
  - CLAIM-FE24FF80C1CD21F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 45b063f6c1296c28a04beb87f2c1fbc43caa07983a9e744c520b5a1e7a4b25a9
semantic_inventory:
  - claim_key: CLAIM-368A84D4D2EEF732
    claim_text: Addresses from disposable-mail domains are refused in template author registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - marketplace.author_registration
  - claim_key: CLAIM-FE24FF80C1CD21F2
    claim_text: the allowed list wins over the block list
    role: descriptive
    status: modeled
    span:
      start: 84
      end: 125
    subjects:
      - marketplace.author_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-147'
  recorded_at: '2026-07-03T17:50:20.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-author-registration-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in template author registration; the allowed list wins over the block list.

## Context

Reason not stated.

## Source

> feat(marketplace): block disposable email domains (MKT-147)

Source: Template marketplace decision log - MKT-147
