---
title: organizations.organization owner_count = 1
status: active
fact_kind: property_value
subject_key: organizations.organization
property_key: owner_count
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-DBE1AFEA63D9F946
claim_text: An organization has exactly one owner, the person who created it
text_ref: REQ-papra-invite-cannot-create-owner
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#invite-cannot-create-owner'
  recorded_at: '2026-11-25T19:26:24.496Z'
id: FACT-papra-organizations-organization-owner-count
type: fact
---
An organization has exactly one owner, the person who created it.

Modeled from REQ-papra-invite-cannot-create-owner so the claim can be checked for contradictions.
