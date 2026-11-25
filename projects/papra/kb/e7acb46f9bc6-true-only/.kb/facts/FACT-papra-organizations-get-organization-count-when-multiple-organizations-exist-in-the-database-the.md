---
title: organizations.get_organization_count when_multiple_organizations_exist_in_the_database_the = True
status: active
fact_kind: property_value
subject_key: organizations.get_organization_count
property_key: when_multiple_organizations_exist_in_the_database_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9F2691544F4DF449
claim_text: When multiple organizations exist in the database, the count reflects the total number of organizations
text_ref: REQ-papra-organizations-multiple-organizations-exist-in-database-count-reflects
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1492'
  recorded_at: '2026-03-15T13:26:42.000Z'
id: FACT-papra-organizations-get-organization-count-when-multiple-organizations-exist-in-the-database-the
type: fact
---
When multiple organizations exist in the database, the count reflects the total number of organizations.

Modeled from REQ-papra-organizations-multiple-organizations-exist-in-database-count-reflects so the claim can be checked for contradictions.
