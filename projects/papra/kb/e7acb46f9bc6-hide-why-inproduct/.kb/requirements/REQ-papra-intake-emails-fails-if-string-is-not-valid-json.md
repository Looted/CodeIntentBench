---
title: Fails if the string is not valid JSON.
status: active
semantic_text: Fails if the string is not valid JSON.
semantic_clauses:
  - Fails if the string is not valid JSON
logic_claims:
  - CLAIM-F15B252561CCB432
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0d2eb992d9489a3a5896ea64c185f985babcbb26b60a2a5bd163ea779f09e666
semantic_inventory:
  - claim_key: CLAIM-F15B252561CCB432
    claim_text: Fails if the string is not valid JSON
    role: normative
    status: modeled
    span:
      start: 0
      end: 37
    subjects:
      - intake_emails.intake_email_ingestion_email_field_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1446'
  recorded_at: '2025-02-26T12:31:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-fails-if-string-is-not-valid-json
type: req
---
Fails if the string is not valid JSON.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.schemas.test.ts (intake-emails.schemas > intakeEmailIngestionEmailFieldSchema).

## Source

Source: Papra server behaviour notes - SRV-1446
