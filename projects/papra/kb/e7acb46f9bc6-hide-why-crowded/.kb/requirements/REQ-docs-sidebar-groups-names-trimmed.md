---
title: Sidebar group names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is re…
status: active
semantic_text: Sidebar group names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Sidebar group names on the documentation site are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-2371A9332D4B4ACC
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1c5911fb31eb169cd796c794cf521f25fc9ce7b6bc3079736b8236e267688ddb
semantic_inventory:
  - claim_key: CLAIM-2371A9332D4B4ACC
    claim_text: Sidebar group names on the documentation site are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - docs.sidebar_groups
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 116
      end: 162
    subjects:
      - docs.sidebar_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-172'
  recorded_at: '2025-10-10T11:44:53.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Pasted names carried trailing spaces and produced sidebar groups that looked identical but were not.
id: REQ-docs-sidebar-groups-names-trimmed
type: req
---
Sidebar group names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced sidebar groups that looked identical but were not.

## Source

> fix(docs): trim sidebar group names (DOC-172)

Source: Documentation site decision log (apps/docs) - DOC-172
