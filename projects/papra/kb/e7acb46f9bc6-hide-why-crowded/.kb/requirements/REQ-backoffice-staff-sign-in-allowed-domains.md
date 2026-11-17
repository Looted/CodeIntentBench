---
title: When an allowed-domain list is configured for back office staff sign-in, subdomains of a listed domain are accepted as well; matching ignores letter case.
status: active
semantic_text: When an allowed-domain list is configured for back office staff sign-in, subdomains of a listed domain are accepted as well; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for back office staff sign-in, subdomains of a listed domain are accepted as well
  - matching ignores letter case
logic_claims:
  - CLAIM-4C89C73D381CED76
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aa525593adf0e94f3988c65e21aa0030dd32da94d081556902b95c6de9a0a839
semantic_inventory:
  - claim_key: CLAIM-4C89C73D381CED76
    claim_text: When an allowed-domain list is configured for back office staff sign-in, subdomains of a listed domain are accepted as well
    role: condition
    status: modeled
    span:
      start: 0
      end: 123
    subjects:
      - backoffice.staff_sign_in
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 125
      end: 153
    subjects:
      - backoffice.staff_sign_in
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-410'
  recorded_at: '2025-05-22T14:22:26.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Companies with regional subdomains asked for one entry to cover all of them.
id: REQ-backoffice-staff-sign-in-allowed-domains
type: req
---
When an allowed-domain list is configured for back office staff sign-in, subdomains of a listed domain are accepted as well; matching ignores letter case.

## Context

Companies with regional subdomains asked for one entry to cover all of them.

## Source

> feat(backoffice): allowed email domains for staff sign-in (OPS-410)

Source: Papra Cloud back office handbook - OPS-410
