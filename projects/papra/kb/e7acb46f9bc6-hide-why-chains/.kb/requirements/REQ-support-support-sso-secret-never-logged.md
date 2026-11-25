---
title: The support portal never writes SUPPORT_SSO_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The support portal never writes SUPPORT_SSO_SECRET or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The support portal never writes SUPPORT_SSO_SECRET or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-0532B43CACEF630D
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f073957b04fc2231a2fd9a8c8318e5481e9b35c12fe17fd5e9fd6e41dbfaa3e4
semantic_inventory:
  - claim_key: CLAIM-0532B43CACEF630D
    claim_text: The support portal never writes SUPPORT_SSO_SECRET or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - support.support_sso_secret
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 91
      end: 131
    subjects:
      - support.support_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-261'
  recorded_at: '2025-11-24T17:22:05.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-support-support-sso-secret-never-logged
type: req
---
The support portal never writes SUPPORT_SSO_SECRET or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(support): keep SUPPORT_SSO_SECRET out of logs (SUP-261)

Source: Support portal decision log - SUP-261
