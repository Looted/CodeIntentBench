---
title: When the database is healthy, the /api/health returns 200.
status: active
semantic_text: When the database is healthy, the /api/health returns 200.
semantic_clauses:
  - When the database is healthy, the /api/health returns 200
logic_claims:
  - CLAIM-AF58769ACAB04F08
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ea4733efb5642c21a00f35c0f041ea44fc645b1310d3a79bf41ee09fdf4e0e05
semantic_inventory:
  - claim_key: CLAIM-AF58769ACAB04F08
    claim_text: When the database is healthy, the /api/health returns 200
    role: condition
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - health_check.health_check_routes_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-545'
  recorded_at: '2025-06-15T14:09:23.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:health-check
id: REQ-papra-health-check-database-is-healthy-api-health-returns-200
type: req
---
When the database is healthy, the /api/health returns 200.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/app/health-check/e2e/health-check.e2e.test.ts (health check routes e2e > health check > the /api/health is a publicly accessible route that provides health information about the server).

## Source

Source: Papra server behaviour notes - SRV-545
