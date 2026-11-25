---
title: organization.soft_delete requires_subscription_cancelled_first = True
status: active
fact_kind: property_value
subject_key: organization.soft_delete
property_key: requires_subscription_cancelled_first
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EC6B5E329E81C29E
claim_text: the owner must cancel the subscription first
text_ref: REQ-papra-active-subscription-blocks-deletion
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#active-subscription-blocks-deletion'
  recorded_at: '2026-11-25T19:26:07.979Z'
id: FACT-papra-organization-soft-delete-requires-subscription-cancelled-first
type: fact
---
The owner must cancel the subscription first.

Modeled from REQ-papra-active-subscription-blocks-deletion so the claim can be checked for contradictions.
