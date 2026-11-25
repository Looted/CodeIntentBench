---
title: Parses optional name on email info.
status: active
semantic_text: Parses optional name on email info.
semantic_clauses:
  - Parses optional name on email info
logic_claims:
  - CLAIM-621E147A97AD16F4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7ff082480f70f9e47f9031e68769dfd0ca23b7a5193624e38fc87a0a62cc58c9
semantic_inventory:
  - claim_key: CLAIM-621E147A97AD16F4
    claim_text: Parses optional name on email info
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 34
    subjects:
      - intake_emails.intake_emails_ingestion_meta_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1453'
  recorded_at: '2026-04-09T13:33:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-parses-optional-name-on-email-info
type: req
---
Parses optional name on email info.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.schemas.test.ts (intake-emails.schemas > intakeEmailsIngestionMetaSchema).

## Source

Source: Papra server behaviour notes - SRV-1453
