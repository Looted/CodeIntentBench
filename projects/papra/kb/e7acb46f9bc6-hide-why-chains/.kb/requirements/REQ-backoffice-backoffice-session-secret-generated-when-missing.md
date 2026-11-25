---
title: The back office generates a random session signing secret at startup when BACKOFFICE_SESSION_SECRET is not set; it logs a warning that values signed before a…
status: active
semantic_text: The back office generates a random session signing secret at startup when BACKOFFICE_SESSION_SECRET is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The back office generates a random session signing secret at startup when BACKOFFICE_SESSION_SECRET is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-9E2CAEE40F11D732
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3480f73c734ee3796f1875a112c569f604283ec3e31445d70673359fe63c18f8
semantic_inventory:
  - claim_key: CLAIM-9E2CAEE40F11D732
    claim_text: The back office generates a random session signing secret at startup when BACKOFFICE_SESSION_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - backoffice.backoffice_session_secret
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 112
      end: 180
    subjects:
      - backoffice.backoffice_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-340'
  recorded_at: '2025-07-12T10:59:20.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The service keeps nothing signed across restarts, so a fixed session signing secret buys nothing.
id: REQ-backoffice-backoffice-session-secret-generated-when-missing
type: req
---
The back office generates a random session signing secret at startup when BACKOFFICE_SESSION_SECRET is not set; it logs a warning that values signed before a restart stop verifying.

## Context

The service keeps nothing signed across restarts, so a fixed session signing secret buys nothing.

## Source

> feat(backoffice): generate BACKOFFICE_SESSION_SECRET when unset (OPS-340)

Source: Papra Cloud back office handbook - OPS-340
