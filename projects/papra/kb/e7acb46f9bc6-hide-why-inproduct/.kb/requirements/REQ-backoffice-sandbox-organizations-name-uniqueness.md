---
title: Sandbox organization names in the Papra Cloud back office are unique per customer, regardless of letter case.
status: active
semantic_text: Sandbox organization names in the Papra Cloud back office are unique per customer, regardless of letter case.
semantic_clauses:
  - Sandbox organization names in the Papra Cloud back office are unique per customer, regardless of letter case
logic_claims:
  - CLAIM-E23B1DF2119B0D4C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2eaf1f629c53567cc8e3f288aa59961ad9ba1ed4559cd5187924001b1ac81acd
semantic_inventory:
  - claim_key: CLAIM-E23B1DF2119B0D4C
    claim_text: Sandbox organization names in the Papra Cloud back office are unique per customer, regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - backoffice.sandbox_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-266'
  recorded_at: '2026-07-21T09:18:40.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Names are chosen by different people who cannot know what others picked.
id: REQ-backoffice-sandbox-organizations-name-uniqueness
type: req
---
Sandbox organization names in the Papra Cloud back office are unique per customer, regardless of letter case.

## Context

Names are chosen by different people who cannot know what others picked.

## Source

> feat(backoffice): sandbox organization name uniqueness (OPS-266)

Source: Papra Cloud back office handbook - OPS-266
