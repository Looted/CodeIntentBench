---
title: Organizations without any tagging rules get an empty result.
status: active
semantic_text: Organizations without any tagging rules get an empty result.
semantic_clauses:
  - Organizations without any tagging rules get an empty result
logic_claims:
  - CLAIM-5C494F14A6171FF7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 68142c3ff646a0cef8cb0db644b104519e31eff628b26c6b5f301bcdae68b18b
semantic_inventory:
  - claim_key: CLAIM-5C494F14A6171FF7
    claim_text: Organizations without any tagging rules get an empty result
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - tagging_rules.get_organization_enabled_tagging_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1795'
  recorded_at: '2025-11-11T08:44:24.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tagging-rules
id: REQ-papra-tagging-rules-organizations-without-any-tagging-rules-get-empty
type: req
---
Organizations without any tagging rules get an empty result.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tagging-rules/tagging-rules.repository.test.ts (tagging-rules repository > getOrganizationEnabledTaggingRules).

## Source

Source: Papra server behaviour notes - SRV-1795
