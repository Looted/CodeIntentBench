---
title: The saved organization limit in the papra CLI cannot be changed for an individual profile.
status: active
semantic_text: The saved organization limit in the papra CLI cannot be changed for an individual profile.
semantic_clauses:
  - The saved organization limit in the papra CLI cannot be changed for an individual profile
logic_claims:
  - CLAIM-201664E59AE95CD2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 231512ff783476dc85de560b526c0f2b70140ac79856afa48e19e02552231196
semantic_inventory:
  - claim_key: CLAIM-201664E59AE95CD2
    claim_text: The saved organization limit in the papra CLI cannot be changed for an individual profile
    role: normative
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - cli.saved_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-243'
  recorded_at: '2025-12-24T16:54:23.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Hand-set exceptions had been forgotten and never reviewed.
id: REQ-cli-saved-organizations-limit-override
type: req
---
The saved organization limit in the papra CLI cannot be changed for an individual profile.

## Context

Hand-set exceptions had been forgotten and never reviewed.

## Source

> feat(cli): overriding the saved organization limit (CLI-243)

Source: CLI design notes (packages/cli) - CLI-243
