---
title: 'An invalid date in the updated: filter of the help-centre article search is ignored and the other filters still apply.'
status: active
semantic_text: 'An invalid date in the updated: filter of the help-centre article search is ignored and the other filters still apply.'
semantic_clauses:
  - 'An invalid date in the updated: filter of the help-centre article search is ignored and the other filters still apply'
logic_claims:
  - CLAIM-B2498AD0587A9E89
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: be5c5ac440502c4ad0967dadd5d8b2e2c82f9deebbd6a05bf28ff3834567e6c1
semantic_inventory:
  - claim_key: CLAIM-B2498AD0587A9E89
    claim_text: 'An invalid date in the updated: filter of the help-centre article search is ignored and the other filters still apply'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - support.help_centre_article_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-197'
  recorded_at: '2025-08-07T11:11:49.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: One mistyped filter should not cost the person the rest of a long query.
id: REQ-support-help-centre-article-search-invalid-date
type: req
---
An invalid date in the updated: filter of the help-centre article search is ignored and the other filters still apply.

## Context

One mistyped filter should not cost the person the rest of a long query.

## Source

> fix(support): invalid date in updated: filter (SUP-197)

Source: Support portal decision log - SUP-197
