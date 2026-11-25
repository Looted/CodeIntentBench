---
title: Profile names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Profile names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Profile names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-D3541C3C05AA8748
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a53c79f804a506827eeef764bc8031d986c7eb285e3f275fe7496795f42629ac
semantic_inventory:
  - claim_key: CLAIM-D3541C3C05AA8748
    claim_text: Profile names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - cli.profiles
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 101
      end: 147
    subjects:
      - cli.profiles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-141'
  recorded_at: '2025-12-18T09:37:02.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-profiles-names-trimmed
type: req
---
Profile names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(cli): trim profile names (CLI-141)

Source: CLI design notes (packages/cli) - CLI-141
