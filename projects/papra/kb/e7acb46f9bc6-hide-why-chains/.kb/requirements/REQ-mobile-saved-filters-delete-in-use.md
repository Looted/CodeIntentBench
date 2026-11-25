---
title: Deleting a saved filter in the mobile app removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a saved filter in the mobile app removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a saved filter in the mobile app removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-8859A659944E6E85
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 47f2b28d99f5c352d097d547a77fee5b7bf83b3140eb30b301cca30af39aa9b9
semantic_inventory:
  - claim_key: CLAIM-8859A659944E6E85
    claim_text: Deleting a saved filter in the mobile app removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - mobile.saved_filters
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-150'
  recorded_at: '2025-05-15T10:27:25.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Asking for confirmation once per use made cleaning up saved filters impractical.
id: REQ-mobile-saved-filters-delete-in-use
type: req
---
Deleting a saved filter in the mobile app removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up saved filters impractical.

## Source

> feat(mobile): deleting a saved filter detaches it (MOB-150)

Source: Mobile app decision log (apps/mobile) - MOB-150
