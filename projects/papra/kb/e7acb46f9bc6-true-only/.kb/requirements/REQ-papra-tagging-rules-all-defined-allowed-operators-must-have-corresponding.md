---
title: All defined allowed operators must have a corresponding tagging rule condition definition.
status: active
semantic_text: All defined allowed operators must have a corresponding tagging rule condition definition.
semantic_clauses:
  - All defined allowed operators must have a corresponding tagging rule condition definition
logic_claims:
  - CLAIM-E92E6F047851C95B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f0a746eb47d6c6444672ae2ea1a9a54474e20c4e3bf727ea12f32019865f4b27
semantic_inventory:
  - claim_key: CLAIM-E92E6F047851C95B
    claim_text: All defined allowed operators must have a corresponding tagging rule condition definition
    role: normative
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - tagging_rules.tagging_rule_operator_definitions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1787'
  recorded_at: '2026-02-28T15:55:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-all-defined-allowed-operators-must-have-corresponding
type: req
---
All defined allowed operators must have a corresponding tagging rule condition definition.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/conditions/tagging-rule-conditions.registry.test.ts (tagging-rule-conditions registry > taggingRuleOperatorDefinitions).

## Source

Source: Papra server behaviour notes - SRV-1787
