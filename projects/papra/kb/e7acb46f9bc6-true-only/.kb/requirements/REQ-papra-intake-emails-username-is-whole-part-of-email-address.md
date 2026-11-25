---
title: The username is the whole part of the email address before the @.
status: active
semantic_text: The username is the whole part of the email address before the @.
semantic_clauses:
  - The username is the whole part of the email address before the @
logic_claims:
  - CLAIM-45A6CCA75A954B88
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d4b3954392f00280701234a0a3066645a47f42f206fa05b7d4918f71c55875de
semantic_inventory:
  - claim_key: CLAIM-45A6CCA75A954B88
    claim_text: The username is the whole part of the email address before the @
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - intake_emails.get_email_username
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1436'
  recorded_at: '2025-07-05T12:51:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:intake-emails
id: REQ-papra-intake-emails-username-is-whole-part-of-email-address
type: req
---
The username is the whole part of the email address before the @.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/intake-emails/intake-emails.models.test.ts (intake-emails models > getEmailUsername).

## Source

Source: Papra server behaviour notes - SRV-1436
