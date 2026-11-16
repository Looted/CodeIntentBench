---
title: A user can own at most a configured number of organizations (default 10).
status: active
semantic_text: A user can own at most a configured number of organizations (default 10). Only organizations the user owns count toward the cap, and an instance admin can raise or lower the cap for an individual user.
semantic_clauses:
  - A user can own at most a configured number of organizations (default 10)
  - Only organizations the user owns count toward the cap
  - an instance admin can raise or lower the cap for an individual user
logic_claims:
  - CLAIM-A2BAF1E16FA79304
  - CLAIM-6BD01E78BEC21C80
  - CLAIM-A589213CFBBD8AAD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ba7971018e34e57430c6784925cf10bf304b14fa7ac3be4a74bb9eacab52bc6f
semantic_inventory:
  - claim_key: CLAIM-A2BAF1E16FA79304
    claim_text: A user can own at most a configured number of organizations (default 10)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - organizations.user_cap
  - claim_key: CLAIM-6BD01E78BEC21C80
    claim_text: Only organizations the user owns count toward the cap
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 127
    subjects:
      - organizations.user_cap
  - claim_key: CLAIM-A589213CFBBD8AAD
    claim_text: an instance admin can raise or lower the cap for an individual user
    role: descriptive
    status: modeled
    span:
      start: 133
      end: 200
    subjects:
      - organizations.user_cap
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#user-owned-organization-cap'
  recorded_at: '2026-11-16T10:19:27.075Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:organizations
  - rule:user-owned-organization-cap
id: REQ-papra-user-owned-organization-cap
type: req
---
A user can own at most a configured number of organizations (default 10). Only organizations the user owns count toward the cap, and an instance admin can raise or lower the cap for an individual user.

## Context

Reason not stated.

## Source

> by default the maximum number of organizations a user can create is defined in the config, if the user has reached the limit an error is thrown
> an admin can individually allow a user to create more organizations by setting the maxOrganizationCount on the user
> a user with a custom max organization count uses that value

Source: Papra server test suite (apps/papra-server/src/modules) - organizations/organizations.usecases.test.ts#user-owned-organization-cap
