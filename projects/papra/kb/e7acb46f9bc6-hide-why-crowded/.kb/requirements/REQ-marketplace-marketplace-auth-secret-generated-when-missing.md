---
title: The template marketplace generates a random session signing secret at startup when MARKETPLACE_AUTH_SECRET is not set; it logs a warning that values signed b…
status: active
semantic_text: The template marketplace generates a random session signing secret at startup when MARKETPLACE_AUTH_SECRET is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The template marketplace generates a random session signing secret at startup when MARKETPLACE_AUTH_SECRET is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-3D953CE94AB42438
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 86acf7b53f85b6a266c8378124295c6a993019799005074478354ac927201b9f
semantic_inventory:
  - claim_key: CLAIM-3D953CE94AB42438
    claim_text: The template marketplace generates a random session signing secret at startup when MARKETPLACE_AUTH_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - marketplace.marketplace_auth_secret
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 119
      end: 187
    subjects:
      - marketplace.marketplace_auth_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-188'
  recorded_at: '2025-12-08T10:32:23.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
id: REQ-marketplace-marketplace-auth-secret-generated-when-missing
type: req
---
The template marketplace generates a random session signing secret at startup when MARKETPLACE_AUTH_SECRET is not set; it logs a warning that values signed before a restart stop verifying.

## Context

Reason not stated.

## Source

> feat(marketplace): generate MARKETPLACE_AUTH_SECRET when unset (MKT-188)

Source: Template marketplace decision log - MKT-188
