---
title: The support portal requires SUPPORT_SSO_SECRET in every environment, development included.
status: active
semantic_text: The support portal requires SUPPORT_SSO_SECRET in every environment, development included.
semantic_clauses:
  - The support portal requires SUPPORT_SSO_SECRET in every environment, development included
logic_claims:
  - CLAIM-38F914FC559F69B7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7501ca3b39f2463edd547c7fd31ab12a881c48cf37212369653f246eff7aa277
semantic_inventory:
  - claim_key: CLAIM-38F914FC559F69B7
    claim_text: The support portal requires SUPPORT_SSO_SECRET in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - support.support_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-264'
  recorded_at: '2026-08-08T17:50:11.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-sso-secret-development-default
type: req
---
The support portal requires SUPPORT_SSO_SECRET in every environment, development included.

## Context

Reason not stated.

## Source

> feat(support): SUPPORT_SSO_SECRET outside production (SUP-264)

Source: Support portal decision log - SUP-264
