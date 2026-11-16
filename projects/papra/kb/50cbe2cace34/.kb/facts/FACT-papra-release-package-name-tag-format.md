---
title: release.package_name tag_format = @papra/app@version
status: active
fact_kind: property_value
subject_key: release.package_name
property_key: tag_format
operator: eq
value_type: string
value_string: '@papra/app@version'
claim_key: CLAIM-8DC639E5FF2A4CBB
claim_text: release tags use the format @papra/app@<version>
text_ref: REQ-papra-app-package-renamed
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.1.0 changelog, #796: Renamed the internal distribution package from `@papra/docke'
  recorded_at: '2026-11-16T10:35:31.705Z'
id: FACT-papra-release-package-name-tag-format
type: fact
---
Release tags use the format @papra/app@<version>.

Modeled from REQ-papra-app-package-renamed so the claim can be checked for contradictions.
