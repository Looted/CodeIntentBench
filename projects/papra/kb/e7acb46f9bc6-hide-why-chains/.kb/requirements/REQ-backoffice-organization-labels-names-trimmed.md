---
title: Organization label names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trim…
status: active
semantic_text: Organization label names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Organization label names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-15F37938E2E7AC0C
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a450a7589102396ebf9d628e902f5000aa7f0e329bf202bfa84dccdb6d8bfa4c
semantic_inventory:
  - claim_key: CLAIM-15F37938E2E7AC0C
    claim_text: Organization label names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 124
    subjects:
      - backoffice.organization_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 126
      end: 172
    subjects:
      - backoffice.organization_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-193'
  recorded_at: '2025-03-28T09:47:39.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-organization-labels-names-trimmed
type: req
---
Organization label names in the Papra Cloud back office are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(backoffice): trim organization label names (OPS-193)

Source: Papra Cloud back office handbook - OPS-193
