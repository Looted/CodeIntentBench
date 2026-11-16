---
title: The Dockerfile pins its Node.js base image by digest.
status: active
semantic_text: The Dockerfile pins its Node.js base image by digest.
semantic_clauses:
  - The Dockerfile pins its Node.js base image by digest
logic_claims:
  - CLAIM-10BB24EB9A78361B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eee9d6fe4511eab8da113d859080db6a09d1d4225f3e055d317e9891cc93262f
semantic_inventory:
  - claim_key: CLAIM-10BB24EB9A78361B
    claim_text: The Dockerfile pins its Node.js base image by digest
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - docker.node_image
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1219: Pined the Dockerfile node version sha to reduce supply chain'
  recorded_at: '2026-11-16T10:35:25.066Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:deploy
rationale: 'The changeset of #1219 (2026-06-24): "to reduce supply chain attack surface".'
id: REQ-papra-docker-node-image-pinned
type: req
---
The Dockerfile pins its Node.js base image by digest.

## Context

The changeset of #1219 (2026-06-24): "to reduce supply chain attack surface".

## Source

> Pined the Dockerfile node version sha to reduce supply chain attack surface.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1219: Pined the Dockerfile node version sha to reduce supply chain
