---
title: 'The created: filter of the web client''s demo-mode search accepts ISO dates and the words today, yesterday and last-week.'
status: active
semantic_text: 'The created: filter of the web client''s demo-mode search accepts ISO dates and the words today, yesterday and last-week.'
semantic_clauses:
  - 'The created: filter of the web client''s demo-mode search accepts ISO dates and the words today, yesterday and last-week'
logic_claims:
  - CLAIM-871F8EB7EC767DA9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9f258b3ac82674d744d27c7775a9914c27c4bb14941d1a85ceaf045925971b01
semantic_inventory:
  - claim_key: CLAIM-871F8EB7EC767DA9
    claim_text: 'The created: filter of the web client''s demo-mode search accepts ISO dates and the words today, yesterday and last-week'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 119
    subjects:
      - client.web_client_demo_mode_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-190'
  recorded_at: '2026-06-06T12:15:01.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
rationale: A date like 03/04 means two different days to two halves of the team.
id: REQ-client-web-client-demo-mode-search-date-format
type: req
---
The created: filter of the web client's demo-mode search accepts ISO dates and the words today, yesterday and last-week.

## Context

A date like 03/04 means two different days to two halves of the team.

## Source

> feat(client): date formats of the created: filter (WCL-190)

Source: Web client decision log (apps/papra-client) - WCL-190
