---
title: Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status).
status: active
semantic_text: Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status).
semantic_clauses:
  - Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status)
logic_claims:
  - CLAIM-E5916E57A9B76E20
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4a848968c0ffa26b7bbac7d698fac9b4807c69b0b57ada4c2ce31a81dfe42b45
semantic_inventory:
  - claim_key: CLAIM-E5916E57A9B76E20
    claim_text: Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - search.custom_property_filters
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #965: Added support for searching by custom properties. For exampl'
  recorded_at: '2026-11-16T13:18:17.964Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
id: REQ-papra-custom-property-search-filters
type: req
---
Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status).

## Context

Reason not stated.

## Source

> Added support for searching by custom properties. For example, given a custom property `status` of type `select` with options `todo`, `in progress` and `done`, you could search for `status:todo` to find all documents with the status set to todo, or `has:status` to find all documents with a status set (and `-has:status` for documents without a status).

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.3.0 changelog, #965: Added support for searching by custom properties. For exampl
