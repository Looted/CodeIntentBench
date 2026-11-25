---
title: organizations.get_or_create_organization_customer_id an_organization_that_does_not_have_a_customer = True
status: active
fact_kind: property_value
subject_key: organizations.get_or_create_organization_customer_id
property_key: an_organization_that_does_not_have_a_customer
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-B7B330976D38884B
claim_text: An organization that does not have a customer id, will have one created and saved
text_ref: REQ-papra-organizations-organization-that-does-not-have-customer-id
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1545'
  recorded_at: '2025-02-05T17:53:41.000Z'
id: FACT-papra-organizations-get-or-create-organization-customer-id-an-organization-that-does-not-have-a-customer
type: fact
---
An organization that does not have a customer id, will have one created and saved.

Modeled from REQ-papra-organizations-organization-that-does-not-have-customer-id so the claim can be checked for contradictions.
