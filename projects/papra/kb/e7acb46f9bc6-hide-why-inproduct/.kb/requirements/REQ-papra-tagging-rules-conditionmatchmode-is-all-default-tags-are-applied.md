---
title: When conditionMatchMode is "all" (default), tags are applied only when all conditions match.
status: active
semantic_text: When conditionMatchMode is "all" (default), tags are applied only when all conditions match.
semantic_clauses:
  - When conditionMatchMode is "all" (default), tags are applied only when all conditions match
logic_claims:
  - CLAIM-94CC1797685010B8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8586ec5f03a71b7d83a74c0d49516631922cca176cbe4b1292c58af2cfb671f0
semantic_inventory:
  - claim_key: CLAIM-94CC1797685010B8
    claim_text: When conditionMatchMode is "all" (default), tags are applied only when all conditions match
    role: condition
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - tagging_rules.apply_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1823'
  recorded_at: '2026-05-07T14:57:47.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-conditionmatchmode-is-all-default-tags-are-applied
type: req
---
When conditionMatchMode is "all" (default), tags are applied only when all conditions match.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1823
