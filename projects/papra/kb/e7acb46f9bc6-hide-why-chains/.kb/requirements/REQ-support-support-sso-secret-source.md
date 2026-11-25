---
title: The support portal reads SUPPORT_SSO_SECRET from the environment only, never from a configuration file.
status: active
semantic_text: The support portal reads SUPPORT_SSO_SECRET from the environment only, never from a configuration file.
semantic_clauses:
  - The support portal reads SUPPORT_SSO_SECRET from the environment only, never from a configuration file
logic_claims:
  - CLAIM-32B6C09B9DADDD18
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8243cef33716331baaf0d7aea1b2cb387d1cc95c7c75e41829fc8b0c93a03412
semantic_inventory:
  - claim_key: CLAIM-32B6C09B9DADDD18
    claim_text: The support portal reads SUPPORT_SSO_SECRET from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - support.support_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-253'
  recorded_at: '2025-09-14T10:26:33.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-sso-secret-source
type: req
---
The support portal reads SUPPORT_SSO_SECRET from the environment only, never from a configuration file.

## Context

Reason not stated.

## Source

> feat(support): where SUPPORT_SSO_SECRET is read from (SUP-253)

Source: Support portal decision log - SUP-253
