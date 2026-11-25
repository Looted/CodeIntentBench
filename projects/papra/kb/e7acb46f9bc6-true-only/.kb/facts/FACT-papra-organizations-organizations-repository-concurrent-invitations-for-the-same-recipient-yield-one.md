---
title: organizations.organizations_repository concurrent_invitations_for_the_same_recipient_yield_one = True
status: active
fact_kind: property_value
subject_key: organizations.organizations_repository
property_key: concurrent_invitations_for_the_same_recipient_yield_one
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DF2FE2D0078F97C6
claim_text: Concurrent invitations for the same recipient yield one invitation and a duplicate invitation error
text_ref: REQ-papra-organizations-concurrent-invitations-for-same-recipient-yield-one
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1473'
  recorded_at: '2026-02-05T14:05:46.000Z'
id: FACT-papra-organizations-organizations-repository-concurrent-invitations-for-the-same-recipient-yield-one
type: fact
---
Concurrent invitations for the same recipient yield one invitation and a duplicate invitation error.

Modeled from REQ-papra-organizations-concurrent-invitations-for-same-recipient-yield-one so the claim can be checked for contradictions.
