---
title: The back office refuses the example value of BACKOFFICE_SESSION_SECRET from its documentation, in every environment.
status: active
semantic_text: The back office refuses the example value of BACKOFFICE_SESSION_SECRET from its documentation, in every environment.
semantic_clauses:
  - The back office refuses the example value of BACKOFFICE_SESSION_SECRET from its documentation, in every environment
logic_claims:
  - CLAIM-B2556517DC97E852
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: da9a7d984968c2ac5bc1967e7a259525f34892a4d80d309803445c32d5da404e
semantic_inventory:
  - claim_key: CLAIM-B2556517DC97E852
    claim_text: The back office refuses the example value of BACKOFFICE_SESSION_SECRET from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - backoffice.backoffice_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-347'
  recorded_at: '2025-03-17T08:18:02.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The example value was found in use on public deployments.
id: REQ-backoffice-backoffice-session-secret-example-value-refused
type: req
---
The back office refuses the example value of BACKOFFICE_SESSION_SECRET from its documentation, in every environment.

## Context

The example value was found in use on public deployments.

## Source

> feat(backoffice): refuse the documented example BACKOFFICE_SESSION_SECRET (OPS-347)

Source: Papra Cloud back office handbook - OPS-347
