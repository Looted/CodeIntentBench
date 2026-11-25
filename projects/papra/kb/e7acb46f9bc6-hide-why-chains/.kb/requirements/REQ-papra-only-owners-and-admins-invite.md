---
title: Only an organization's owner or admins can invite new members or resend an invitation.
status: active
semantic_text: Only an organization's owner or admins can invite new members or resend an invitation. Regular members cannot send invitations, and non-members are rejected outright.
semantic_clauses:
  - Only an organization's owner or admins can invite new members or resend an invitation
  - Regular members cannot send invitations
  - non-members are rejected outright
logic_claims:
  - CLAIM-F45C9325C6545BD7
  - CLAIM-2448090CE2CE252C
  - CLAIM-95343250B31E5D3D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7a15f4b46025c079606e9dea195f38219572fb02114d27c118ac1cf6d5ce57a
semantic_inventory:
  - claim_key: CLAIM-F45C9325C6545BD7
    claim_text: Only an organization's owner or admins can invite new members or resend an invitation
    role: normative
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-2448090CE2CE252C
    claim_text: Regular members cannot send invitations
    role: normative
    status: modeled
    span:
      start: 87
      end: 126
    subjects:
      - invitations.invitation
  - claim_key: CLAIM-95343250B31E5D3D
    claim_text: non-members are rejected outright
    role: normative
    status: modeled
    span:
      start: 132
      end: 165
    subjects:
      - invitations.invitation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#only-owners-and-admins-invite'
  recorded_at: '2026-11-16T13:16:02.042Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:invitations
  - rule:only-owners-and-admins-invite
rationale: 'The test that covers non-members says they cannot send invitations "to prevent unauthorized access". Why regular members cannot invite: reason not stated.'
id: REQ-papra-only-owners-and-admins-invite
type: req
---
Only an organization's owner or admins can invite new members or resend an invitation. Regular members cannot send invitations, and non-members are rejected outright.

## Context

The test that covers non-members says they cannot send invitations "to prevent unauthorized access". Why regular members cannot invite: reason not stated.

## Source

> only organization owners and admins can invite members, regular members cannot send invitations
> users who are not members of the organization cannot send invitations to prevent unauthorized access

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#only-owners-and-admins-invite
