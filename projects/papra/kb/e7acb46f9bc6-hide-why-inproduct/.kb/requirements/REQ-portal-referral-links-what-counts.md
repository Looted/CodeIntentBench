---
title: Archived referral links do not count toward the limit in the partner portal; restoring one is refused while the partner is at the limit.
status: active
semantic_text: Archived referral links do not count toward the limit in the partner portal; restoring one is refused while the partner is at the limit.
semantic_clauses:
  - Archived referral links do not count toward the limit in the partner portal
  - restoring one is refused while the partner is at the limit
logic_claims:
  - CLAIM-C08D410DE3B40894
  - CLAIM-A298A2E769884153
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b7f3dba1cbab325bdd6b331410c7f1bb347e83eb5edde540d6e00b8568f79df1
semantic_inventory:
  - claim_key: CLAIM-C08D410DE3B40894
    claim_text: Archived referral links do not count toward the limit in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - portal.referral_links
  - claim_key: CLAIM-A298A2E769884153
    claim_text: restoring one is refused while the partner is at the limit
    role: descriptive
    status: modeled
    span:
      start: 77
      end: 135
    subjects:
      - portal.referral_links
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-261'
  recorded_at: '2026-08-02T12:31:01.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-referral-links-what-counts
type: req
---
Archived referral links do not count toward the limit in the partner portal; restoring one is refused while the partner is at the limit.

## Context

Reason not stated.

## Source

> feat(portal): which referral links count toward the limit (PRT-261)

Source: Partner portal decision log - PRT-261
