---
title: At most 300 glossary terms can be created per locale on the documentation site; the limit is configurable and 300 is the default.
status: active
semantic_text: At most 300 glossary terms can be created per locale on the documentation site; the limit is configurable and 300 is the default.
semantic_clauses:
  - At most 300 glossary terms can be created per locale on the documentation site
  - the limit is configurable and 300 is the default
logic_claims:
  - CLAIM-2683DBBE6E902E19
  - CLAIM-33B228D1A7AD97C8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 05885058a670e273423379435ff743adfcd4a3c38e3d639663af88374bdad5b4
semantic_inventory:
  - claim_key: CLAIM-2683DBBE6E902E19
    claim_text: At most 300 glossary terms can be created per locale on the documentation site
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - docs.glossary_terms
  - claim_key: CLAIM-33B228D1A7AD97C8
    claim_text: the limit is configurable and 300 is the default
    role: descriptive
    status: modeled
    span:
      start: 80
      end: 128
    subjects:
      - docs.glossary_terms
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-124'
  recorded_at: '2025-03-27T14:53:47.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Lists of glossary terms are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-docs-glossary-terms-maximum-count
type: req
---
At most 300 glossary terms can be created per locale on the documentation site; the limit is configurable and 300 is the default.

## Context

Lists of glossary terms are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(docs): limit glossary terms per locale (DOC-124)

Source: Documentation site decision log (apps/docs) - DOC-124
