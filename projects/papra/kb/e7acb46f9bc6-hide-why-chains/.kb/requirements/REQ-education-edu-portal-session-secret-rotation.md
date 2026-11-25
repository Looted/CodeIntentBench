---
title: EDU_PORTAL_SESSION_SECRET is rotated every 90 days; the previous value stays valid for 24 hours after a rotation.
status: active
semantic_text: EDU_PORTAL_SESSION_SECRET is rotated every 90 days; the previous value stays valid for 24 hours after a rotation.
semantic_clauses:
  - EDU_PORTAL_SESSION_SECRET is rotated every 90 days
  - the previous value stays valid for 24 hours after a rotation
logic_claims:
  - CLAIM-8F37055AA2EB78FD
  - CLAIM-A45280A30BC5D577
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c821110e79de30493b130aaab7932f6b8f9a701f487b89ace68756266934713e
semantic_inventory:
  - claim_key: CLAIM-8F37055AA2EB78FD
    claim_text: EDU_PORTAL_SESSION_SECRET is rotated every 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - education.edu_portal_session_secret
  - claim_key: CLAIM-A45280A30BC5D577
    claim_text: the previous value stays valid for 24 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 52
      end: 112
    subjects:
      - education.edu_portal_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-174'
  recorded_at: '2025-12-22T16:39:06.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: Without an overlap, a rotation of the session signing secret broke requests already on their way.
id: REQ-education-edu-portal-session-secret-rotation
type: req
---
EDU_PORTAL_SESSION_SECRET is rotated every 90 days; the previous value stays valid for 24 hours after a rotation.

## Context

Without an overlap, a rotation of the session signing secret broke requests already on their way.

## Source

> chore(education): rotate EDU_PORTAL_SESSION_SECRET every 90 days (EDU-174)

Source: Education programme portal notes - EDU-174
