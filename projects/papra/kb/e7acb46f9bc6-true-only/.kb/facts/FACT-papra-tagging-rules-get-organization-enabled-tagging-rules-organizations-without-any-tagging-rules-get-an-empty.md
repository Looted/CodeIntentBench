---
title: tagging_rules.get_organization_enabled_tagging_rules organizations_without_any_tagging_rules_get_an_empty = True
status: active
fact_kind: property_value
subject_key: tagging_rules.get_organization_enabled_tagging_rules
property_key: organizations_without_any_tagging_rules_get_an_empty
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5C494F14A6171FF7
claim_text: Organizations without any tagging rules get an empty result
text_ref: REQ-papra-tagging-rules-organizations-without-any-tagging-rules-get-empty
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1795'
  recorded_at: '2025-11-11T08:44:24.000Z'
id: FACT-papra-tagging-rules-get-organization-enabled-tagging-rules-organizations-without-any-tagging-rules-get-an-empty
type: fact
---
Organizations without any tagging rules get an empty result.

Modeled from REQ-papra-tagging-rules-organizations-without-any-tagging-rules-get-empty so the claim can be checked for contradictions.
