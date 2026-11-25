---
title: Support macro names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming…
status: active
semantic_text: Support macro names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Support macro names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-9E3055B7B935725E
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 243271ba214652be10ea7f9c05bfcf7bdbda0b864ee8b4de9623681550fde105
semantic_inventory:
  - claim_key: CLAIM-9E3055B7B935725E
    claim_text: Support macro names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 119
    subjects:
      - backoffice.support_macros
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 121
      end: 167
    subjects:
      - backoffice.support_macros
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-142'
  recorded_at: '2025-05-11T08:54:43.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-support-macros-names-trimmed
type: req
---
Support macro names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(backoffice): trim support macro names (OPS-142)

Source: Papra Cloud back office handbook - OPS-142
