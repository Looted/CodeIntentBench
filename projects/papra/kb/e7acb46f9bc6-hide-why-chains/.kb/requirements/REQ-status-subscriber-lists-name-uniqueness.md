---
title: Subscriber list names on the status page are not required to be unique.
status: active
semantic_text: Subscriber list names on the status page are not required to be unique.
semantic_clauses:
  - Subscriber list names on the status page are not required to be unique
logic_claims:
  - CLAIM-9290FE3E47BD53C7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cace934f6493805b3b63cd1f1aef6ee2b490f68bf83ea2527a367f61b4fc9832
semantic_inventory:
  - claim_key: CLAIM-9290FE3E47BD53C7
    claim_text: Subscriber list names on the status page are not required to be unique
    role: normative
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - status.subscriber_lists
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-274'
  recorded_at: '2025-06-14T13:02:08.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Two subscriber lists with the same name could not be told apart in the switcher.
id: REQ-status-subscriber-lists-name-uniqueness
type: req
---
Subscriber list names on the status page are not required to be unique.

## Context

Two subscriber lists with the same name could not be told apart in the switcher.

## Source

> feat(status): subscriber list name uniqueness (STA-274)

Source: Status page runbook - STA-274
