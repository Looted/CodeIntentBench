---
title: The support portal generates a random single sign-on secret at startup when SUPPORT_SSO_SECRET is not set; it logs a warning that values signed before a rest…
status: active
semantic_text: The support portal generates a random single sign-on secret at startup when SUPPORT_SSO_SECRET is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The support portal generates a random single sign-on secret at startup when SUPPORT_SSO_SECRET is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-F9D0B70080C9C7D9
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9127d614a65fd9ea8d92ad90ca4f9c2f894fbfc0183ac3b56acf12a969d1e471
semantic_inventory:
  - claim_key: CLAIM-F9D0B70080C9C7D9
    claim_text: The support portal generates a random single sign-on secret at startup when SUPPORT_SSO_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 105
    subjects:
      - support.support_sso_secret
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 107
      end: 175
    subjects:
      - support.support_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-228'
  recorded_at: '2026-02-02T11:23:56.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: The service keeps nothing signed across restarts, so a fixed single sign-on secret buys nothing.
id: REQ-support-support-sso-secret-generated-when-missing
type: req
---
The support portal generates a random single sign-on secret at startup when SUPPORT_SSO_SECRET is not set; it logs a warning that values signed before a restart stop verifying.

## Context

The service keeps nothing signed across restarts, so a fixed single sign-on secret buys nothing.

## Source

> feat(support): generate SUPPORT_SSO_SECRET when unset (SUP-228)

Source: Support portal decision log - SUP-228
