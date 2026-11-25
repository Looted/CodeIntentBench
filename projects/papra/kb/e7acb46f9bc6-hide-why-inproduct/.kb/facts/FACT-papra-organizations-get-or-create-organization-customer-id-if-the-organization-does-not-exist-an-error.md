---
title: organizations.get_or_create_organization_customer_id if_the_organization_does_not_exist_an_error = True
status: active
fact_kind: property_value
subject_key: organizations.get_or_create_organization_customer_id
property_key: if_the_organization_does_not_exist_an_error
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6552BE41E5837EA
claim_text: If the organization does not exist, an error is thrown
text_ref: REQ-papra-organizations-organization-does-not-exist-error-is-thrown
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1574'
  recorded_at: '2025-04-27T10:13:06.000Z'
id: FACT-papra-organizations-get-or-create-organization-customer-id-if-the-organization-does-not-exist-an-error
type: fact
---
If the organization does not exist, an error is thrown.

Modeled from REQ-papra-organizations-organization-does-not-exist-error-is-thrown so the claim can be checked for contradictions.
