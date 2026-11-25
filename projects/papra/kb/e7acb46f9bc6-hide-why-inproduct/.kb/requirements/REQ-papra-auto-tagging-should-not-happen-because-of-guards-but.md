---
title: Should not happen because of guards, but when the creation of new tags is not allowed and there are no existing tags, the prediction returns an empty array.
status: active
semantic_text: Should not happen because of guards, but when the creation of new tags is not allowed and there are no existing tags, the prediction returns an empty array.
semantic_clauses:
  - Should not happen because of guards, but when the creation of new tags is not allowed and there are no existing tags, the prediction returns an empty array
logic_claims:
  - CLAIM-BDC479418C650C87
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 801ffd8dd6266360f6ec890e563462074860472db4f719423f08948ef7e90122
semantic_inventory:
  - claim_key: CLAIM-BDC479418C650C87
    claim_text: Should not happen because of guards, but when the creation of new tags is not allowed and there are no existing tags, the prediction returns an empty array
    role: normative
    status: modeled
    span:
      start: 0
      end: 155
    subjects:
      - auto_tagging.get_tags_actions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-570'
  recorded_at: '2025-04-19T13:48:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:auto-tagging
id: REQ-papra-auto-tagging-should-not-happen-because-of-guards-but
type: req
---
Should not happen because of guards, but when the creation of new tags is not allowed and there are no existing tags, the prediction returns an empty array.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/auto-tagging/auto-tagging.models.test.ts (auto-tagging.models > getTagsActions > the structured data returned by the AI depends on the context (can create new tags, is there existing tags, etc.)).

## Source

Source: Papra server behaviour notes - SRV-570
