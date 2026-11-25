---
title: 'An invalid date in the created: filter of the web client''s demo-mode search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the created: filter of the web client''s demo-mode search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the created: filter of the web client''s demo-mode search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-50902CD2C1F1EA7F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 088d3790e4e1b3be78766557be66095dc393bd5b286f5f14473fa10090d86163
semantic_inventory:
  - claim_key: CLAIM-50902CD2C1F1EA7F
    claim_text: 'An invalid date in the created: filter of the web client''s demo-mode search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - client.web_client_demo_mode_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-168'
  recorded_at: '2025-12-10T16:49:29.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: One mistyped filter should not cost the person the rest of a long query.
id: REQ-client-web-client-demo-mode-search-invalid-date
type: req
---
An invalid date in the created: filter of the web client's demo-mode search is ignored and the other filters still apply.

## Context

One mistyped filter should not cost the person the rest of a long query.

## Source

> fix(client): invalid date in created: filter (WCL-168)

Source: Web client decision log (apps/papra-client) - WCL-168
