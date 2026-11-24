---
title: An organization can own at most 10 support contacts in the support portal; the limit is configured per deployment and 10 is the default.
status: active
semantic_text: An organization can own at most 10 support contacts in the support portal; the limit is configured per deployment and 10 is the default.
semantic_clauses:
  - An organization can own at most 10 support contacts in the support portal
  - the limit is configured per deployment and 10 is the default
logic_claims:
  - CLAIM-089E22E796CFA478
  - CLAIM-F9F100316FFC81D2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 67df30361712a1a19b8244e3272576c83c833001b4ceeeea263fd500d602d62d
semantic_inventory:
  - claim_key: CLAIM-089E22E796CFA478
    claim_text: An organization can own at most 10 support contacts in the support portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - support.support_contacts
  - claim_key: CLAIM-F9F100316FFC81D2
    claim_text: the limit is configured per deployment and 10 is the default
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 135
    subjects:
      - support.support_contacts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-293'
  recorded_at: '2026-08-17T09:57:01.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: A handful of accounts had created thousands of support contacts and slowed the listing for everyone.
id: REQ-support-support-contacts-maximum-count
type: req
---
An organization can own at most 10 support contacts in the support portal; the limit is configured per deployment and 10 is the default.

## Context

A handful of accounts had created thousands of support contacts and slowed the listing for everyone.

## Source

> feat(support): limit support contacts per organization (SUP-293)

Source: Support portal decision log - SUP-293
