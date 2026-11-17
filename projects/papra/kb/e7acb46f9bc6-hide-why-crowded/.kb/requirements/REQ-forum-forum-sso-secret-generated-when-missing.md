---
title: The forum sign-in bridge generates a random single sign-on secret at startup when FORUM_SSO_SECRET is not set; it logs a warning that values signed before a…
status: active
semantic_text: The forum sign-in bridge generates a random single sign-on secret at startup when FORUM_SSO_SECRET is not set; it logs a warning that values signed before a restart stop verifying.
semantic_clauses:
  - The forum sign-in bridge generates a random single sign-on secret at startup when FORUM_SSO_SECRET is not set
  - it logs a warning that values signed before a restart stop verifying
logic_claims:
  - CLAIM-BA9B346D6336C550
  - CLAIM-74CA22345F9A5AC3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6ce0e456078971beaf4ffb1ea590afc3751af0b20aa8043e34a02fdf9db32ddc
semantic_inventory:
  - claim_key: CLAIM-BA9B346D6336C550
    claim_text: The forum sign-in bridge generates a random single sign-on secret at startup when FORUM_SSO_SECRET is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - forum.forum_sso_secret
  - claim_key: CLAIM-74CA22345F9A5AC3
    claim_text: it logs a warning that values signed before a restart stop verifying
    role: normative
    status: modeled
    span:
      start: 111
      end: 179
    subjects:
      - forum.forum_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-225'
  recorded_at: '2025-04-07T12:13:36.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: The service keeps nothing signed across restarts, so a fixed single sign-on secret buys nothing.
id: REQ-forum-forum-sso-secret-generated-when-missing
type: req
---
The forum sign-in bridge generates a random single sign-on secret at startup when FORUM_SSO_SECRET is not set; it logs a warning that values signed before a restart stop verifying.

## Context

The service keeps nothing signed across restarts, so a fixed single sign-on secret buys nothing.

## Source

> feat(forum): generate FORUM_SSO_SECRET when unset (FRM-225)

Source: Community forum operations notes - FRM-225
