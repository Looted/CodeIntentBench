---
title: The education portal never writes EDU_PORTAL_SESSION_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The education portal never writes EDU_PORTAL_SESSION_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The education portal never writes EDU_PORTAL_SESSION_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-A3D60DBDD6138EA6
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0dfee90212fd8765f2ba9f6f7a4ff55d8eb8433b6fde4ba56496bd77aaee5ea6
semantic_inventory:
  - claim_key: CLAIM-A3D60DBDD6138EA6
    claim_text: The education portal never writes EDU_PORTAL_SESSION_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - education.edu_portal_session_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 100
      end: 140
    subjects:
      - education.edu_portal_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-179'
  recorded_at: '2025-08-21T08:39:13.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-education-edu-portal-session-secret-never-logged
type: req
---
The education portal never writes EDU_PORTAL_SESSION_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(education): keep EDU_PORTAL_SESSION_SECRET out of logs (EDU-179)

Source: Education programme portal notes - EDU-179
