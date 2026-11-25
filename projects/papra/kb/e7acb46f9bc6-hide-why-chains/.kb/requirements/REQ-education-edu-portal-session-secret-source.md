---
title: The education portal reads EDU_PORTAL_SESSION_SECRET from the secret manager, with the environment as a fallback in development.
status: active
semantic_text: The education portal reads EDU_PORTAL_SESSION_SECRET from the secret manager, with the environment as a fallback in development.
semantic_clauses:
  - The education portal reads EDU_PORTAL_SESSION_SECRET from the secret manager, with the environment as a fallback in development
logic_claims:
  - CLAIM-3E5FE115417149EC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 76103ee0c23c1cecf4e9b2ff95c96191941d4353071b51b4ebe68c80e0297028
semantic_inventory:
  - claim_key: CLAIM-3E5FE115417149EC
    claim_text: The education portal reads EDU_PORTAL_SESSION_SECRET from the secret manager, with the environment as a fallback in development
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 127
    subjects:
      - education.edu_portal_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-176'
  recorded_at: '2025-09-27T13:47:35.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
id: REQ-education-edu-portal-session-secret-source
type: req
---
The education portal reads EDU_PORTAL_SESSION_SECRET from the secret manager, with the environment as a fallback in development.

## Context

Reason not stated.

## Source

> feat(education): where EDU_PORTAL_SESSION_SECRET is read from (EDU-176)

Source: Education programme portal notes - EDU-176
