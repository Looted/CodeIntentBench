---
title: rate_limit.ip_header configurable = True
status: active
fact_kind: property_value
subject_key: rate_limit.ip_header
property_key: configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9D8ABBFE6622BC82
claim_text: The header the rate limiter reads the client IP from is configurable
text_ref: REQ-papra-rate-limit-ip-header-configurable
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.6 changelog, #531: Added env variable to configure ip header for rate limit'
  recorded_at: '2026-11-25T19:30:17.803Z'
id: FACT-papra-rate-limit-ip-header-configurable
type: fact
---
The header the rate limiter reads the client IP from is configurable.

Modeled from REQ-papra-rate-limit-ip-header-configurable so the claim can be checked for contradictions.
