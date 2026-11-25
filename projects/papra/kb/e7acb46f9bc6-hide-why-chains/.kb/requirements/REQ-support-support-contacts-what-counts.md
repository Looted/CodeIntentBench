---
title: Every support contact the organization can access counts toward the limit in the support portal; that includes ones shared with them.
status: active
semantic_text: Every support contact the organization can access counts toward the limit in the support portal; that includes ones shared with them.
semantic_clauses:
  - Every support contact the organization can access counts toward the limit in the support portal
  - that includes ones shared with them
logic_claims:
  - CLAIM-54EFFD57B5AF9270
  - CLAIM-70BD504DC2647196
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 120d4aee6547a9d5f4a413e13fad5e04a77b14d2a1690c3bea656a6e621db509
semantic_inventory:
  - claim_key: CLAIM-54EFFD57B5AF9270
    claim_text: Every support contact the organization can access counts toward the limit in the support portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - support.support_contacts
  - claim_key: CLAIM-70BD504DC2647196
    claim_text: that includes ones shared with them
    role: descriptive
    status: modeled
    span:
      start: 97
      end: 132
    subjects:
      - support.support_contacts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-295'
  recorded_at: '2026-02-20T15:27:28.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: People were blocked by support contacts they had only been invited to.
id: REQ-support-support-contacts-what-counts
type: req
---
Every support contact the organization can access counts toward the limit in the support portal; that includes ones shared with them.

## Context

People were blocked by support contacts they had only been invited to.

## Source

> feat(support): which support contacts count toward the limit (SUP-295)

Source: Support portal decision log - SUP-295
