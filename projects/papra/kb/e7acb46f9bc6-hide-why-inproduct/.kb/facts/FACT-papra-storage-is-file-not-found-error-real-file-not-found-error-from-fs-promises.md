---
title: storage.is_file_not_found_error real_file_not_found_error_from_fs_promises = True
status: active
fact_kind: property_value
subject_key: storage.is_file_not_found_error
property_key: real_file_not_found_error_from_fs_promises
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5C774F627FCBB50D
claim_text: Real file not found error from fs.promises catched using safely is detected as file not found error
text_ref: REQ-papra-storage-real-file-not-found-error-from-fs
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1709'
  recorded_at: '2026-04-08T13:17:49.000Z'
id: FACT-papra-storage-is-file-not-found-error-real-file-not-found-error-from-fs-promises
type: fact
---
Real file not found error from fs.promises catched using safely is detected as file not found error.

Modeled from REQ-papra-storage-real-file-not-found-error-from-fs so the claim can be checked for contradictions.
