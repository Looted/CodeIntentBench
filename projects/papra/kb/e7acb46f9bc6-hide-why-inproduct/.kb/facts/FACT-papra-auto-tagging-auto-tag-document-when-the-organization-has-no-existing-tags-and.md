---
title: auto_tagging.auto_tag_document when_the_organization_has_no_existing_tags_and = True
status: active
fact_kind: property_value
subject_key: auto_tagging.auto_tag_document
property_key: when_the_organization_has_no_existing_tags_and
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5AB0B493C6F6F36D
claim_text: When the organization has no existing tags and cannot create new ones, the document is not tagged and the AI is not called
text_ref: REQ-papra-auto-tagging-organization-has-no-existing-tags-and-cannot
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-578'
  recorded_at: '2025-10-04T08:10:56.000Z'
id: FACT-papra-auto-tagging-auto-tag-document-when-the-organization-has-no-existing-tags-and
type: fact
---
When the organization has no existing tags and cannot create new ones, the document is not tagged and the AI is not called.

Modeled from REQ-papra-auto-tagging-organization-has-no-existing-tags-and-cannot so the claim can be checked for contradictions.
