---
title: Given a model id in the format "adapter://modelName", it parses and returns the modelName and adapterId.
status: active
semantic_text: Given a model id in the format "adapter://modelName", it parses and returns the modelName and adapterId.
semantic_clauses:
  - Given a model id in the format "adapter://modelName", it parses and returns the modelName and adapterId
logic_claims:
  - CLAIM-099AF51EBA9B07F5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 10eb274a3d992004faad48ef5070a7fee32953af2fcbf3d4f4b943b30dc0a896
semantic_inventory:
  - claim_key: CLAIM-099AF51EBA9B07F5
    claim_text: Given a model id in the format "adapter://modelName", it parses and returns the modelName and adapterId
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - ai.parse_model_id
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-452'
  recorded_at: '2025-07-09T10:05:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ai
id: REQ-papra-ai-model-id-in-format-adapter-modelname-it
type: req
---
Given a model id in the format "adapter://modelName", it parses and returns the modelName and adapterId.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ai/ai.models.test.ts (ai.models > parseModelId).

## Source

Source: Papra server behaviour notes - SRV-452
