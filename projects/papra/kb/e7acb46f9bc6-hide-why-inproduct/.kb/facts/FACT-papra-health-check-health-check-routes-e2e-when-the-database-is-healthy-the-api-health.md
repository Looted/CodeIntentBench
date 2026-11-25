---
title: health_check.health_check_routes_e2e when_the_database_is_healthy_the_api_health = True
status: active
fact_kind: property_value
subject_key: health_check.health_check_routes_e2e
property_key: when_the_database_is_healthy_the_api_health
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AF58769ACAB04F08
claim_text: When the database is healthy, the /api/health returns 200
text_ref: REQ-papra-health-check-database-is-healthy-api-health-returns-200
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-545'
  recorded_at: '2025-06-15T14:09:23.000Z'
id: FACT-papra-health-check-health-check-routes-e2e-when-the-database-is-healthy-the-api-health
type: fact
---
When the database is healthy, the /api/health returns 200.

Modeled from REQ-papra-health-check-database-is-healthy-api-health-returns-200 so the claim can be checked for contradictions.
