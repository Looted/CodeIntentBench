---
title: Every pinned organization the device can access counts toward the limit in the mobile app; that includes ones shared with them.
status: active
semantic_text: Every pinned organization the device can access counts toward the limit in the mobile app; that includes ones shared with them.
semantic_clauses:
  - Every pinned organization the device can access counts toward the limit in the mobile app
  - that includes ones shared with them
logic_claims:
  - CLAIM-80D07BE012A70DFA
  - CLAIM-70BD504DC2647196
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: af8f105e0a8ac7579da253e1fe4c7876d7758692c0e0bf36e8b7d9f8051c0e78
semantic_inventory:
  - claim_key: CLAIM-80D07BE012A70DFA
    claim_text: Every pinned organization the device can access counts toward the limit in the mobile app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - mobile.pinned_organizations
  - claim_key: CLAIM-70BD504DC2647196
    claim_text: that includes ones shared with them
    role: descriptive
    status: modeled
    span:
      start: 91
      end: 126
    subjects:
      - mobile.pinned_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Mobile app decision log (apps/mobile): MOB-242'
  recorded_at: '2026-08-12T11:16:14.000Z'
tags:
  - bootstrap
  - knowledge-source:mobile-decisions
  - component:mobile
rationale: Archiving had become a way around the limit.
id: REQ-mobile-pinned-organizations-what-counts
type: req
---
Every pinned organization the device can access counts toward the limit in the mobile app; that includes ones shared with them.

## Context

Archiving had become a way around the limit.

## Source

> feat(mobile): which pinned organizations count toward the limit (MOB-242)

Source: Mobile app decision log (apps/mobile) - MOB-242
