---
title: Fails if the parsed JSON does not match the meta schema.
status: active
semantic_text: Fails if the parsed JSON does not match the meta schema.
semantic_clauses:
  - Fails if the parsed JSON does not match the meta schema
logic_claims:
  - CLAIM-64857DA14085E84C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ee1683828aa8a6888c25e8a90dd0929169da05fd243dd834c30e3170b319f102
semantic_inventory:
  - claim_key: CLAIM-64857DA14085E84C
    claim_text: Fails if the parsed JSON does not match the meta schema
    role: normative
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - intake_emails.intake_email_ingestion_email_field_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1442'
  recorded_at: '2025-10-05T12:49:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-fails-if-parsed-json-does-not-match
type: req
---
Fails if the parsed JSON does not match the meta schema.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.schemas.test.ts (intake-emails.schemas > intakeEmailIngestionEmailFieldSchema).

## Source

Source: Papra server behaviour notes - SRV-1442
