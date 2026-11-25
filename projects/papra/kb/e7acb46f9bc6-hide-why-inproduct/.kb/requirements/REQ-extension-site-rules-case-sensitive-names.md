---
title: Site rules in the browser extension are compared exactly as typed; two site rules that differ only by letter case are distinct.
status: active
semantic_text: Site rules in the browser extension are compared exactly as typed; two site rules that differ only by letter case are distinct.
semantic_clauses:
  - Site rules in the browser extension are compared exactly as typed
  - two site rules that differ only by letter case are distinct
logic_claims:
  - CLAIM-439DF72838B396DB
  - CLAIM-4EC211E97EDD1AAA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e56d5dac96e10102a64f5f33793fb57788ed41e9bd58a79bf00e30bedade916f
semantic_inventory:
  - claim_key: CLAIM-439DF72838B396DB
    claim_text: Site rules in the browser extension are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - extension.site_rules
  - claim_key: CLAIM-4EC211E97EDD1AAA
    claim_text: two site rules that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 126
    subjects:
      - extension.site_rules
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-134'
  recorded_at: '2026-05-12T10:15:15.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: Existing data already held site rules that differ only by case, and merging them would have lost information.
id: REQ-extension-site-rules-case-sensitive-names
type: req
---
Site rules in the browser extension are compared exactly as typed; two site rules that differ only by letter case are distinct.

## Context

Existing data already held site rules that differ only by case, and merging them would have lost information.

## Source

> docs(extension): site rule names are case-sensitive (EXT-134)

Source: Browser extension decision log - EXT-134
