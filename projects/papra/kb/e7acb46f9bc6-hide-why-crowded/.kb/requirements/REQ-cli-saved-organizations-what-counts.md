---
title: Only saved organizations the profile owns count toward the limit in the papra CLI; saved organizations shared with them do not count.
status: active
semantic_text: Only saved organizations the profile owns count toward the limit in the papra CLI; saved organizations shared with them do not count.
semantic_clauses:
  - Only saved organizations the profile owns count toward the limit in the papra CLI
  - saved organizations shared with them do not count
logic_claims:
  - CLAIM-F2E865ABA11658C8
  - CLAIM-CD7CD98B5EAE6B79
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: de6c0f64e42e8d78f6ef98d69468730647d8d44708088ab66c05b17b4098d5f6
semantic_inventory:
  - claim_key: CLAIM-F2E865ABA11658C8
    claim_text: Only saved organizations the profile owns count toward the limit in the papra CLI
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - cli.saved_organizations
  - claim_key: CLAIM-CD7CD98B5EAE6B79
    claim_text: saved organizations shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 83
      end: 132
    subjects:
      - cli.saved_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-235'
  recorded_at: '2026-02-28T15:03:34.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-saved-organizations-what-counts
type: req
---
Only saved organizations the profile owns count toward the limit in the papra CLI; saved organizations shared with them do not count.

## Context

Reason not stated.

## Source

> feat(cli): which saved organizations count toward the limit (CLI-235)

Source: CLI design notes (packages/cli) - CLI-235
