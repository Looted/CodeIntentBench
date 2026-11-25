---
title: When an allowed-domain list is configured for the mobile beta programme sign-up, subdomains of a listed domain are accepted as well; matching ignores letter…
status: active
semantic_text: When an allowed-domain list is configured for the mobile beta programme sign-up, subdomains of a listed domain are accepted as well; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for the mobile beta programme sign-up, subdomains of a listed domain are accepted as well
  - matching ignores letter case
logic_claims:
  - CLAIM-88D525BD5A8011F5
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1053aa0e812d351e2b00efcdc355e70b8a7c28a2a2e356c4698fc9b6f83e2ffe
semantic_inventory:
  - claim_key: CLAIM-88D525BD5A8011F5
    claim_text: When an allowed-domain list is configured for the mobile beta programme sign-up, subdomains of a listed domain are accepted as well
    role: condition
    status: modeled
    span:
      start: 0
      end: 131
    subjects:
      - mobile.beta_programme_sign_up
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 133
      end: 161
    subjects:
      - mobile.beta_programme_sign_up
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-319'
  recorded_at: '2026-04-05T17:14:29.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Companies with regional subdomains asked for one entry to cover all of them.
id: REQ-mobile-beta-programme-sign-up-allowed-domains
type: req
---
When an allowed-domain list is configured for the mobile beta programme sign-up, subdomains of a listed domain are accepted as well; matching ignores letter case.

## Context

Companies with regional subdomains asked for one entry to cover all of them.

## Source

> feat(mobile): allowed email domains for beta programme sign-up (MOB-319)

Source: Mobile app decision log (apps/mobile) - MOB-319
