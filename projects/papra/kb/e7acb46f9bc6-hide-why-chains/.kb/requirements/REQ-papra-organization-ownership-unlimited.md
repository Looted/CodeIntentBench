---
title: A user can own any number of organizations.
status: closed
semantic_text: A user can own any number of organizations.
semantic_clauses:
  - A user can own any number of organizations
logic_claims:
  - CLAIM-A7DBDDD235EC51E0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a15005acb644604577d6a6a19313f1ba1d6e1792795b5858c0d3eb2184273714
semantic_inventory:
  - claim_key: CLAIM-A7DBDDD235EC51E0
    claim_text: A user can own any number of organizations
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - organizations.user_cap
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-147'
  recorded_at: '2025-09-15T16:08:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:organizations
id: REQ-papra-organization-ownership-unlimited
type: req
---
A user can own any number of organizations.

## Context

Reason not stated.

## Why this changed

Agencies that keep one organization per client asked for more than three.

## Source

> Lifted the limit on organizations a user can own. (SRV-147)

Source: Papra server decision log - SRV-147
