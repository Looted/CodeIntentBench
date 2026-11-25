---
title: Fails if an entry is not a valid email address.
status: active
semantic_text: Fails if an entry is not a valid email address.
semantic_clauses:
  - Fails if an entry is not a valid email address
logic_claims:
  - CLAIM-8E5E46BEA007190D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cb7a1e062c22e8f1bd90846323d3ebc4cdd79beb31bdaf1d0e5a62a5675ddfe4
semantic_inventory:
  - claim_key: CLAIM-8E5E46BEA007190D
    claim_text: Fails if an entry is not a valid email address
    role: normative
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - intake_emails.allowed_origins_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1441'
  recorded_at: '2026-04-05T09:24:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-fails-if-entry-is-not-valid-email
type: req
---
Fails if an entry is not a valid email address.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.schemas.test.ts (intake-emails.schemas > allowedOriginsSchema).

## Source

Source: Papra server behaviour notes - SRV-1441
