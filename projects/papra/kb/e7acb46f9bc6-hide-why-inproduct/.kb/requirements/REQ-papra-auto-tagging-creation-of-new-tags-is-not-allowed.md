---
title: When the creation of new tags is not allowed and there are existing tags, the prediction returns an array of existing tags name.
status: active
semantic_text: When the creation of new tags is not allowed and there are existing tags, the prediction returns an array of existing tags name.
semantic_clauses:
  - When the creation of new tags is not allowed and there are existing tags, the prediction returns an array of existing tags name
logic_claims:
  - CLAIM-30F9B10D380F57C9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c31721c9210c91626b8aaa92a2b1598eb2f0d7e12a3927c84d63453965694025
semantic_inventory:
  - claim_key: CLAIM-30F9B10D380F57C9
    claim_text: When the creation of new tags is not allowed and there are existing tags, the prediction returns an array of existing tags name
    role: condition
    status: modeled
    span:
      start: 0
      end: 127
    subjects:
      - auto_tagging.get_tags_actions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-573'
  recorded_at: '2026-03-08T09:57:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auto-tagging
id: REQ-papra-auto-tagging-creation-of-new-tags-is-not-allowed
type: req
---
When the creation of new tags is not allowed and there are existing tags, the prediction returns an array of existing tags name.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/auto-tagging/auto-tagging.models.test.ts (auto-tagging.models > getTagsActions > the structured data returned by the AI depends on the context (can create new tags, is there existing tags, etc.)).

## Source

Source: Papra server behaviour notes - SRV-573
