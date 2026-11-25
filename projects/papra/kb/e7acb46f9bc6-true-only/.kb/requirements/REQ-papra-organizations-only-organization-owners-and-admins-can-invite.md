---
title: Only organization owners and admins can invite members, regular members cannot send invitations.
status: active
semantic_text: Only organization owners and admins can invite members, regular members cannot send invitations.
semantic_clauses:
  - Only organization owners and admins can invite members, regular members cannot send invitations
logic_claims:
  - CLAIM-0FF9F880BD96BF73
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 88103495d2344d7eb8a1db7c6ab09669826996f1eaca72b5689c9d8218371f71
semantic_inventory:
  - claim_key: CLAIM-0FF9F880BD96BF73
    claim_text: Only organization owners and admins can invite members, regular members cannot send invitations
    role: normative
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1583'
  recorded_at: '2025-07-04T10:36:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-only-organization-owners-and-admins-can-invite
type: req
---
Only organization owners and admins can invite members, regular members cannot send invitations.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1583
