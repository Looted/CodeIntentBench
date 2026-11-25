---
title: tags.get_organization_tags when_a_tag_is_assigned_to_only_deleted = True
status: active
fact_kind: property_value
subject_key: tags.get_organization_tags
property_key: when_a_tag_is_assigned_to_only_deleted
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2CC740693F56C622
claim_text: When a tag is assigned to only deleted documents, it is retrieved with 0 documents count
text_ref: REQ-papra-tags-tag-is-assigned-to-only-deleted-documents
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1841'
  recorded_at: '2026-09-04T14:23:55.000Z'
id: FACT-papra-tags-get-organization-tags-when-a-tag-is-assigned-to-only-deleted
type: fact
---
When a tag is assigned to only deleted documents, it is retrieved with 0 documents count.

Modeled from REQ-papra-tags-tag-is-assigned-to-only-deleted-documents so the claim can be checked for contradictions.
