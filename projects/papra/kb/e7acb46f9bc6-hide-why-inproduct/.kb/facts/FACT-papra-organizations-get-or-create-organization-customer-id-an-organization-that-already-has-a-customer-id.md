---
title: organizations.get_or_create_organization_customer_id an_organization_that_already_has_a_customer_id = True
status: active
fact_kind: property_value
subject_key: organizations.get_or_create_organization_customer_id
property_key: an_organization_that_already_has_a_customer_id
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-49B4DF7D6134F169
claim_text: An organization that already has a customer id, will not have a new customer created
text_ref: REQ-papra-organizations-organization-that-already-has-customer-id-will
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1544'
  recorded_at: '2025-02-05T10:58:02.000Z'
id: FACT-papra-organizations-get-or-create-organization-customer-id-an-organization-that-already-has-a-customer-id
type: fact
---
An organization that already has a customer id, will not have a new customer created.

Modeled from REQ-papra-organizations-organization-that-already-has-customer-id-will so the claim can be checked for contradictions.
