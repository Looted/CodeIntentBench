---
title: Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation, so tag changes made after upload can trigger auto…
status: active
semantic_text: Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation, so tag changes made after upload can trigger automations.
logic_claims:
  - CLAIM-CC06944D3AC63FDB
  - CLAIM-83F92137227AF9DA
semantic_clauses:
  - Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation
  - so tag changes made after upload can trigger automations
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c33ec2a3b8e81ea428d8600d0c41ad889b11cacd28cc6a03d4e75fc7f1d864da
semantic_inventory:
  - claim_key: CLAIM-CC06944D3AC63FDB
    claim_text: Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - webhook.events
  - claim_key: CLAIM-83F92137227AF9DA
    claim_text: so tag changes made after upload can trigger automations
    role: descriptive
    status: modeled
    span:
      start: 108
      end: 164
    subjects:
      - webhook.events
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #428'
  recorded_at: '2026-10-14T12:08:51.444Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:webhooks
id: REQ-webhooks-emit-document-updated-document-ta-FB361BD1
type: req
required_evidence: asserted
rationale: 'Requested in issue #428 by rafidalhaque (2025-07-20), because tags are added after creation ("as we have to add tag later than creation"). The maintainer added the events on 2025-07-25 without a reason of his own.'
---
Webhooks emit document:updated, document:tag:added and document:tag:removed events in addition to creation, so tag changes made after upload can trigger automations.

## Context

Requested in issue #428 by rafidalhaque (2025-07-20), because tags are added after creation ("as we have to add tag later than creation"). The maintainer added the events on 2025-07-25 without a reason of his own.

## Source

> I've added `document:updated`, `document:tag:added`, `document:tag:removed`

Source: papra-hq/papra GitHub issues - #428
