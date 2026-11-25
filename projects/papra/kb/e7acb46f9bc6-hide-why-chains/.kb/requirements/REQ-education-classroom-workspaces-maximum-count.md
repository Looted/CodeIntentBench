---
title: The number of classroom workspaces per teacher in the education portal is limited to 20; the limit is the same for everyone.
status: active
semantic_text: The number of classroom workspaces per teacher in the education portal is limited to 20; the limit is the same for everyone.
semantic_clauses:
  - The number of classroom workspaces per teacher in the education portal is limited to 20
  - the limit is the same for everyone
logic_claims:
  - CLAIM-AE44BE035A21D8B6
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 002481aa561b21056791e9cda13c547a15dba4c2a78d6c675ccf2bbb80cb6254
semantic_inventory:
  - claim_key: CLAIM-AE44BE035A21D8B6
    claim_text: The number of classroom workspaces per teacher in the education portal is limited to 20
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - education.classroom_workspaces
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 89
      end: 123
    subjects:
      - education.classroom_workspaces
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-207'
  recorded_at: '2026-03-16T16:45:54.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Each classroom workspace reserves resources whether or not it is used.
id: REQ-education-classroom-workspaces-maximum-count
type: req
---
The number of classroom workspaces per teacher in the education portal is limited to 20; the limit is the same for everyone.

## Context

Each classroom workspace reserves resources whether or not it is used.

## Why this changed

Reason not stated. EDU-207 replaces the value recorded in EDU-137 without saying why it changed.

## Source

> feat(education): limit classroom workspaces per teacher (EDU-207)

Source: Education programme portal notes - EDU-207
