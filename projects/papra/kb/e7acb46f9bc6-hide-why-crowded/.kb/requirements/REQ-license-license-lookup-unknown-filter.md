---
title: A filter name that the license lookup does not know is rejected with a list of the known filters.
status: active
semantic_text: A filter name that the license lookup does not know is rejected with a list of the known filters.
semantic_clauses:
  - A filter name that the license lookup does not know is rejected with a list of the known filters
logic_claims:
  - CLAIM-B5D6781D2C8FAD59
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f7c052fb333fd34f7bae4edff0c164b95daafaedaebcfedeb43029fd20c3ee74
semantic_inventory:
  - claim_key: CLAIM-B5D6781D2C8FAD59
    claim_text: A filter name that the license lookup does not know is rejected with a list of the known filters
    role: normative
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - license.license_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-130'
  recorded_at: '2025-06-25T15:19:31.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Text with a colon in it, such as a time, is a common thing to search for.
id: REQ-license-license-lookup-unknown-filter
type: req
---
A filter name that the license lookup does not know is rejected with a list of the known filters.

## Context

Text with a colon in it, such as a time, is a common thing to search for.

## Source

> feat(license): unknown search filters (LIC-130)

Source: License server decision log - LIC-130
