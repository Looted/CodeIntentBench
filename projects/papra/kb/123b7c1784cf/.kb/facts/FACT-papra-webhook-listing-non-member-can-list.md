---
title: webhook.listing non_member_can_list = False
status: active
fact_kind: property_value
subject_key: webhook.listing
property_key: non_member_can_list
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-57EC41FB1FB8860A
claim_text: Only members of an organization can list its tags and webhooks
text_ref: REQ-papra-tag-listing-requires-membership
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #893: Security fix: prevented unauthorized listing to organization'
  recorded_at: '2026-11-25T19:28:37.387Z'
id: FACT-papra-webhook-listing-non-member-can-list
type: fact
---
Only members of an organization can list its tags and webhooks.

Modeled from REQ-papra-tag-listing-requires-membership so the claim can be checked for contradictions.
