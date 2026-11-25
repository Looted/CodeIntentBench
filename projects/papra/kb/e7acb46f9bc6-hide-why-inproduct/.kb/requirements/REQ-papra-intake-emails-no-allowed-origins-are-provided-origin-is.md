---
title: If no allowed origins are provided, the origin is not allowed.
status: active
semantic_text: If no allowed origins are provided, the origin is not allowed.
semantic_clauses:
  - If no allowed origins are provided, the origin is not allowed
logic_claims:
  - CLAIM-445689D99685505C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7e4303fb563dd6db6c11a77e5b843aa5c2ea4ad8681e107f4a14b184fb3ccd51
semantic_inventory:
  - claim_key: CLAIM-445689D99685505C
    claim_text: If no allowed origins are provided, the origin is not allowed
    role: condition
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - intake_emails.get_is_from_allowed_origin
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1434'
  recorded_at: '2026-03-11T15:12:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-no-allowed-origins-are-provided-origin-is
type: req
---
If no allowed origins are provided, the origin is not allowed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.models.test.ts (intake-emails models > getIsFromAllowedOrigin).

## Source

Source: Papra server behaviour notes - SRV-1434
