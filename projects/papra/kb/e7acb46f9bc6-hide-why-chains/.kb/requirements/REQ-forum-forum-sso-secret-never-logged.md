---
title: The forum sign-in bridge never writes FORUM_SSO_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The forum sign-in bridge never writes FORUM_SSO_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The forum sign-in bridge never writes FORUM_SSO_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-C4C86AEB51B7BAF4
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 438e1662d4b4a60d54f93bf21a47dd831f1c391f034ffe47da3025732a71f561
semantic_inventory:
  - claim_key: CLAIM-C4C86AEB51B7BAF4
    claim_text: The forum sign-in bridge never writes FORUM_SSO_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - forum.forum_sso_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 135
    subjects:
      - forum.forum_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-247'
  recorded_at: '2026-01-15T16:25:19.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-sso-secret-never-logged
type: req
---
The forum sign-in bridge never writes FORUM_SSO_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

Reason not stated.

## Source

> fix(forum): keep FORUM_SSO_SECRET out of logs (FRM-247)

Source: Community forum operations notes - FRM-247
