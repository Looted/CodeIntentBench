---
title: An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted; the owner must cancel th…
status: active
semantic_text: An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted; the owner must cancel the subscription first. Organizations whose subscription is canceled, incomplete, or set to cancel at period end can be deleted.
semantic_clauses:
  - An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted
  - the owner must cancel the subscription first
  - Organizations whose subscription is canceled, incomplete, or set to cancel at period end can be deleted
logic_claims:
  - CLAIM-4D1E52E63366696A
  - CLAIM-EC6B5E329E81C29E
  - CLAIM-5A752D7808DA4B6C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2f00e9854ad7ab80cb831d1618cad3cb6d998a5f63efce605dd017d414daac96
semantic_inventory:
  - claim_key: CLAIM-4D1E52E63366696A
    claim_text: An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted
    role: normative
    status: modeled
    span:
      start: 0
      end: 131
    subjects:
      - organization.soft_delete
  - claim_key: CLAIM-EC6B5E329E81C29E
    claim_text: the owner must cancel the subscription first
    role: normative
    status: modeled
    span:
      start: 133
      end: 177
    subjects:
      - organization.soft_delete
  - claim_key: CLAIM-5A752D7808DA4B6C
    claim_text: Organizations whose subscription is canceled, incomplete, or set to cancel at period end can be deleted
    role: descriptive
    status: modeled
    span:
      start: 179
      end: 282
    subjects:
      - organization.soft_delete
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#active-subscription-blocks-deletion'
  recorded_at: '2026-11-15T23:00:32.932Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:subscriptions
  - rule:active-subscription-blocks-deletion
rationale: 'The code comment on doesSubscriptionBlockDeletion (PR #572, 2025-10-24): a subscription set to cancel at period end does not block deletion because the "User has already expressed intent to cancel" and the "Organization will lose access at period end anyway". Why a live subscription blocks deletion instead of being cancelled with it: reason not stated.'
id: REQ-papra-active-subscription-blocks-deletion
type: req
---
An organization with a live paid subscription (active, trialing, past due or unpaid, and not scheduled to cancel) cannot be deleted; the owner must cancel the subscription first. Organizations whose subscription is canceled, incomplete, or set to cancel at period end can be deleted.

## Context

The code comment on doesSubscriptionBlockDeletion (PR #572, 2025-10-24): a subscription set to cancel at period end does not block deletion because the "User has already expressed intent to cancel" and the "Organization will lose access at period end anyway". Why a live subscription blocks deletion instead of being cancelled with it: reason not stated.

## Source

> cannot delete organization with an active subscription
> can delete organization with subscription scheduled to cancel at period end
> active subscription with ongoing billing blocks deletion
> user who canceled subscription via customer portal can immediately delete organization

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#active-subscription-blocks-deletion
