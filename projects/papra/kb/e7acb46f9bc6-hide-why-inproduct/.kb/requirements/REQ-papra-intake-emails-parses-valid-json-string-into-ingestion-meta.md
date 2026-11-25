---
title: Parses a valid JSON string into an ingestion meta object.
status: active
semantic_text: Parses a valid JSON string into an ingestion meta object.
semantic_clauses:
  - Parses a valid JSON string into an ingestion meta object
logic_claims:
  - CLAIM-88020E09C159F17B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f894a22d63807306dc86bc6579be768400ca06a6a8269bd91e1ddcc6eb8f8bb6
semantic_inventory:
  - claim_key: CLAIM-88020E09C159F17B
    claim_text: Parses a valid JSON string into an ingestion meta object
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - intake_emails.intake_email_ingestion_email_field_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1448'
  recorded_at: '2025-09-10T16:37:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-parses-valid-json-string-into-ingestion-meta
type: req
---
Parses a valid JSON string into an ingestion meta object.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.schemas.test.ts (intake-emails.schemas > intakeEmailIngestionEmailFieldSchema).

## Source

Source: Papra server behaviour notes - SRV-1448
