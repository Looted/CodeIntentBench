---
title: Per-document expiry dates are not a separate feature; custom properties are the intended way to record such dates.
status: active
semantic_text: Per-document expiry dates are not a separate feature; custom properties are the intended way to record such dates.
logic_claims:
  - CLAIM-4C32275ED95EFD59
  - CLAIM-F017ED49D3E3083E
semantic_clauses:
  - Per-document expiry dates are not a separate feature
  - custom properties are the intended way to record such dates
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1aac1f26a9aa7884d160021e49d954d96d7358fade5a0f45e719610e2bf37c3f
semantic_inventory:
  - claim_key: CLAIM-4C32275ED95EFD59
    claim_text: Per-document expiry dates are not a separate feature
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - custom_properties.property
  - claim_key: CLAIM-F017ED49D3E3083E
    claim_text: custom properties are the intended way to record such dates
    role: descriptive
    status: modeled
    span:
      start: 54
      end: 113
    subjects:
      - custom_properties.property
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #413'
  recorded_at: '2026-10-14T12:09:07.808Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:custom_properties
id: REQ-per-document-expiry-dates-are-not-a-separa-495A8BDE
type: req
required_evidence: asserted
rationale: 'Maintainer CorentinTh on issue #413 (2026-03-07): "Closing the issue as it would be supported by custom properties". Why custom properties rather than a dedicated expiry feature: reason not stated beyond that.'
---
Per-document expiry dates are not a separate feature; custom properties are the intended way to record such dates.

## Context

Maintainer CorentinTh on issue #413 (2026-03-07): "Closing the issue as it would be supported by custom properties". Why custom properties rather than a dedicated expiry feature: reason not stated beyond that.

## Source

> Closing the issue as it would be supported by custom properties.

Source: papra-hq/papra GitHub issues - #413
