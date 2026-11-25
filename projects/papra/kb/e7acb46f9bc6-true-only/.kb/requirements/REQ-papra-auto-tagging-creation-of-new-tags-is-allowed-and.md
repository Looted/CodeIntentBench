---
title: When the creation of new tags is allowed and there are no existing tags, the prediction returns an array of new tags.
status: active
semantic_text: When the creation of new tags is allowed and there are no existing tags, the prediction returns an array of new tags.
semantic_clauses:
  - When the creation of new tags is allowed and there are no existing tags, the prediction returns an array of new tags
logic_claims:
  - CLAIM-568D5770748CA675
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 34fed1541108a4a8bb8d30dce0e258327a910768be46e01560b1247728c346ac
semantic_inventory:
  - claim_key: CLAIM-568D5770748CA675
    claim_text: When the creation of new tags is allowed and there are no existing tags, the prediction returns an array of new tags
    role: condition
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - auto_tagging.get_tags_actions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-572'
  recorded_at: '2025-08-01T14:52:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auto-tagging
id: REQ-papra-auto-tagging-creation-of-new-tags-is-allowed-and
type: req
---
When the creation of new tags is allowed and there are no existing tags, the prediction returns an array of new tags.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/auto-tagging/auto-tagging.models.test.ts (auto-tagging.models > getTagsActions > the structured data returned by the AI depends on the context (can create new tags, is there existing tags, etc.)).

## Source

Source: Papra server behaviour notes - SRV-572
