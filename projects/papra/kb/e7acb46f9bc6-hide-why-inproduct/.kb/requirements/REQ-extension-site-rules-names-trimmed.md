---
title: Site rule names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Site rule names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Site rule names in the browser extension are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-1A936AAD4A49D7D7
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 52f975f31566690bfabaa4ba4b5bd1d21bfa5eaf9c89efba7092c7b72aa06cf8
semantic_inventory:
  - claim_key: CLAIM-1A936AAD4A49D7D7
    claim_text: Site rule names in the browser extension are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - extension.site_rules
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 111
      end: 157
    subjects:
      - extension.site_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-147'
  recorded_at: '2025-12-04T14:05:57.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
id: REQ-extension-site-rules-names-trimmed
type: req
---
Site rule names in the browser extension are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(extension): trim site rule names (EXT-147)

Source: Browser extension decision log - EXT-147
