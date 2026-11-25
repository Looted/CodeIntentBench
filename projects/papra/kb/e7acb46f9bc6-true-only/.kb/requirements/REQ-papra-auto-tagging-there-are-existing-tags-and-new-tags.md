---
title: When there are existing tags and new tags cannot be created.
status: active
semantic_text: When there are existing tags and new tags cannot be created.
semantic_clauses:
  - When there are existing tags and new tags cannot be created
logic_claims:
  - CLAIM-D8BD1A04578167C4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8810b922cb3ec0d8bb3e326222a8f68c79702a3360eb221c9004b64eca1c14a1
semantic_inventory:
  - claim_key: CLAIM-D8BD1A04578167C4
    claim_text: When there are existing tags and new tags cannot be created
    role: condition
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - auto_tagging.build_auto_tagging_system_prompt
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-575'
  recorded_at: '2026-02-21T09:39:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auto-tagging
id: REQ-papra-auto-tagging-there-are-existing-tags-and-new-tags
type: req
---
When there are existing tags and new tags cannot be created.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/auto-tagging/auto-tagging.models.test.ts (auto-tagging.models > buildAutoTaggingSystemPrompt > prompt regression tests).

## Source

Source: Papra server behaviour notes - SRV-575
