---
title: Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay.
status: active
semantic_text: Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay.
logic_claims:
  - CLAIM-77929897F26F56B3
semantic_clauses:
  - Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 310ca194a2480489598f8c21f539166c6994f1e6524f688e8760d18a06d59b4d
semantic_inventory:
  - claim_key: CLAIM-77929897F26F56B3
    claim_text: Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 151
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/01-intake-emails-with-owlrelay.mdx#webhook-secret'
  recorded_at: '2026-10-14T12:11:28.639Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:intake_emails
id: REQ-inbound-intake-email-webhooks-are-signed-w-27EFD88D
type: req
---
Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay.

## Context

Reason not stated.

## Source

> # Set a random key that will be transmitted to OwlRelay to sign the requests,
> # this is to authenticate that the emails are coming from OwlRelay

Source: Papra documentation site (apps/docs) - 03-guides/01-intake-emails-with-owlrelay.mdx#webhook-secret
