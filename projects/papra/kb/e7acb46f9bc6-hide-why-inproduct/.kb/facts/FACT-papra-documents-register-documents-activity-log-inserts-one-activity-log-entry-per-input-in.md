---
title: documents.register_documents_activity_log inserts_one_activity_log_entry_per_input_in = True
status: active
fact_kind: property_value
subject_key: documents.register_documents_activity_log
property_key: inserts_one_activity_log_entry_per_input_in
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F78BDCF4C92B3F0B
claim_text: Inserts one activity log entry per input in a single bulk insert
text_ref: REQ-papra-documents-inserts-one-activity-log-entry-per-input
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-730'
  recorded_at: '2025-11-10T17:27:20.000Z'
id: FACT-papra-documents-register-documents-activity-log-inserts-one-activity-log-entry-per-input-in
type: fact
---
Inserts one activity log entry per input in a single bulk insert.

Modeled from REQ-papra-documents-inserts-one-activity-log-entry-per-input so the claim can be checked for contradictions.
