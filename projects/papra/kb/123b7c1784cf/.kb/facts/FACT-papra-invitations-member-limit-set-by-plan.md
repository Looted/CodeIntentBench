---
title: invitations.member_limit set_by_plan = True
status: active
fact_kind: property_value
subject_key: invitations.member_limit
property_key: set_by_plan
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F9207496843EF50E
claim_text: An organization's plan sets a maximum number of members
text_ref: REQ-papra-member-limit-counts-pending-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#member-limit'
  recorded_at: '2026-11-25T19:26:02.068Z'
id: FACT-papra-invitations-member-limit-set-by-plan
type: fact
---
An organization's plan sets a maximum number of members.

Modeled from REQ-papra-member-limit-counts-pending-invitations so the claim can be checked for contradictions.
