---
title: The number of sync folders per linked organization in the desktop sync client is limited to 20; the limit is the same for everyone.
status: active
semantic_text: The number of sync folders per linked organization in the desktop sync client is limited to 20; the limit is the same for everyone.
semantic_clauses:
  - The number of sync folders per linked organization in the desktop sync client is limited to 20
  - the limit is the same for everyone
logic_claims:
  - CLAIM-0974F0E743EAFCA3
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: acebf52bf081f8014921307c8940fe17fd0dfb4754988c923b7e35b5c1403e7c
semantic_inventory:
  - claim_key: CLAIM-0974F0E743EAFCA3
    claim_text: The number of sync folders per linked organization in the desktop sync client is limited to 20
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - desktop.sync_folders
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 96
      end: 130
    subjects:
      - desktop.sync_folders
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-321'
  recorded_at: '2025-06-27T08:05:33.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
id: REQ-desktop-sync-folders-maximum-count
type: req
---
The number of sync folders per linked organization in the desktop sync client is limited to 20; the limit is the same for everyone.

## Context

Reason not stated.

## Source

> feat(desktop): limit sync folders per linked organization (DSK-321)

Source: Desktop sync client decision log - DSK-321
