---
title: docker.node_image pinned_by_digest = True
status: active
fact_kind: property_value
subject_key: docker.node_image
property_key: pinned_by_digest
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-10BB24EB9A78361B
claim_text: The Dockerfile pins its Node.js base image by digest
text_ref: REQ-papra-docker-node-image-pinned
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1219: Pined the Dockerfile node version sha to reduce supply chain'
  recorded_at: '2026-11-16T10:35:24.174Z'
id: FACT-papra-docker-node-image-pinned-by-digest
type: fact
---
The Dockerfile pins its Node.js base image by digest.

Modeled from REQ-papra-docker-node-image-pinned so the claim can be checked for contradictions.
