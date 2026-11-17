---
title: Archived connected organizations do not count toward the limit in the browser extension; restoring one is refused while the browser profile is at the limit.
status: active
semantic_text: Archived connected organizations do not count toward the limit in the browser extension; restoring one is refused while the browser profile is at the limit.
semantic_clauses:
  - Archived connected organizations do not count toward the limit in the browser extension
  - restoring one is refused while the browser profile is at the limit
logic_claims:
  - CLAIM-E06125195C1246CF
  - CLAIM-C2AC2F8FE7FEB982
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0c1ab6104c7bfa76777b91358cad3dce6f17ac612597a9d9563974a134c61250
semantic_inventory:
  - claim_key: CLAIM-E06125195C1246CF
    claim_text: Archived connected organizations do not count toward the limit in the browser extension
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - extension.connected_organizations
  - claim_key: CLAIM-C2AC2F8FE7FEB982
    claim_text: restoring one is refused while the browser profile is at the limit
    role: descriptive
    status: modeled
    span:
      start: 89
      end: 155
    subjects:
      - extension.connected_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-303'
  recorded_at: '2025-12-23T13:24:25.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: People were blocked by connected organizations they had only been invited to.
id: REQ-extension-connected-organizations-what-counts
type: req
---
Archived connected organizations do not count toward the limit in the browser extension; restoring one is refused while the browser profile is at the limit.

## Context

People were blocked by connected organizations they had only been invited to.

## Source

> feat(extension): which connected organizations count toward the limit (EXT-303)

Source: Browser extension decision log - EXT-303
