---
title: documents.register_trigger_webhooks_on_document_tags_changed_handler fires_a_document_tag_added_and_a_document = True
status: active
fact_kind: property_value
subject_key: documents.register_trigger_webhooks_on_document_tags_changed_handler
property_key: fires_a_document_tag_added_and_a_document
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-10CB33AF460DB77D
claim_text: Fires a document:tag:added and a document:tag:removed webhook for the changed pairs
text_ref: REQ-papra-documents-fires-document-tag-added-and-document-tag
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1275'
  recorded_at: '2025-03-19T12:05:03.000Z'
id: FACT-papra-documents-register-trigger-webhooks-on-document-tags-changed-handler-fires-a-document-tag-added-and-a-document
type: fact
---
Fires a document:tag:added and a document:tag:removed webhook for the changed pairs.

Modeled from REQ-papra-documents-fires-document-tag-added-and-document-tag so the claim can be checked for contradictions.
