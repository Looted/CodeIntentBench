---
title: When an email is send to multiple intake emails from different organization, the attachments are processed for each of them.
status: active
semantic_text: When an email is send to multiple intake emails from different organization, the attachments are processed for each of them.
semantic_clauses:
  - When an email is send to multiple intake emails from different organization, the attachments are processed for each of them
logic_claims:
  - CLAIM-207A393141EF3104
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bbcbb44199e92d1cb8e141e5b209617b0fbd619dad23bc8a3d24a8c9840fe8fc
semantic_inventory:
  - claim_key: CLAIM-207A393141EF3104
    claim_text: When an email is send to multiple intake emails from different organization, the attachments are processed for each of them
    role: condition
    status: modeled
    span:
      start: 0
      end: 123
    subjects:
      - intake_emails.process_intake_email_ingestion
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1456'
  recorded_at: '2025-05-24T11:04:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-email-is-send-to-multiple-intake-emails
type: req
---
When an email is send to multiple intake emails from different organization, the attachments are processed for each of them.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.usecases.test.ts (intake-emails usecases > processIntakeEmailIngestion).

## Source

Source: Papra server behaviour notes - SRV-1456
