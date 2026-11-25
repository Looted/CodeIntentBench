---
title: Parses a valid ingestion meta object.
status: active
semantic_text: Parses a valid ingestion meta object.
semantic_clauses:
  - Parses a valid ingestion meta object
logic_claims:
  - CLAIM-EE2A5B5A48398302
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 427c2c695d365939389ec1ae508fb2bd1002904c558173a66318a4619d38d8d3
semantic_inventory:
  - claim_key: CLAIM-EE2A5B5A48398302
    claim_text: Parses a valid ingestion meta object
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 36
    subjects:
      - intake_emails.intake_emails_ingestion_meta_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1450'
  recorded_at: '2025-10-22T12:51:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-parses-valid-ingestion-meta-object
type: req
---
Parses a valid ingestion meta object.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.schemas.test.ts (intake-emails.schemas > intakeEmailsIngestionMetaSchema).

## Source

Source: Papra server behaviour notes - SRV-1450
