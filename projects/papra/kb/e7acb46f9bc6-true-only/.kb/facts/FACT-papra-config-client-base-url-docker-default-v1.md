---
title: config.client_base_url docker_default = http://localhost:1221
status: deprecated
fact_kind: property_value
subject_key: config.client_base_url
property_key: docker_default
operator: eq
value_type: string
value_string: http://localhost:1221
claim_key: CLAIM-32BD626570C6B124
claim_text: In the Docker images CLIENT_BASE_URL defaults to http://localhost:1221
text_ref: REQ-papra-client-base-url-docker-default
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.0 changelog, #320: Set CLIENT_BASE_URL default value to http://localhost:1221 i'
  recorded_at: '2026-11-16T10:23:56.445Z'
id: FACT-papra-config-client-base-url-docker-default-v1
type: fact
---
In the Docker images CLIENT_BASE_URL defaults to http://localhost:1221.

Modeled from REQ-papra-client-base-url-docker-default so the claim can be checked for contradictions.
