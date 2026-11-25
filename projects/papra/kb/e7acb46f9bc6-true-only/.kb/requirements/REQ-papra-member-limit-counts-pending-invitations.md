---
title: 'An organization''s plan sets a maximum number of members, and pending invitations count toward it: a new invitation is refused when current members plus pendi…'
status: closed
semantic_text: 'An organization''s plan sets a maximum number of members, and pending invitations count toward it: a new invitation is refused when current members plus pending invitations already reach the plan limit.'
semantic_clauses:
  - An organization's plan sets a maximum number of members
  - pending invitations count toward it
  - a new invitation is refused when current members plus pending invitations already reach the plan limit
logic_claims:
  - CLAIM-F9207496843EF50E
  - CLAIM-EC6DA35B00F3F23E
  - CLAIM-47AC378BA07E984B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3cc428789f567c7272a576826a8e3ba571ce46542d6fe03ab661bc30db44d0d2
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
  - claim_key: CLAIM-EC6DA35B00F3F23E
    claim_text: pending invitations count toward it
    role: descriptive
    status: modeled
    span:
      start: 61
      end: 96
    subjects:
      - invitations.member_limit
  - claim_key: CLAIM-47AC378BA07E984B
    claim_text: a new invitation is refused when current members plus pending invitations already reach the plan limit
    role: normative
    status: modeled
    span:
      start: 98
      end: 200
    subjects:
      - invitations.member_limit
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#member-limit'
  recorded_at: '2026-11-16T10:18:20.775Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:invitations
rationale: 'The test that covers the check, added in PR #536 (2025-10-05), says the limit is "defined by the plan to enforce subscription limits". Why pending invitations count toward it: reason not stated.'
id: REQ-papra-member-limit-counts-pending-invitations
type: req
---
An organization's plan sets a maximum number of members, and pending invitations count toward it: a new invitation is refused when current members plus pending invitations already reach the plan limit.

## Context

The test that covers the check, added in PR #536 (2025-10-05), says the limit is "defined by the plan to enforce subscription limits". Why pending invitations count toward it: reason not stated.

## Source

> cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#member-limit
