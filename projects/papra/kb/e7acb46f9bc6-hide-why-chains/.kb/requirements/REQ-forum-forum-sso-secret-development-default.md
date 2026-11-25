---
title: The forum sign-in bridge requires FORUM_SSO_SECRET in every environment, development included.
status: active
semantic_text: The forum sign-in bridge requires FORUM_SSO_SECRET in every environment, development included.
semantic_clauses:
  - The forum sign-in bridge requires FORUM_SSO_SECRET in every environment, development included
logic_claims:
  - CLAIM-2CC6F5FAE75F67E9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 517ea2e971eaf90e9ae12bdd22d24983fa77816baddc0a96ac7f94ead33eaa91
semantic_inventory:
  - claim_key: CLAIM-2CC6F5FAE75F67E9
    claim_text: The forum sign-in bridge requires FORUM_SSO_SECRET in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - forum.forum_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-255'
  recorded_at: '2026-07-12T17:16:58.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: A development default had been copied into a production configuration.
id: REQ-forum-forum-sso-secret-development-default
type: req
---
The forum sign-in bridge requires FORUM_SSO_SECRET in every environment, development included.

## Context

A development default had been copied into a production configuration.

## Source

> feat(forum): FORUM_SSO_SECRET outside production (FRM-255)

Source: Community forum operations notes - FRM-255
