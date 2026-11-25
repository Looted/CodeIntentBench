---
title: Users who are not members of the organization cannot send invitations to prevent unauthorized access.
status: active
semantic_text: Users who are not members of the organization cannot send invitations to prevent unauthorized access.
semantic_clauses:
  - Users who are not members of the organization cannot send invitations to prevent unauthorized access
logic_claims:
  - CLAIM-A94304923C40F071
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 30f6bba104c393f7f42453f9f1976683b0dd3562d657f3837f09369bff205d00
semantic_inventory:
  - claim_key: CLAIM-A94304923C40F071
    claim_text: Users who are not members of the organization cannot send invitations to prevent unauthorized access
    role: normative
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - organizations.invite_member_to_organization
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1626'
  recorded_at: '2025-10-01T16:11:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:organizations
id: REQ-papra-organizations-users-who-are-not-members-of-organization
type: req
---
Users who are not members of the organization cannot send invitations to prevent unauthorized access.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/organizations/organizations.usecases.test.ts (organizations usecases > inviteMemberToOrganization).

## Source

Source: Papra server behaviour notes - SRV-1626
