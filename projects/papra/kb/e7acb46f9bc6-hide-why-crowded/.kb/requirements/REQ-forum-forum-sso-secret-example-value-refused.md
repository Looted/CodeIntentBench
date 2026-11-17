---
title: The forum sign-in bridge refuses the example value of FORUM_SSO_SECRET from its documentation, in every environment.
status: active
semantic_text: The forum sign-in bridge refuses the example value of FORUM_SSO_SECRET from its documentation, in every environment.
semantic_clauses:
  - The forum sign-in bridge refuses the example value of FORUM_SSO_SECRET from its documentation, in every environment
logic_claims:
  - CLAIM-5AC34643E5A33FC1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f42a0e5d97e7e3c332e11d1bd545a04c23a1c009a81e265c405722e787f01b23
semantic_inventory:
  - claim_key: CLAIM-5AC34643E5A33FC1
    claim_text: The forum sign-in bridge refuses the example value of FORUM_SSO_SECRET from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - forum.forum_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-236'
  recorded_at: '2025-02-07T10:54:33.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: The example value was found in use on public deployments.
id: REQ-forum-forum-sso-secret-example-value-refused
type: req
---
The forum sign-in bridge refuses the example value of FORUM_SSO_SECRET from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(forum): refuse the documented example FORUM_SSO_SECRET (FRM-236)

Source: Community forum operations notes - FRM-236
