---
title: Archived trial organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the email address is at the limit.
status: active
semantic_text: Archived trial organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the email address is at the limit.
semantic_clauses:
  - Archived trial organizations do not count toward the limit in the Papra Cloud back office
  - restoring one is refused while the email address is at the limit
logic_claims:
  - CLAIM-6365EFA1B2B3CE36
  - CLAIM-267659639869B845
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 720dc540cd14be345fe72de088de960500ff7c500893e47fd162e61d97184e9a
semantic_inventory:
  - claim_key: CLAIM-6365EFA1B2B3CE36
    claim_text: Archived trial organizations do not count toward the limit in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - backoffice.trial_organizations
  - claim_key: CLAIM-267659639869B845
    claim_text: restoring one is refused while the email address is at the limit
    role: descriptive
    status: modeled
    span:
      start: 91
      end: 155
    subjects:
      - backoffice.trial_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-493'
  recorded_at: '2025-05-07T11:31:00.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: People were blocked by trial organizations they had only been invited to.
id: REQ-backoffice-trial-organizations-what-counts
type: req
---
Archived trial organizations do not count toward the limit in the Papra Cloud back office; restoring one is refused while the email address is at the limit.

## Context

People were blocked by trial organizations they had only been invited to.

## Source

> feat(backoffice): which trial organizations count toward the limit (OPS-493)

Source: Papra Cloud back office handbook - OPS-493
