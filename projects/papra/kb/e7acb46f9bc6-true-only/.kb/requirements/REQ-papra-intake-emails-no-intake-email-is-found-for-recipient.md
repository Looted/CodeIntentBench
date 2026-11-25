---
title: When no intake email is found for the recipient, nothing happens, only a log is emitted.
status: active
semantic_text: When no intake email is found for the recipient, nothing happens, only a log is emitted.
semantic_clauses:
  - When no intake email is found for the recipient, nothing happens, only a log is emitted
logic_claims:
  - CLAIM-7CDF5D9A02667CD5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 680ac3f1eb131a6cb92e50ab93b250b7924ced58ea3454e6248d4b9ef9e73c3e
semantic_inventory:
  - claim_key: CLAIM-7CDF5D9A02667CD5
    claim_text: When no intake email is found for the recipient, nothing happens, only a log is emitted
    role: condition
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - intake_emails.ingest_email_for_recipient
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1460'
  recorded_at: '2025-08-28T12:35:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-no-intake-email-is-found-for-recipient
type: req
---
When no intake email is found for the recipient, nothing happens, only a log is emitted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.usecases.test.ts (intake-emails usecases > ingestEmailForRecipient > when a email is forwarded to papra api, we look for the recipient in the intake emails repository and create a papra document for each attachment).

## Source

Source: Papra server behaviour notes - SRV-1460
