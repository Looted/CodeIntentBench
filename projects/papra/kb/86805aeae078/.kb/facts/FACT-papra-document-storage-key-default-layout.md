---
title: document.storage_key default_layout = {{organization.id}}/originals/{{document.id}}
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: default_layout
operator: eq
value_type: string
value_string: '{{organization.id}}/originals/{{document.id}}'
claim_key: CLAIM-8EA6CE6C47DE0081
claim_text: the default storage layout is {{organization.id}}/originals/{{document.id}}
text_ref: REQ-stored-files-are-keyed-by-document-id-not--DCCF2C2E
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #352'
  recorded_at: '2026-11-15T21:50:58.007Z'
id: FACT-papra-document-storage-key-default-layout
type: fact
---
The default storage layout is {{organization.id}}/originals/{{document.id}}.

Modeled from REQ-stored-files-are-keyed-by-document-id-not--DCCF2C2E so the claim can be checked for contradictions.
