---
title: organization.soft_delete allowed_with_ended_or_ending_subscription = True
status: active
fact_kind: property_value
subject_key: organization.soft_delete
property_key: allowed_with_ended_or_ending_subscription
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5A752D7808DA4B6C
claim_text: Organizations whose subscription is canceled, incomplete, or set to cancel at period end can be deleted
text_ref: REQ-papra-active-subscription-blocks-deletion
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#active-subscription-blocks-deletion'
  recorded_at: '2026-11-15T23:00:32.150Z'
id: FACT-papra-organization-soft-delete-allowed-with-ended-or-ending-subscription
type: fact
---
Organizations whose subscription is canceled, incomplete, or set to cancel at period end can be deleted.

Modeled from REQ-papra-active-subscription-blocks-deletion so the claim can be checked for contradictions.
