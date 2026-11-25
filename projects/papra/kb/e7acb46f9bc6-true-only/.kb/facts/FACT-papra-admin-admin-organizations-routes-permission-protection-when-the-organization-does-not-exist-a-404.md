---
title: admin.admin_organizations_routes_permission_protection when_the_organization_does_not_exist_a_404 = True
status: active
fact_kind: property_value
subject_key: admin.admin_organizations_routes_permission_protection
property_key: when_the_organization_does_not_exist_a_404
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-21BAED7701251820
claim_text: When the organization does not exist, a 404 error is returned
text_ref: REQ-papra-admin-organization-does-not-exist-404-error-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-410'
  recorded_at: '2025-12-01T14:23:26.000Z'
id: FACT-papra-admin-admin-organizations-routes-permission-protection-when-the-organization-does-not-exist-a-404
type: fact
---
When the organization does not exist, a 404 error is returned.

Modeled from REQ-papra-admin-organization-does-not-exist-404-error-is so the claim can be checked for contradictions.
