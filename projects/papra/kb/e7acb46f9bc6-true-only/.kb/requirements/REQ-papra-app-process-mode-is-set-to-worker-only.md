---
title: When the process mode is set to worker, only the worker should be enabled.
status: active
semantic_text: When the process mode is set to worker, only the worker should be enabled.
semantic_clauses:
  - When the process mode is set to worker, only the worker should be enabled
logic_claims:
  - CLAIM-0724595A6F71D7EB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2828104a6219f29e0aebade3233f58c2aa5908d2e4845d78151b02a54cd604d7
semantic_inventory:
  - claim_key: CLAIM-0724595A6F71D7EB
    claim_text: When the process mode is set to worker, only the worker should be enabled
    role: condition
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - app.get_process_mode
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-551'
  recorded_at: '2026-01-14T16:39:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:app
id: REQ-papra-app-process-mode-is-set-to-worker-only
type: req
---
When the process mode is set to worker, only the worker should be enabled.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/process.models.test.ts (process models > getProcessMode).

## Source

Source: Papra server behaviour notes - SRV-551
