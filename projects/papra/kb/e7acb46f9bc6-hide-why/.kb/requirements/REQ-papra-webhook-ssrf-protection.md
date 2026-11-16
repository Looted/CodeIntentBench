---
title: When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update, unless its…
status: active
semantic_text: When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update, unless its hostname is on the instance's explicit allow list.
semantic_clauses:
  - When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update
  - unless its hostname is on the instance's explicit allow list
logic_claims:
  - CLAIM-0C1F5BD74963BC3A
  - CLAIM-5B0EB16EFF78D552
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a5c3e0bb7bb2a035160063d9810995db04324530e8908037ea606295195e6cbe
semantic_inventory:
  - claim_key: CLAIM-0C1F5BD74963BC3A
    claim_text: When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update
    role: condition
    status: modeled
    span:
      start: 0
      end: 144
    subjects:
      - webhook.url_ssrf_protection
  - claim_key: CLAIM-5B0EB16EFF78D552
    claim_text: unless its hostname is on the instance's explicit allow list
    role: exception
    status: modeled
    span:
      start: 146
      end: 206
    subjects:
      - webhook.url_ssrf_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): webhooks/webhooks.usecases.test.ts#webhook-ssrf-protection'
  recorded_at: '2026-11-16T13:16:36.784Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:webhooks
  - rule:webhook-ssrf-protection
rationale: 'The changeset of PR #993 (2026-04-02): webhook URLs are validated so they "do not point to private or reserved IP addresses, preventing potential server-side request forgery attacks"; the hostname allow list is for "internal services you control".'
id: REQ-papra-webhook-ssrf-protection
type: req
---
When SSRF protection is enabled, a webhook URL pointing at a private, loopback or otherwise unsafe address is rejected at creation and at update, unless its hostname is on the instance's explicit allow list.

## Context

The changeset of PR #993 (2026-04-02): webhook URLs are validated so they "do not point to private or reserved IP addresses, preventing potential server-side request forgery attacks"; the hostname allow list is for "internal services you control".

## Source

> when SSRF protection is enabled, creating a webhook with a private IP URL throws ssrf_unsafe_url
> when SSRF protection is enabled, updating a webhook with a private IP URL throws ssrf_unsafe_url

Source: Papra server test suite (apps/papra-server/src/modules) - webhooks/webhooks.usecases.test.ts#webhook-ssrf-protection
