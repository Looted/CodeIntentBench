---
title: Multiple enabled rules are retrieved with their respective conditions and actions.
status: active
semantic_text: Multiple enabled rules are retrieved with their respective conditions and actions.
semantic_clauses:
  - Multiple enabled rules are retrieved with their respective conditions and actions
logic_claims:
  - CLAIM-D3AB9D7092C4F128
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bf4444e8d1eee6b541795272f11e2ad32ae6035b64fb30b39147268676fa3f15
semantic_inventory:
  - claim_key: CLAIM-D3AB9D7092C4F128
    claim_text: Multiple enabled rules are retrieved with their respective conditions and actions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - tagging_rules.get_organization_enabled_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1792'
  recorded_at: '2026-09-06T12:47:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-multiple-enabled-rules-are-retrieved-with-their
type: req
---
Multiple enabled rules are retrieved with their respective conditions and actions.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.repository.test.ts (tagging-rules repository > getOrganizationEnabledTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1792
