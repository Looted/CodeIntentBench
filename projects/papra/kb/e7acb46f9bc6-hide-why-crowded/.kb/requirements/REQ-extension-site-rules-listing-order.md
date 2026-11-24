---
title: Site rules in the browser extension are listed in the order they were created.
status: active
semantic_text: Site rules in the browser extension are listed in the order they were created.
semantic_clauses:
  - Site rules in the browser extension are listed in the order they were created
logic_claims:
  - CLAIM-E33A9FDCA6AA97D9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 78da63b8be17306299e3e3ff3365997f56d535e84342485ae2431adf7bbf9b52
semantic_inventory:
  - claim_key: CLAIM-E33A9FDCA6AA97D9
    claim_text: Site rules in the browser extension are listed in the order they were created
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - extension.site_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-152'
  recorded_at: '2025-10-06T13:29:00.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: People looked for a site rule by name and could not find it in a list ordered by creation.
id: REQ-extension-site-rules-listing-order
type: req
---
Site rules in the browser extension are listed in the order they were created.

## Context

People looked for a site rule by name and could not find it in a list ordered by creation.

## Source

> feat(extension): order site rules in the order they were created (EXT-152)

Source: Browser extension decision log - EXT-152
