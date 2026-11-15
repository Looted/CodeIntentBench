---
title: A pending invitation can be cancelled by a privileged member of the organization and accepted or rejected by its recipient.
status: active
semantic_text: A pending invitation can be cancelled by a privileged member of the organization and accepted or rejected by its recipient.
logic_claims:
  - CLAIM-FAF30A52B50B5864
  - CLAIM-18331CDBC62D8022
semantic_clauses:
  - A pending invitation can be cancelled by a privileged member of the organization
  - accepted or rejected by its recipient
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ba6e1aad41583f92e6d82144aba9cf7b0ec0db3f42ee6df045835c69fdc06fe6
semantic_inventory:
  - claim_key: CLAIM-FAF30A52B50B5864
    claim_text: A pending invitation can be cancelled by a privileged member of the organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-18331CDBC62D8022
    claim_text: accepted or rejected by its recipient
    role: descriptive
    status: modeled
    span:
      start: 85
      end: 122
    subjects:
      - invitations.invitation
firmness: firm
origin:
  kind: import
  ref: 'Organization invitations specs: invtations.specs.md#cancel-reject'
  recorded_at: '2026-10-14T12:11:03.314Z'
tags:
  - bootstrap
  - knowledge-source:invitations-spec
  - component:invitations
id: REQ-a-pending-invitation-can-be-cancelled-by-a-FE4C0162
type: req
required_evidence: asserted
---
A pending invitation can be cancelled by a privileged member of the organization and accepted or rejected by its recipient.

## Context

Reason not stated.

## Source

> Invitations can be cancelled by a privileged member of the organization.

Source: Organization invitations specs - invtations.specs.md#cancel-reject
