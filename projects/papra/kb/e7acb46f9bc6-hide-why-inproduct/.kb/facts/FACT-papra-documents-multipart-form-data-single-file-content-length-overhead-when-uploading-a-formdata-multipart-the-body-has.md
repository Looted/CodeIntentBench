---
title: documents.multipart_form_data_single_file_content_length_overhead when_uploading_a_formdata_multipart_the_body_has = True
status: active
fact_kind: property_value
subject_key: documents.multipart_form_data_single_file_content_length_overhead
property_key: when_uploading_a_formdata_multipart_the_body_has
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AF371EB0136982D8
claim_text: When uploading a formdata multipart, the body has boundaries and other metadata, so the content length is greater than the file size
text_ref: REQ-papra-documents-uploading-formdata-multipart-body-has-boundaries-and
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1096'
  recorded_at: '2026-01-04T14:17:00.000Z'
id: FACT-papra-documents-multipart-form-data-single-file-content-length-overhead-when-uploading-a-formdata-multipart-the-body-has
type: fact
---
When uploading a formdata multipart, the body has boundaries and other metadata, so the content length is greater than the file size.

Modeled from REQ-papra-documents-uploading-formdata-multipart-body-has-boundaries-and so the claim can be checked for contradictions.
