---
title: When conditionMatchMode is "all" (default), tags are not applied when only some conditions match.
status: active
semantic_text: When conditionMatchMode is "all" (default), tags are not applied when only some conditions match.
semantic_clauses:
  - When conditionMatchMode is "all" (default), tags are not applied when only some conditions match
logic_claims:
  - CLAIM-446BDED1EFB6C429
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c2ccbc6a0dd180bbcaf3b1741dd3819130ded5b5aa5a3dcb8ec40332ee98e943
semantic_inventory:
  - claim_key: CLAIM-446BDED1EFB6C429
    claim_text: When conditionMatchMode is "all" (default), tags are not applied when only some conditions match
    role: condition
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - tagging_rules.apply_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1824'
  recorded_at: '2026-09-28T10:10:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-conditionmatchmode-is-all-default-tags-are-not
type: req
---
When conditionMatchMode is "all" (default), tags are not applied when only some conditions match.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.usecases.test.ts (tagging-rules usecases > applyTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1824
