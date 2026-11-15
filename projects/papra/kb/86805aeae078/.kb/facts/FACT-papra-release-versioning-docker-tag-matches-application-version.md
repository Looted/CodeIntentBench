---
title: release.versioning docker_tag_matches_application_version = True
status: active
fact_kind: property_value
subject_key: release.versioning
property_key: docker_tag_matches_application_version
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-81DA91DC6A69FEBF
claim_text: Docker image tags follow the application version
text_ref: REQ-the-application-package-is-versioned-with--B1FD7959
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 04-resources/04-versioning-and-tagging.mdx'
  recorded_at: '2026-11-15T21:51:08.221Z'
id: FACT-papra-release-versioning-docker-tag-matches-application-version
type: fact
---
Docker image tags follow the application version.

Modeled from REQ-the-application-package-is-versioned-with--B1FD7959 so the claim can be checked for contradictions.
