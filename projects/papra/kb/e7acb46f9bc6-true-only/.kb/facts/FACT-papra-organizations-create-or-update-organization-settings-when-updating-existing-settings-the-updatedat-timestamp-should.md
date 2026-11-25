---
title: organizations.create_or_update_organization_settings when_updating_existing_settings_the_updatedat_timestamp_should = True
status: active
fact_kind: property_value
subject_key: organizations.create_or_update_organization_settings
property_key: when_updating_existing_settings_the_updatedat_timestamp_should
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8ECAFB489A9F190D
claim_text: When updating existing settings, the updatedAt timestamp should be updated
text_ref: REQ-papra-organizations-updating-existing-settings-updatedat-timestamp-should-be
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1462'
  recorded_at: '2026-04-26T10:14:13.000Z'
id: FACT-papra-organizations-create-or-update-organization-settings-when-updating-existing-settings-the-updatedat-timestamp-should
type: fact
---
When updating existing settings, the updatedAt timestamp should be updated.

Modeled from REQ-papra-organizations-updating-existing-settings-updatedat-timestamp-should-be so the claim can be checked for contradictions.
