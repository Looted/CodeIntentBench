---
title: Archived shared inboxes do not count toward the limit in the support portal; restoring one is refused while the support team is at the limit.
status: active
semantic_text: Archived shared inboxes do not count toward the limit in the support portal; restoring one is refused while the support team is at the limit.
semantic_clauses:
  - Archived shared inboxes do not count toward the limit in the support portal
  - restoring one is refused while the support team is at the limit
logic_claims:
  - CLAIM-3FE38C285D37D9B9
  - CLAIM-DD99C133C67AEBFD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f974cef9f7906055bf1332242efef1e1a25db897c7bf64a02a1ddb99be57ffa1
semantic_inventory:
  - claim_key: CLAIM-3FE38C285D37D9B9
    claim_text: Archived shared inboxes do not count toward the limit in the support portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - support.shared_inboxes
  - claim_key: CLAIM-DD99C133C67AEBFD
    claim_text: restoring one is refused while the support team is at the limit
    role: descriptive
    status: modeled
    span:
      start: 77
      end: 140
    subjects:
      - support.shared_inboxes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-315'
  recorded_at: '2025-06-18T10:13:21.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: People were blocked by shared inboxes they had only been invited to.
id: REQ-support-shared-inboxes-what-counts
type: req
---
Archived shared inboxes do not count toward the limit in the support portal; restoring one is refused while the support team is at the limit.

## Context

People were blocked by shared inboxes they had only been invited to.

## Source

> feat(support): which shared inboxes count toward the limit (SUP-315)

Source: Support portal decision log - SUP-315
