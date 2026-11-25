---
title: document.upload buffers_whole_file = False
status: active
fact_kind: property_value
subject_key: document.upload
property_key: buffers_whole_file
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3FFFC52B14DB6C55
claim_text: size limits are enforced during the stream, never after buffering the whole file
text_ref: REQ-file-uploads-are-handled-as-streams-end-to-F1A1D5B6
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #472'
  recorded_at: '2026-11-15T21:45:29.389Z'
id: FACT-papra-document-upload-buffers-whole-file
type: fact
---
Size limits are enforced during the stream, never after buffering the whole file.

Modeled from REQ-file-uploads-are-handled-as-streams-end-to-F1A1D5B6 so the claim can be checked for contradictions.
