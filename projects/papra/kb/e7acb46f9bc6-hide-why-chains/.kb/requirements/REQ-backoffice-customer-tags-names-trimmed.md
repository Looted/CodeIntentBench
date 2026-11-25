---
title: Customer tag names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming i…
status: active
semantic_text: Customer tag names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Customer tag names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-A54C4E6EB3AAD66E
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 173c815afcceff0844e0720fc07601e3c8f19ae9d597b6f294c46ae030ea16e7
semantic_inventory:
  - claim_key: CLAIM-A54C4E6EB3AAD66E
    claim_text: Customer tag names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - backoffice.customer_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 120
      end: 166
    subjects:
      - backoffice.customer_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-116'
  recorded_at: '2026-03-27T09:47:13.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-customer-tags-names-trimmed
type: req
---
Customer tag names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(backoffice): trim customer tag names (OPS-116)

Source: Papra Cloud back office handbook - OPS-116
