---
title: When conditionMatchMode is "any", tags are applied when at least one condition matches.
status: active
semantic_text: When conditionMatchMode is "any", tags are applied when at least one condition matches.
semantic_clauses:
  - When conditionMatchMode is "any", tags are applied when at least one condition matches
logic_claims:
  - CLAIM-0BF102005290808C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eeff824813f93a72583a145297da143b65c9d888e15aa19767229fb4c5ab2e12
semantic_inventory:
  - claim_key: CLAIM-0BF102005290808C
    claim_text: When conditionMatchMode is "any", tags are applied when at least one condition matches
    role: condition
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - tagging_rules.apply_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1826'
  recorded_at: '2025-05-06T17:01:48.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-conditionmatchmode-is-any-tags-are-applied-when
type: req
---
When conditionMatchMode is "any", tags are applied when at least one condition matches.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1826
