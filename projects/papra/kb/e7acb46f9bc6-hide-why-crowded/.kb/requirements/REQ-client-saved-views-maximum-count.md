---
title: At most 150 saved views can be created per user in the web client; the limit is fixed.
status: active
semantic_text: At most 150 saved views can be created per user in the web client; the limit is fixed.
semantic_clauses:
  - At most 150 saved views can be created per user in the web client
  - the limit is fixed
logic_claims:
  - CLAIM-E969C767FC4FB4C9
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c4bd482bbedc215347e743890b7af614a5dcd59e45ec98cc0439b67525fcda87
semantic_inventory:
  - claim_key: CLAIM-E969C767FC4FB4C9
    claim_text: At most 150 saved views can be created per user in the web client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - client.saved_views
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 85
    subjects:
      - client.saved_views
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-113'
  recorded_at: '2026-03-23T09:06:32.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: An unbounded number of saved views had been used to store data the feature was never meant for.
id: REQ-client-saved-views-maximum-count
type: req
---
At most 150 saved views can be created per user in the web client; the limit is fixed.

## Context

An unbounded number of saved views had been used to store data the feature was never meant for.

## Why this changed

Reason not stated. WCL-113 replaces the value recorded in WCL-73 without saying why it changed.

## Source

> feat(client): limit saved views per user (WCL-113)

Source: Web client decision log (apps/papra-client) - WCL-113
