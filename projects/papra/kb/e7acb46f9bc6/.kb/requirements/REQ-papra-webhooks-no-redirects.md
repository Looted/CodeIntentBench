---
title: Webhook requests do not follow HTTP redirects (3xx responses).
status: active
semantic_text: Webhook requests do not follow HTTP redirects (3xx responses).
semantic_clauses:
  - Webhook requests do not follow HTTP redirects (3xx responses)
logic_claims:
  - CLAIM-A864882014B714E6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 09b5b71f5f749fba200ba09b3fb2eeb8d02f4a08769da87f3c250e53fd1f0603
semantic_inventory:
  - claim_key: CLAIM-A864882014B714E6
    claim_text: Webhook requests do not follow HTTP redirects (3xx responses)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - webhook.redirects
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1099: Webhooks no longer follow http redirects (3xx responses) whe'
  recorded_at: '2026-11-16T10:23:09.352Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:webhooks
rationale: 'The changeset of #1099 (2026-05-18): it addresses security advisory GHSA-5g86-85rp-f9hx (the advisory is cited; the changeset gives no further reason).'
id: REQ-papra-webhooks-no-redirects
type: req
---
Webhook requests do not follow HTTP redirects (3xx responses).

## Context

The changeset of #1099 (2026-05-18): it addresses security advisory GHSA-5g86-85rp-f9hx (the advisory is cited; the changeset gives no further reason).

## Source

> Webhooks no longer follow http redirects (3xx responses) when sending requests. Addressing [GHSA-5g86-85rp-f9hx](https://github.com/papra-hq/papra/security/advisories/GHSA-5g86-85rp-f9hx), credit to [@FredrikEV](https://github.com/FredrikEV) for the responsible disclosure.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1099: Webhooks no longer follow http redirects (3xx responses) whe
