---
title: Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay.
status: active
semantic_text: Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay.
logic_claims:
  - CLAIM-D3CAD4102B89D99B
  - CLAIM-5C1B1F060BB2D123
semantic_clauses:
  - Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET
  - so the server can authenticate that an email comes from the configured relay
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 310ca194a2480489598f8c21f539166c6994f1e6524f688e8760d18a06d59b4d
semantic_inventory:
  - claim_key: CLAIM-D3CAD4102B89D99B
    claim_text: Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - intake_email.webhook
  - claim_key: CLAIM-5C1B1F060BB2D123
    claim_text: so the server can authenticate that an email comes from the configured relay
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 151
    subjects:
      - intake_email.webhook
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
required_evidence: asserted
rationale: 'The OwlRelay setup guide: the secret is transmitted to the relay to sign its requests, "to authenticate that the emails are coming from OwlRelay".'
---
Inbound intake email webhooks are signed with INTAKE_EMAILS_WEBHOOK_SECRET so the server can authenticate that an email comes from the configured relay.

## Context

The OwlRelay setup guide: the secret is transmitted to the relay to sign its requests, "to authenticate that the emails are coming from OwlRelay".

## Source

> # Set a random key that will be transmitted to OwlRelay to sign the requests,
> # this is to authenticate that the emails are coming from OwlRelay

Source: Papra documentation site (apps/docs) - 03-guides/01-intake-emails-with-owlrelay.mdx#webhook-secret
