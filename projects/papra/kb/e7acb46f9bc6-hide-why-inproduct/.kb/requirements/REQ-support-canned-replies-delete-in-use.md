---
title: Deleting a canned reply in the support portal removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a canned reply in the support portal removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a canned reply in the support portal removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-73AE51C0DD554D54
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aca18ac124ab8a579e05ce451b9bf914d69d92f77af96265a82ed096b43dfdb7
semantic_inventory:
  - claim_key: CLAIM-73AE51C0DD554D54
    claim_text: Deleting a canned reply in the support portal removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - support.canned_replies
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-128'
  recorded_at: '2025-10-04T15:25:02.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Asking for confirmation once per use made cleaning up canned replies impractical.
id: REQ-support-canned-replies-delete-in-use
type: req
---
Deleting a canned reply in the support portal removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up canned replies impractical.

## Source

> feat(support): deleting a canned reply detaches it (SUP-128)

Source: Support portal decision log - SUP-128
