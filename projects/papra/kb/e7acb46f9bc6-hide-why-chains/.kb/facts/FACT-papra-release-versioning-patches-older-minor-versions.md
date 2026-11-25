---
title: release.versioning patches_older_minor_versions = False
status: active
fact_kind: property_value
subject_key: release.versioning
property_key: patches_older_minor_versions
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-B0F88D8F6AF71421
claim_text: older YY.MINOR versions receive no maintenance or security patches
text_ref: REQ-papra-application-versioning-year-based
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 04-resources/04-versioning-and-tagging.mdx#application-versioning'
  recorded_at: '2026-11-16T13:15:19.667Z'
id: FACT-papra-release-versioning-patches-older-minor-versions
type: fact
---
Older YY.MINOR versions receive no maintenance or security patches.

Modeled from REQ-papra-application-versioning-year-based so the claim can be checked for contradictions.
