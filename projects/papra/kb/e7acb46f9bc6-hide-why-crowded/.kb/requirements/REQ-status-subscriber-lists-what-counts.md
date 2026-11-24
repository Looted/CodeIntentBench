---
title: Every subscriber list the status page can access counts toward the limit on the status page; that includes ones shared with them.
status: active
semantic_text: Every subscriber list the status page can access counts toward the limit on the status page; that includes ones shared with them.
semantic_clauses:
  - Every subscriber list the status page can access counts toward the limit on the status page
  - that includes ones shared with them
logic_claims:
  - CLAIM-99E2C152056BBFD1
  - CLAIM-70BD504DC2647196
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 622f2abe9a780242005c27ba64cff01b4c56fa4863e3ed3ca7c4c300bd29f14a
semantic_inventory:
  - claim_key: CLAIM-99E2C152056BBFD1
    claim_text: Every subscriber list the status page can access counts toward the limit on the status page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - status.subscriber_lists
  - claim_key: CLAIM-70BD504DC2647196
    claim_text: that includes ones shared with them
    role: descriptive
    status: modeled
    span:
      start: 93
      end: 128
    subjects:
      - status.subscriber_lists
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-262'
  recorded_at: '2025-07-17T13:56:52.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: People were blocked by subscriber lists they had only been invited to.
id: REQ-status-subscriber-lists-what-counts
type: req
---
Every subscriber list the status page can access counts toward the limit on the status page; that includes ones shared with them.

## Context

People were blocked by subscriber lists they had only been invited to.

## Source

> feat(status): which subscriber lists count toward the limit (STA-262)

Source: Status page runbook - STA-262
