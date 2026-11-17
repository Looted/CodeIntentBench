---
title: When an allowed-domain list is configured for the cloud waiting list, only addresses whose domain is exactly on the list are accepted; matching ignores lette…
status: active
semantic_text: When an allowed-domain list is configured for the cloud waiting list, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for the cloud waiting list, only addresses whose domain is exactly on the list are accepted
  - matching ignores letter case
logic_claims:
  - CLAIM-BCDE49FC996D9F42
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 31338e513cc1e9b4aaa273714bfe879f2721a1ab2b717e22bc9488d62ea61cc7
semantic_inventory:
  - claim_key: CLAIM-BCDE49FC996D9F42
    claim_text: When an allowed-domain list is configured for the cloud waiting list, only addresses whose domain is exactly on the list are accepted
    role: condition
    status: modeled
    span:
      start: 0
      end: 133
    subjects:
      - website.cloud_waiting_list
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 135
      end: 163
    subjects:
      - website.cloud_waiting_list
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-353'
  recorded_at: '2025-02-13T14:40:02.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A listed domain says nothing about who controls its subdomains.
id: REQ-website-cloud-waiting-list-allowed-domains
type: req
---
When an allowed-domain list is configured for the cloud waiting list, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.

## Context

A listed domain says nothing about who controls its subdomains.

## Source

> feat(website): allowed email domains for cloud waiting list (WEB-353)

Source: Marketing website decision log (apps/website) - WEB-353
