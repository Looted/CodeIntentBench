---
title: The forum sign-in bridge reads FORUM_SSO_SECRET from a file named by FORUM_SSO_SECRET_FILE when that variable is set.
status: active
semantic_text: The forum sign-in bridge reads FORUM_SSO_SECRET from a file named by FORUM_SSO_SECRET_FILE when that variable is set.
semantic_clauses:
  - The forum sign-in bridge reads FORUM_SSO_SECRET from a file named by FORUM_SSO_SECRET_FILE when that variable is set
logic_claims:
  - CLAIM-73C3D5177582423D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 88a8a8e61a4820651ccfdde17ef24f862368150761d448f8b0efbfb610273c36
semantic_inventory:
  - claim_key: CLAIM-73C3D5177582423D
    claim_text: The forum sign-in bridge reads FORUM_SSO_SECRET from a file named by FORUM_SSO_SECRET_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - forum.forum_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-242'
  recorded_at: '2025-09-15T13:01:04.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Container platforms mount secrets as files.
id: REQ-forum-forum-sso-secret-source
type: req
---
The forum sign-in bridge reads FORUM_SSO_SECRET from a file named by FORUM_SSO_SECRET_FILE when that variable is set.

## Context

Container platforms mount secrets as files.

## Source

> feat(forum): where FORUM_SSO_SECRET is read from (FRM-242)

Source: Community forum operations notes - FRM-242
