---
title: The condition is valid is the field value is strictly equal to the condition value.
status: active
semantic_text: The condition is valid is the field value is strictly equal to the condition value.
semantic_clauses:
  - The condition is valid is the field value is strictly equal to the condition value
logic_claims:
  - CLAIM-3A53E0E348F7C1F6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1a447a17c3d0ec83d236b581705733a952df47a6b11fda63921ee269c71d372d
semantic_inventory:
  - claim_key: CLAIM-3A53E0E348F7C1F6
    claim_text: The condition is valid is the field value is strictly equal to the condition value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - tagging_rules.equal_tagging_rule_condition
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1785'
  recorded_at: '2025-07-03T09:09:31.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-condition-is-valid-is-field-value-is
type: req
---
The condition is valid is the field value is strictly equal to the condition value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/conditions/tagging-rule-conditions.models.test.ts (equal tagging-rule-condition > equalTaggingRuleCondition).

## Source

Source: Papra server behaviour notes - SRV-1785
