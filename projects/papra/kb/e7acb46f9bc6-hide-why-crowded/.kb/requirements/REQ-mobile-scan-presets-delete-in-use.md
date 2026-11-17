---
title: Deleting a scan preset in the mobile app removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a scan preset in the mobile app removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a scan preset in the mobile app removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-B3868399F11A960E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d20a9f5c301a3a4f4b927e31ddf733b8603d4295151ea54ad818af69e257fda4
semantic_inventory:
  - claim_key: CLAIM-B3868399F11A960E
    claim_text: Deleting a scan preset in the mobile app removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - mobile.scan_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-134'
  recorded_at: '2025-06-03T09:02:06.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Asking for confirmation once per use made cleaning up scan presets impractical.
id: REQ-mobile-scan-presets-delete-in-use
type: req
---
Deleting a scan preset in the mobile app removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up scan presets impractical.

## Source

> feat(mobile): deleting a scan preset detaches it (MOB-134)

Source: Mobile app decision log (apps/mobile) - MOB-134
