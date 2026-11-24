---
title: Workspace template names in the partner portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is r…
status: active
semantic_text: Workspace template names in the partner portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Workspace template names in the partner portal are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-93C2919A36A11E86
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f054b237def86cc53416708706832a0f6c5aa778848b98c1ff506bb3c4f50fa1
semantic_inventory:
  - claim_key: CLAIM-93C2919A36A11E86
    claim_text: Workspace template names in the partner portal are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - portal.workspace_templates
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 117
      end: 163
    subjects:
      - portal.workspace_templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-149'
  recorded_at: '2025-12-10T10:21:35.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Pasted names carried trailing spaces and produced workspace templates that looked identical but were not.
id: REQ-portal-workspace-templates-names-trimmed
type: req
---
Workspace template names in the partner portal are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced workspace templates that looked identical but were not.

## Source

> fix(portal): trim workspace template names (PRT-149)

Source: Partner portal decision log - PRT-149
