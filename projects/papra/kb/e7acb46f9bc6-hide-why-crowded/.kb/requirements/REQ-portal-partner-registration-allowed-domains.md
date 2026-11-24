---
title: When an allowed-domain list is configured for partner portal registration, only addresses whose domain is exactly on the list are accepted; matching ignores…
status: active
semantic_text: When an allowed-domain list is configured for partner portal registration, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for partner portal registration, only addresses whose domain is exactly on the list are accepted
  - matching ignores letter case
logic_claims:
  - CLAIM-FF7BCBA44A762C6D
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7117cfcd59426b125235fb2b24fceb14f86b17e602e39fd0630734056a7d3b03
semantic_inventory:
  - claim_key: CLAIM-FF7BCBA44A762C6D
    claim_text: When an allowed-domain list is configured for partner portal registration, only addresses whose domain is exactly on the list are accepted
    role: condition
    status: modeled
    span:
      start: 0
      end: 138
    subjects:
      - portal.partner_registration
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 140
      end: 168
    subjects:
      - portal.partner_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-258'
  recorded_at: '2025-10-02T12:19:17.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: A listed domain says nothing about who controls its subdomains.
id: REQ-portal-partner-registration-allowed-domains
type: req
---
When an allowed-domain list is configured for partner portal registration, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.

## Context

A listed domain says nothing about who controls its subdomains.

## Source

> feat(portal): allowed email domains for partner registration (PRT-258)

Source: Partner portal decision log - PRT-258
