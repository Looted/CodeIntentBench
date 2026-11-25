---
title: ai.parse_model_id given_a_model_id_in_the_format_adapter = True
status: active
fact_kind: property_value
subject_key: ai.parse_model_id
property_key: given_a_model_id_in_the_format_adapter
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-099AF51EBA9B07F5
claim_text: Given a model id in the format "adapter://modelName", it parses and returns the modelName and adapterId
text_ref: REQ-papra-ai-model-id-in-format-adapter-modelname-it
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-452'
  recorded_at: '2025-07-09T10:05:43.000Z'
id: FACT-papra-ai-parse-model-id-given-a-model-id-in-the-format-adapter
type: fact
---
Given a model id in the format "adapter://modelName", it parses and returns the modelName and adapterId.

Modeled from REQ-papra-ai-model-id-in-format-adapter-modelname-it so the claim can be checked for contradictions.
