---
title: 'An invalid date in the published: filter of the template marketplace search is rejected with a message that names the value.'
status: active
semantic_text: 'An invalid date in the published: filter of the template marketplace search is rejected with a message that names the value.'
semantic_clauses:
  - 'An invalid date in the published: filter of the template marketplace search is rejected with a message that names the value'
logic_claims:
  - CLAIM-336F69F183950065
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c0ffd86fedc9b0aa4b1cccb755c1ba2dd0398d14d8fba3dd786824ec395588a1
semantic_inventory:
  - claim_key: CLAIM-336F69F183950065
    claim_text: 'An invalid date in the published: filter of the template marketplace search is rejected with a message that names the value'
    role: normative
    status: modeled
    span:
      start: 0
      end: 123
    subjects:
      - marketplace.template_marketplace_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-150'
  recorded_at: '2026-04-26T17:52:36.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: One mistyped filter should not cost the person the rest of a long query.
id: REQ-marketplace-template-marketplace-search-invalid-date
type: req
---
An invalid date in the published: filter of the template marketplace search is rejected with a message that names the value.

## Context

One mistyped filter should not cost the person the rest of a long query.

## Source

> fix(marketplace): invalid date in published: filter (MKT-150)

Source: Template marketplace decision log - MKT-150
