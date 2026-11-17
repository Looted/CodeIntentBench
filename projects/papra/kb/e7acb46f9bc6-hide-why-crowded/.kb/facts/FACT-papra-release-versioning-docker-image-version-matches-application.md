---
title: release.versioning docker_image_version_matches_application = True
status: active
fact_kind: property_value
subject_key: release.versioning
property_key: docker_image_version_matches_application
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9DFEC3FA0A3547A3
claim_text: Docker images use the same version as the application package
text_ref: REQ-papra-application-versioning-year-based
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 04-resources/04-versioning-and-tagging.mdx#application-versioning'
  recorded_at: '2026-11-16T13:15:20.975Z'
id: FACT-papra-release-versioning-docker-image-version-matches-application
type: fact
---
Docker images use the same version as the application package.

Modeled from REQ-papra-application-versioning-year-based so the claim can be checked for contradictions.
