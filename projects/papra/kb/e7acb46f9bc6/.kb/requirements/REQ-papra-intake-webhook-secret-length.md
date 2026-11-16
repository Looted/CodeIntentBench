---
title: The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters; a default value, please-change-me, stays in place and i…
status: closed
semantic_text: The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters; a default value, please-change-me, stays in place and itself satisfies the rule.
semantic_clauses:
  - The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters
  - a default value, please-change-me, stays in place and itself satisfies the rule
logic_claims:
  - CLAIM-53856D3A9238D02B
  - CLAIM-E5FACB551212D89B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 347f0ba2b834e7e2a2f5e2c8b9757023be188de7dc49bd28574dd6573bb52040
semantic_inventory:
  - claim_key: CLAIM-53856D3A9238D02B
    claim_text: The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters
    role: normative
    status: modeled
    span:
      start: 0
      end: 100
    subjects:
      - intake_email.webhook_secret
  - claim_key: CLAIM-E5FACB551212D89B
    claim_text: a default value, please-change-me, stays in place and itself satisfies the rule
    role: descriptive
    status: modeled
    span:
      start: 102
      end: 181
    subjects:
      - intake_email.webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #892'
  recorded_at: '2026-11-16T10:17:32.615Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:intake_emails
rationale: 'The changeset of PR #892 (2026-02-14): the length is enforced "to match the OwlRelay API validation requirements". Why a default value was kept: reason not stated.'
id: REQ-papra-intake-webhook-secret-length
type: req
---
The intake email webhook secret (INTAKE_EMAILS_WEBHOOK_SECRET) must be between 16 and 128 characters; a default value, please-change-me, stays in place and itself satisfies the rule.

## Context

The changeset of PR #892 (2026-02-14): the length is enforced "to match the OwlRelay API validation requirements". Why a default value was kept: reason not stated.

## Source

> Enforced the length of the intake email webhook secret (`INTAKE_EMAILS_WEBHOOK_SECRET`) to be between 16 and 128 characters to match the OwlRelay API validation requirements.
> default: 'please-change-me',

Source: papra-hq/papra merged pull requests - #892
