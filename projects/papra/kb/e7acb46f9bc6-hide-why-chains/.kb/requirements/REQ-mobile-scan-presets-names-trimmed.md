---
title: Scan preset names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Scan preset names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Scan preset names in the mobile app are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-C7273D69C22AEB9A
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: af0016b700fbdf33773d7dac94ab886834001f066b62f49ba5294c55d48d10d1
semantic_inventory:
  - claim_key: CLAIM-C7273D69C22AEB9A
    claim_text: Scan preset names in the mobile app are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - mobile.scan_presets
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 106
      end: 152
    subjects:
      - mobile.scan_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-121'
  recorded_at: '2026-09-12T17:59:21.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Pasted names carried trailing spaces and produced scan presets that looked identical but were not.
id: REQ-mobile-scan-presets-names-trimmed
type: req
---
Scan preset names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced scan presets that looked identical but were not.

## Source

> fix(mobile): trim scan preset names (MOB-121)

Source: Mobile app decision log (apps/mobile) - MOB-121
