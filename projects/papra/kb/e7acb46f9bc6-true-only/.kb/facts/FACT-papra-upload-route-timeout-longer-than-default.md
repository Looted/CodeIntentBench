---
title: upload.route_timeout longer_than_default = True
status: active
fact_kind: property_value
subject_key: upload.route_timeout
property_key: longer_than_default
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0E37782C91B83B7B
claim_text: The document upload route has its own, longer timeout than other routes
text_ref: REQ-papra-upload-route-dedicated-timeout
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #707: Added a dedicated increased timeout for the document upload'
  recorded_at: '2026-11-16T10:23:30.176Z'
id: FACT-papra-upload-route-timeout-longer-than-default
type: fact
---
The document upload route has its own, longer timeout than other routes.

Modeled from REQ-papra-upload-route-dedicated-timeout so the claim can be checked for contradictions.
