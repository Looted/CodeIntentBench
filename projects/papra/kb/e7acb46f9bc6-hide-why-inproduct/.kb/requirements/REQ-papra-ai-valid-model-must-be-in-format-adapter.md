---
title: A valid model must be in the format "adapter://modelName".
status: active
semantic_text: A valid model must be in the format "adapter://modelName".
semantic_clauses:
  - A valid model must be in the format "adapter://modelName"
logic_claims:
  - CLAIM-5E4D43D9D288EE2E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f1cbdc37d57d68e34542e9627d9e6b8965fe2cdb1cbd7c6d89bd94f49ea94951
semantic_inventory:
  - claim_key: CLAIM-5E4D43D9D288EE2E
    claim_text: A valid model must be in the format "adapter://modelName"
    role: normative
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - ai.is_valid_model_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-450'
  recorded_at: '2026-08-24T15:28:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ai
id: REQ-papra-ai-valid-model-must-be-in-format-adapter
type: req
---
A valid model must be in the format "adapter://modelName".

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ai/ai.models.test.ts (ai.models > isValidModelId).

## Source

Source: Papra server behaviour notes - SRV-450
