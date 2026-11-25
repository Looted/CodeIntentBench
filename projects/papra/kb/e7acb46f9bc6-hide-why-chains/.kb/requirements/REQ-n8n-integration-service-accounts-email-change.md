---
title: Changing the email address of an integration service account does not end any session.
status: active
semantic_text: Changing the email address of an integration service account does not end any session.
semantic_clauses:
  - Changing the email address of an integration service account does not end any session
logic_claims:
  - CLAIM-64A340062E440B53
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 57f75fe5d408cf7bb2b468c66850aab965fb5c25fb2f7ae67468c25bce5d130d
semantic_inventory:
  - claim_key: CLAIM-64A340062E440B53
    claim_text: Changing the email address of an integration service account does not end any session
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-201'
  recorded_at: '2026-02-07T11:20:27.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: An address change is often the first step of taking an account over.
id: REQ-n8n-integration-service-accounts-email-change
type: req
---
Changing the email address of an integration service account does not end any session.

## Context

An address change is often the first step of taking an account over.

## Source

> feat(n8n): sessions after an email change (N8N-201)

Source: n8n integration notes - N8N-201
