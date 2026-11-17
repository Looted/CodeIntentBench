---
title: FORUM_SSO_SECRET is rotated every 180 days; the previous value stays valid for 48 hours after a rotation.
status: active
semantic_text: FORUM_SSO_SECRET is rotated every 180 days; the previous value stays valid for 48 hours after a rotation.
semantic_clauses:
  - FORUM_SSO_SECRET is rotated every 180 days
  - the previous value stays valid for 48 hours after a rotation
logic_claims:
  - CLAIM-C9C1014FC6C522D1
  - CLAIM-40B0302E57698F6D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d172b2b3546b40edfc19956d0abf9b35aab2f65884a786208a5a6327e44f37ad
semantic_inventory:
  - claim_key: CLAIM-C9C1014FC6C522D1
    claim_text: FORUM_SSO_SECRET is rotated every 180 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - forum.forum_sso_secret
  - claim_key: CLAIM-40B0302E57698F6D
    claim_text: the previous value stays valid for 48 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 44
      end: 104
    subjects:
      - forum.forum_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-237'
  recorded_at: '2026-03-26T13:30:02.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Without an overlap, a rotation of the single sign-on secret broke requests already on their way.
id: REQ-forum-forum-sso-secret-rotation
type: req
---
FORUM_SSO_SECRET is rotated every 180 days; the previous value stays valid for 48 hours after a rotation.

## Context

Without an overlap, a rotation of the single sign-on secret broke requests already on their way.

## Source

> chore(forum): rotate FORUM_SSO_SECRET every 180 days (FRM-237)

Source: Community forum operations notes - FRM-237
