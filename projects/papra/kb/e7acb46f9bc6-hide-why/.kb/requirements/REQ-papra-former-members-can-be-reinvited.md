---
title: 'A user who left or was removed from an organization can be invited again: only a current membership or a pending invitation blocks a new invitation, while ac…'
status: active
semantic_text: 'A user who left or was removed from an organization can be invited again: only a current membership or a pending invitation blocks a new invitation, while accepted, expired, cancelled and rejected invitations do not; pending invitations past their expiry date are marked expired before the checks, so they stop consuming organization capacity.'
semantic_clauses:
  - A user who left or was removed from an organization can be invited again
  - only a current membership or a pending invitation blocks a new invitation
  - accepted, expired, cancelled and rejected invitations do not
  - pending invitations past their expiry date are marked expired before the checks, so they stop consuming organization capacity
logic_claims:
  - CLAIM-6CF9096FCB3F31A7
  - CLAIM-FAE3E6873AD10C51
  - CLAIM-86C82D376A879559
  - CLAIM-88FD3D18356B872C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 83ea163fe2ebfcfcef07015cc03c272564b1914761b24071cb1e5bfa5d77a864
semantic_inventory:
  - claim_key: CLAIM-6CF9096FCB3F31A7
    claim_text: A user who left or was removed from an organization can be invited again
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-FAE3E6873AD10C51
    claim_text: only a current membership or a pending invitation blocks a new invitation
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 147
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-86C82D376A879559
    claim_text: accepted, expired, cancelled and rejected invitations do not
    role: descriptive
    status: modeled
    span:
      start: 155
      end: 215
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-88FD3D18356B872C
    claim_text: pending invitations past their expiry date are marked expired before the checks, so they stop consuming organization capacity
    role: normative
    status: modeled
    span:
      start: 217
      end: 342
    subjects:
      - invitations.member_limit
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #1534'
  recorded_at: '2026-11-16T13:15:13.612Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:invitations
rationale: 'Reported in issue #1398 by edwardho1994 (2026-07-29): "Can not invite the same user after the user has been removed from the organization". The maintainer fixed it in PR #1534 without stating a reason of his own.'
id: REQ-papra-former-members-can-be-reinvited
type: req
---
A user who left or was removed from an organization can be invited again: only a current membership or a pending invitation blocks a new invitation, while accepted, expired, cancelled and rejected invitations do not; pending invitations past their expiry date are marked expired before the checks, so they stop consuming organization capacity.

## Context

Reported in issue #1398 by edwardho1994 (2026-07-29): "Can not invite the same user after the user has been removed from the organization". The maintainer fixed it in PR #1534 without stating a reason of his own.

## Source

> Fix an issue that prevented reinviting users who left or were removed from an organisation.
> a former member can be reinvited after being removed from the organization
> expired, cancelled and rejected invitations do not prevent a fresh invitation
> stale pending invitations expire immediately and stop consuming organization capacity

Source: papra-hq/papra merged pull requests - #1534
