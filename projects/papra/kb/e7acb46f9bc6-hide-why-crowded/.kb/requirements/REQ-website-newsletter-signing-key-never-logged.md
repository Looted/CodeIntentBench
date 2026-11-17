---
title: The newsletter service never writes NEWSLETTER_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The newsletter service never writes NEWSLETTER_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The newsletter service never writes NEWSLETTER_SIGNING_KEY or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-6CA62134F37B8CE4
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b506190e23f2f23e1e50b0cd0f35b3fa1d95118d0ed5cecca63c82f767f702a8
semantic_inventory:
  - claim_key: CLAIM-6CA62134F37B8CE4
    claim_text: The newsletter service never writes NEWSLETTER_SIGNING_KEY or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 97
    subjects:
      - website.newsletter_signing_key
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 99
      end: 139
    subjects:
      - website.newsletter_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-302'
  recorded_at: '2026-05-18T11:17:39.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A debug log line had printed the configuration, the secret included.
id: REQ-website-newsletter-signing-key-never-logged
type: req
---
The newsletter service never writes NEWSLETTER_SIGNING_KEY or a value derived from it to its logs; startup logs show only whether it is set.

## Context

A debug log line had printed the configuration, the secret included.

## Source

> fix(website): keep NEWSLETTER_SIGNING_KEY out of logs (WEB-302)

Source: Marketing website decision log (apps/website) - WEB-302
