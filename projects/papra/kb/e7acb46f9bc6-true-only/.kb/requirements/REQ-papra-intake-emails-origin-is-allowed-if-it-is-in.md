---
title: An origin is allowed if it is in the list of the intake email allowed origins email address.
status: active
semantic_text: An origin is allowed if it is in the list of the intake email allowed origins email address.
semantic_clauses:
  - An origin is allowed if it is in the list of the intake email allowed origins email address
logic_claims:
  - CLAIM-773447B954DBBE03
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 159985cab1320eb9d49d20f19be58e2aee52b3b6ad66f0e1edc037428104739d
semantic_inventory:
  - claim_key: CLAIM-773447B954DBBE03
    claim_text: An origin is allowed if it is in the list of the intake email allowed origins email address
    role: normative
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - intake_emails.get_is_from_allowed_origin
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1430'
  recorded_at: '2025-12-24T17:11:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-origin-is-allowed-if-it-is-in
type: req
---
An origin is allowed if it is in the list of the intake email allowed origins email address.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.models.test.ts (intake-emails models > getIsFromAllowedOrigin).

## Source

Source: Papra server behaviour notes - SRV-1430
