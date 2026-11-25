---
title: documents.register_insert_activity_log_on_document_tags_changed_handler writes_a_tagged_untagged_activity_log_per_changed = True
status: active
fact_kind: property_value
subject_key: documents.register_insert_activity_log_on_document_tags_changed_handler
property_key: writes_a_tagged_untagged_activity_log_per_changed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-405D47C881814547
claim_text: Writes a tagged/untagged activity log per changed pair in a single bulk insert
text_ref: REQ-papra-documents-writes-tagged-untagged-activity-log-per-changed
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1266'
  recorded_at: '2025-02-03T16:51:45.000Z'
id: FACT-papra-documents-register-insert-activity-log-on-document-tags-changed-handler-writes-a-tagged-untagged-activity-log-per-changed
type: fact
---
Writes a tagged/untagged activity log per changed pair in a single bulk insert.

Modeled from REQ-papra-documents-writes-tagged-untagged-activity-log-per-changed so the claim can be checked for contradictions.
