---
title: Client label names in the partner portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Client label names in the partner portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Client label names in the partner portal are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-E99CAAF7839E9573
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b9d50d1092f7d5769011ab61b6621a27271b22bca7375224286024816f86fdbc
semantic_inventory:
  - claim_key: CLAIM-E99CAAF7839E9573
    claim_text: Client label names in the partner portal are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - portal.client_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 111
      end: 157
    subjects:
      - portal.client_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-124'
  recorded_at: '2026-03-03T13:29:22.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Pasted names carried trailing spaces and produced client labels that looked identical but were not.
id: REQ-portal-client-labels-names-trimmed
type: req
---
Client label names in the partner portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced client labels that looked identical but were not.

## Source

> fix(portal): trim client label names (PRT-124)

Source: Partner portal decision log - PRT-124
