---
title: When the ingestion is enabled and the request signature is valid, the email attachments are added to the organization.
status: active
semantic_text: When the ingestion is enabled and the request signature is valid, the email attachments are added to the organization.
semantic_clauses:
  - When the ingestion is enabled and the request signature is valid, the email attachments are added to the organization
logic_claims:
  - CLAIM-8C941F502CE89DCA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e68e89b2b0be94804cd842964c61577659df6d2f9968125efbe63f2f51ccfd3f
semantic_inventory:
  - claim_key: CLAIM-8C941F502CE89DCA
    claim_text: When the ingestion is enabled and the request signature is valid, the email attachments are added to the organization
    role: condition
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - intake_emails.intake_emails_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1425'
  recorded_at: '2025-08-21T17:30:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-ingestion-is-enabled-and-request-signature-is
type: req
---
When the ingestion is enabled and the request signature is valid, the email attachments are added to the organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/e2e/ingest-intake-emails.e2e.test.ts (intake-emails e2e > ingest an intake email).

## Source

Source: Papra server behaviour notes - SRV-1425
