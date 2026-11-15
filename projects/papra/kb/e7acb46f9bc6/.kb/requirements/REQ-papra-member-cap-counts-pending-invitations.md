---
title: An organization's plan sets a maximum number of members.
status: active
semantic_text: An organization's plan sets a maximum number of members. Pending invitations count toward that maximum, so a new invitation (or a resend) is refused when current members plus pending invitations already reach the plan limit.
semantic_clauses:
  - An organization's plan sets a maximum number of members
  - Pending invitations count toward that maximum
  - a new invitation (or a resend) is refused when current members plus pending invitations already reach the plan limit
logic_claims:
  - CLAIM-F9207496843EF50E
  - CLAIM-DD6D078452441638
  - CLAIM-0F4F1E5BD5A87E2F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23efde0afc612c7e40fa1f66f85c327ec39dd4d1b785ec2f3e2691e36b9dbf81
semantic_inventory:
  - claim_key: CLAIM-F9207496843EF50E
    claim_text: An organization's plan sets a maximum number of members
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - invitations.member_limit
  - claim_key: CLAIM-DD6D078452441638
    claim_text: Pending invitations count toward that maximum
    role: descriptive
    status: modeled
    span:
      start: 57
      end: 102
    subjects:
      - invitations.member_limit
  - claim_key: CLAIM-0F4F1E5BD5A87E2F
    claim_text: a new invitation (or a resend) is refused when current members plus pending invitations already reach the plan limit
    role: normative
    status: modeled
    span:
      start: 107
      end: 223
    subjects:
      - invitations.member_limit
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#member-cap-counts-pending-invitations'
  recorded_at: '2026-11-15T22:57:52.999Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:invitations
  - rule:member-cap-counts-pending-invitations
rationale: 'The test that covers the check, added in PR #536 (2025-10-05), says the limit is "defined by the plan to enforce subscription limits". Why pending invitations count toward it: reason not stated.'
id: REQ-papra-member-cap-counts-pending-invitations
type: req
---
An organization's plan sets a maximum number of members. Pending invitations count toward that maximum, so a new invitation (or a resend) is refused when current members plus pending invitations already reach the plan limit.

## Context

The test that covers the check, added in PR #536 (2025-10-05), says the limit is "defined by the plan to enforce subscription limits". Why pending invitations count toward it: reason not stated.

## Why this changed

PR #1534 (2026-09-20) extended the capacity check to resent invitations (test: "resending an invitation respects organization capacity"). Before it, only a new invitation was checked against members plus pending invitations.

## Source

> cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits
> resending an invitation respects organization capacity

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#member-cap-counts-pending-invitations
