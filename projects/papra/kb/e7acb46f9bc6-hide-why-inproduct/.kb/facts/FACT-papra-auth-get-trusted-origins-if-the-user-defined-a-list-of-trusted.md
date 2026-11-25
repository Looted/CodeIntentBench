---
title: auth.get_trusted_origins if_the_user_defined_a_list_of_trusted = True
status: active
fact_kind: property_value
subject_key: auth.get_trusted_origins
property_key: if_the_user_defined_a_list_of_trusted
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-57F7DA276F55D7B9
claim_text: If the user defined a list of trusted origins, it returns the client baseUrl and the trustedOrigins deduplicated
text_ref: REQ-papra-auth-user-defined-list-of-trusted-origins-it
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-491'
  recorded_at: '2025-12-13T15:03:20.000Z'
id: FACT-papra-auth-get-trusted-origins-if-the-user-defined-a-list-of-trusted
type: fact
---
If the user defined a list of trusted origins, it returns the client baseUrl and the trustedOrigins deduplicated.

Modeled from REQ-papra-auth-user-defined-list-of-trusted-origins-it so the claim can be checked for contradictions.
