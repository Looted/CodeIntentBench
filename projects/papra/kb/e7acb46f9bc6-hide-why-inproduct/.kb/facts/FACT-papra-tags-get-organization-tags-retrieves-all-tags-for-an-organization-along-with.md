---
title: tags.get_organization_tags retrieves_all_tags_for_an_organization_along_with = True
status: active
fact_kind: property_value
subject_key: tags.get_organization_tags
property_key: retrieves_all_tags_for_an_organization_along_with
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9249B3E10427D734
claim_text: Retrieves all tags for an organization along with the number of non-deleted documents associated with each tag ordered by creation date descending
text_ref: REQ-papra-tags-retrieves-all-tags-for-organization-along-with
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1833'
  recorded_at: '2026-03-13T16:22:43.000Z'
id: FACT-papra-tags-get-organization-tags-retrieves-all-tags-for-an-organization-along-with
type: fact
---
Retrieves all tags for an organization along with the number of non-deleted documents associated with each tag ordered by creation date descending.

Modeled from REQ-papra-tags-retrieves-all-tags-for-organization-along-with so the claim can be checked for contradictions.
