---
title: A password reset link for integration service accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for integration service accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for integration service accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-9A9BA31259A8A97B
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3cf32c5b1f0a5a11faae9204743433c5a4c9bc0e8096f46b716c3088a6ab2995
semantic_inventory:
  - claim_key: CLAIM-9A9BA31259A8A97B
    claim_text: A password reset link for integration service accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - n8n.integration_service_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 117
    subjects:
      - n8n.integration_service_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-183'
  recorded_at: '2025-06-20T15:58:36.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: An old link found in a mailbox months later still worked.
id: REQ-n8n-integration-service-accounts-reset-link-single-use
type: req
---
A password reset link for integration service accounts works once; requesting a new link invalidates the earlier ones.

## Context

An old link found in a mailbox months later still worked.

## Source

> feat(n8n): single-use reset links (N8N-183)

Source: n8n integration notes - N8N-183
