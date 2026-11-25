---
title: activity_log.document available = True
status: active
fact_kind: property_value
subject_key: activity_log.document
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-973B1EC86F4743DE
claim_text: Every document keeps an activity log of the actions taken on it
text_ref: REQ-papra-document-activity-log
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.0 changelog, #317: Added document activity log'
  recorded_at: '2026-11-25T19:27:39.125Z'
id: FACT-papra-activity-log-document-available
type: fact
---
Every document keeps an activity log of the actions taken on it.

Modeled from REQ-papra-document-activity-log so the claim can be checked for contradictions.
