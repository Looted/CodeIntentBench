---
title: An intake-email can be created, retrieved, and updated.
status: active
semantic_text: An intake-email can be created, retrieved, and updated.
semantic_clauses:
  - An intake-email can be created, retrieved, and updated
logic_claims:
  - CLAIM-0C8B386130445D27
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3cfb493932826c7038dc676420cba150a5764dda9a557b9ec1e454d9556d8dc0
semantic_inventory:
  - claim_key: CLAIM-0C8B386130445D27
    claim_text: An intake-email can be created, retrieved, and updated
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - intake_emails.intake_emails_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1440'
  recorded_at: '2025-05-11T11:38:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-intake-email-can-be-created-retrieved-and
type: req
---
An intake-email can be created, retrieved, and updated.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.repository.test.ts (intake-emails repository > crud operations on intake-emails).

## Source

Source: Papra server behaviour notes - SRV-1440
