---
title: Quick label names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Quick label names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Quick label names in the mobile app are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-5F9FE4F6D001DFE7
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 61e076fbc006450aabeb3bb07cb7bbf3f198b154e4fb512ff1bb599ccb2d91f7
semantic_inventory:
  - claim_key: CLAIM-5F9FE4F6D001DFE7
    claim_text: Quick label names in the mobile app are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - mobile.quick_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 106
      end: 152
    subjects:
      - mobile.quick_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-166'
  recorded_at: '2025-03-13T17:16:40.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Pasted names carried trailing spaces and produced quick labels that looked identical but were not.
id: REQ-mobile-quick-labels-names-trimmed
type: req
---
Quick label names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced quick labels that looked identical but were not.

## Source

> fix(mobile): trim quick label names (MOB-166)

Source: Mobile app decision log (apps/mobile) - MOB-166
