---
title: Only owners and admins can remove members from an organization, and the owner can never be removed by anyone, including themselves.
status: active
semantic_text: Only owners and admins can remove members from an organization, and the owner can never be removed by anyone, including themselves.
semantic_clauses:
  - Only owners and admins can remove members from an organization
  - the owner can never be removed by anyone, including themselves
logic_claims:
  - CLAIM-8F378B8E5D3F3770
  - CLAIM-11E131C2DF5FA613
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7dde1cb83c1c0c5805e06668b235cea14ac1dab5b69151b0ecddb90890092e8
semantic_inventory:
  - claim_key: CLAIM-8F378B8E5D3F3770
    claim_text: Only owners and admins can remove members from an organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - organizations.member_removal
  - claim_key: CLAIM-11E131C2DF5FA613
    claim_text: the owner can never be removed by anyone, including themselves
    role: descriptive
    status: modeled
    span:
      start: 68
      end: 130
    subjects:
      - organizations.member_removal
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.models.test.ts#owner-cannot-be-removed'
  recorded_at: '2026-11-16T10:19:01.723Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:organizations
  - rule:owner-cannot-be-removed
id: REQ-papra-owner-cannot-be-removed
type: req
---
Only owners and admins can remove members from an organization, and the owner can never be removed by anyone, including themselves.

## Context

Reason not stated.

## Source

> the owner of an organization cannot be removed
> only admins or owners can remove members from an organization
> a member (not admin nor owner) cannot remove anyone from the organization

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.models.test.ts#owner-cannot-be-removed
