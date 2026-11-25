---
title: Ownership of a linked organization in the desktop sync client can be transferred only to someone who is already a member of it.
status: active
semantic_text: Ownership of a linked organization in the desktop sync client can be transferred only to someone who is already a member of it.
semantic_clauses:
  - Ownership of a linked organization in the desktop sync client can be transferred only to someone who is already a member of it
logic_claims:
  - CLAIM-351068BA66B9C548
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dba9d8f49c9390378eefb084fef1b2169e0676ffc1050824e326b7fd32093995
semantic_inventory:
  - claim_key: CLAIM-351068BA66B9C548
    claim_text: Ownership of a linked organization in the desktop sync client can be transferred only to someone who is already a member of it
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 126
    subjects:
      - desktop.linked_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Desktop sync client decision log: DSK-319'
  recorded_at: '2025-12-11T11:58:19.000Z'
tags:
  - bootstrap
  - knowledge-source:desktop-decisions
  - component:desktop
rationale: People leave, and what they owned has to go to someone.
id: REQ-desktop-linked-organizations-ownership-transfer
type: req
---
Ownership of a linked organization in the desktop sync client can be transferred only to someone who is already a member of it.

## Context

People leave, and what they owned has to go to someone.

## Source

> feat(desktop): transferring a linked organization (DSK-319)

Source: Desktop sync client decision log - DSK-319
