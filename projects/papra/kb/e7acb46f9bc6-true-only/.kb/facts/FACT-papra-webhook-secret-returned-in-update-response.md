---
title: webhook.secret returned_in_update_response = False
status: active
fact_kind: property_value
subject_key: webhook.secret
property_key: returned_in_update_response
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-2407448ED7E7E4DB
claim_text: The webhook update API response redacts the signing secret
text_ref: REQ-papra-webhook-secret-redacted
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.1 changelog, #566: Redacted webhook signing secret in api update response'
  recorded_at: '2026-11-16T10:22:58.567Z'
id: FACT-papra-webhook-secret-returned-in-update-response
type: fact
---
The webhook update API response redacts the signing secret.

Modeled from REQ-papra-webhook-secret-redacted so the claim can be checked for contradictions.
