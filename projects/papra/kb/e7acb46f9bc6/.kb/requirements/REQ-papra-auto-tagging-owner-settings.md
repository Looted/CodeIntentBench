---
title: Auto tagging is configured per organization by its owners; owners choose whether it is on, whether it may create tags and the maximum number of tags it adds…
status: active
semantic_text: Auto tagging is configured per organization by its owners; owners choose whether it is on, whether it may create tags and the maximum number of tags it adds to a document.
semantic_clauses:
  - Auto tagging is configured per organization by its owners
  - owners choose whether it is on, whether it may create tags and the maximum number of tags it adds to a document
logic_claims:
  - CLAIM-4C8D698DF3502E00
  - CLAIM-56687499A054AFAD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d40be4a2c34d7eb405d9d4e01dde0b666822018eb8659982124887d2b783d5d9
semantic_inventory:
  - claim_key: CLAIM-4C8D698DF3502E00
    claim_text: Auto tagging is configured per organization by its owners
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - auto_tagging.organization_settings
  - claim_key: CLAIM-56687499A054AFAD
    claim_text: owners choose whether it is on, whether it may create tags and the maximum number of tags it adds to a document
    role: descriptive
    status: modeled
    span:
      start: 59
      end: 170
    subjects:
      - auto_tagging.organization_settings
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1201: Auto tagging can be configured per organization, with a dedi'
  recorded_at: '2026-11-16T10:22:17.762Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auto-tagging
id: REQ-papra-auto-tagging-owner-settings
type: req
---
Auto tagging is configured per organization by its owners; owners choose whether it is on, whether it may create tags and the maximum number of tags it adds to a document.

## Context

Reason not stated.

## Source

> Auto tagging can be configured per organization, with a dedicated page in organization settings. Owners can manage the following settings: - Enable or disable auto tagging for their organization. - Enable the creation of new tags if relevant tags do not exist. - Configure the maximum number of tags that can be automatically added to a document.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1201: Auto tagging can be configured per organization, with a dedi
