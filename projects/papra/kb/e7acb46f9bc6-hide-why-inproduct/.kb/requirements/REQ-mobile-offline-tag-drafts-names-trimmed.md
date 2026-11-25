---
title: Offline tag draft names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Offline tag draft names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Offline tag draft names in the mobile app are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-29CB4002F69F634D
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e326d43301754d1d1aaf82547364d7b933471e3f5536b82cfce071930bf0d69c
semantic_inventory:
  - claim_key: CLAIM-29CB4002F69F634D
    claim_text: Offline tag draft names in the mobile app are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - mobile.offline_tag_drafts
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 112
      end: 158
    subjects:
      - mobile.offline_tag_drafts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-133'
  recorded_at: '2025-12-10T14:44:45.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
id: REQ-mobile-offline-tag-drafts-names-trimmed
type: req
---
Offline tag draft names in the mobile app are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(mobile): trim offline tag draft names (MOB-133)

Source: Mobile app decision log (apps/mobile) - MOB-133
