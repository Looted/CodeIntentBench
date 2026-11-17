---
title: Saved filters in the mobile app are unique per account regardless of letter case; a duplicate is reported as saved-filter-already-exists.
status: active
semantic_text: Saved filters in the mobile app are unique per account regardless of letter case; a duplicate is reported as saved-filter-already-exists.
semantic_clauses:
  - Saved filters in the mobile app are unique per account regardless of letter case
  - a duplicate is reported as saved-filter-already-exists
logic_claims:
  - CLAIM-16D4C25866D8460B
  - CLAIM-6A950AEF5A6611C2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d9ef9e3e70ef2ac0166134ba4c0458d6e32eb3d57e4bd36123bf3d319de9a7fe
semantic_inventory:
  - claim_key: CLAIM-16D4C25866D8460B
    claim_text: Saved filters in the mobile app are unique per account regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - mobile.saved_filters
  - claim_key: CLAIM-6A950AEF5A6611C2
    claim_text: a duplicate is reported as saved-filter-already-exists
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 136
    subjects:
      - mobile.saved_filters
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-139'
  recorded_at: '2026-06-24T13:49:35.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Imports from other tools produced "Saved filter" and "saved filter" side by side, and reports counted them separately.
id: REQ-mobile-saved-filters-unique-ignoring-case
type: req
---
Saved filters in the mobile app are unique per account regardless of letter case; a duplicate is reported as saved-filter-already-exists.

## Context

Imports from other tools produced "Saved filter" and "saved filter" side by side, and reports counted them separately.

## Source

> feat(mobile): case-insensitive unique saved filter names (MOB-139)

Source: Mobile app decision log (apps/mobile) - MOB-139
