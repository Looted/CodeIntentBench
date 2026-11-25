---
title: Creates new options when none exist.
status: active
semantic_text: Creates new options when none exist.
semantic_clauses:
  - Creates new options when none exist
logic_claims:
  - CLAIM-6BE2BD17966FA1D4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3da46473371883f5d76b54a316a749dcb71a51b7ce8bb5103c2013ec3276d768
semantic_inventory:
  - claim_key: CLAIM-6BE2BD17966FA1D4
    claim_text: Creates new options when none exist
    role: normative
    status: modeled
    span:
      start: 0
      end: 35
    subjects:
      - custom_properties.sync_select_options
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-632'
  recorded_at: '2025-11-17T14:16:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-creates-new-options-when-none-exist
type: req
---
Creates new options when none exist.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/options/custom-properties-options.repository.test.ts (custom-properties-options repository > syncSelectOptions).

## Source

Source: Papra server behaviour notes - SRV-632
