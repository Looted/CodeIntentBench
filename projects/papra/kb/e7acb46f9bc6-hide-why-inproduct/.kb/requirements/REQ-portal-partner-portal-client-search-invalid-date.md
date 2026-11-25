---
title: 'An invalid date in the onboarded: filter of the partner portal client search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the onboarded: filter of the partner portal client search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the onboarded: filter of the partner portal client search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-048C1B628662E74D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 78400ca7d588b6cb18e35ac4be97a97bc0df0ffb4331555c0846e1c718716323
semantic_inventory:
  - claim_key: CLAIM-048C1B628662E74D
    claim_text: 'An invalid date in the onboarded: filter of the partner portal client search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - portal.partner_portal_client_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-143'
  recorded_at: '2025-04-11T09:24:00.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: A filter that cannot be understood must not be read as "no restriction".
id: REQ-portal-partner-portal-client-search-invalid-date
type: req
---
An invalid date in the onboarded: filter of the partner portal client search is ignored and the other filters still apply.

## Context

A filter that cannot be understood must not be read as "no restriction".

## Source

> fix(portal): invalid date in onboarded: filter (PRT-143)

Source: Partner portal decision log - PRT-143
