---
title: config.app_base_url shared_by_server_and_client = True
status: active
fact_kind: property_value
subject_key: config.app_base_url
property_key: shared_by_server_and_client
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DCC447FDBDEDF6EC
claim_text: A single APP_BASE_URL sets the base URL of both the server and the client
text_ref: REQ-papra-app-base-url
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.4 changelog, #405: Introduce APP_BASE_URL to mutualize server and client base u'
  recorded_at: '2026-11-16T10:24:00.149Z'
id: FACT-papra-config-app-base-url-shared-by-server-and-client
type: fact
---
A single APP_BASE_URL sets the base URL of both the server and the client.

Modeled from REQ-papra-app-base-url so the claim can be checked for contradictions.
