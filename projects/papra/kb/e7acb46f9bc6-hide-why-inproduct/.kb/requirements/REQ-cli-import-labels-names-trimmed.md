---
title: Import label names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Import label names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Import label names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-895E15067F601F80
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a87a4159d4c0d394e3bfeee2c76eb02a00a2add8596a604e987519c95b0393ab
semantic_inventory:
  - claim_key: CLAIM-895E15067F601F80
    claim_text: Import label names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 104
    subjects:
      - cli.import_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 106
      end: 152
    subjects:
      - cli.import_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-160'
  recorded_at: '2026-09-16T16:22:38.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Pasted names carried trailing spaces and produced import labels that looked identical but were not.
id: REQ-cli-import-labels-names-trimmed
type: req
---
Import label names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced import labels that looked identical but were not.

## Source

> fix(cli): trim import label names (CLI-160)

Source: CLI design notes (packages/cli) - CLI-160
