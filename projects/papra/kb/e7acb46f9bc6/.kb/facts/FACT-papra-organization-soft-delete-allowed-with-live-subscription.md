---
title: organization.soft_delete allowed_with_live_subscription = False
status: active
fact_kind: property_value
subject_key: organization.soft_delete
property_key: allowed_with_live_subscription
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-4D1E52E63366696A
claim_text: An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted
text_ref: REQ-papra-active-subscription-blocks-deletion
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#active-subscription-blocks-deletion'
  recorded_at: '2026-11-16T10:18:22.849Z'
id: FACT-papra-organization-soft-delete-allowed-with-live-subscription
type: fact
---
An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted.

Modeled from REQ-papra-active-subscription-blocks-deletion so the claim can be checked for contradictions.
