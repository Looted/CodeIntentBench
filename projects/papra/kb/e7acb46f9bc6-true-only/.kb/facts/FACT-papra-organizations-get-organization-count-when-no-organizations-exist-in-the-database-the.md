---
title: organizations.get_organization_count when_no_organizations_exist_in_the_database_the = True
status: active
fact_kind: property_value
subject_key: organizations.get_organization_count
property_key: when_no_organizations_exist_in_the_database_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A27D9C75A611DB25
claim_text: When no organizations exist in the database, the count is zero
text_ref: REQ-papra-organizations-no-organizations-exist-in-database-count-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1497'
  recorded_at: '2025-05-20T12:04:18.000Z'
id: FACT-papra-organizations-get-organization-count-when-no-organizations-exist-in-the-database-the
type: fact
---
When no organizations exist in the database, the count is zero.

Modeled from REQ-papra-organizations-no-organizations-exist-in-database-count-is so the claim can be checked for contradictions.
