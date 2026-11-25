---
title: An organization can create at most MAX_TAGS_PER_ORGANIZATION tags; the default is 200.
status: active
semantic_text: An organization can create at most MAX_TAGS_PER_ORGANIZATION tags; the default is 200.
semantic_clauses:
  - An organization can create at most MAX_TAGS_PER_ORGANIZATION tags
  - the default is 200
logic_claims:
  - CLAIM-4605BA9C5FA32012
  - CLAIM-EEA159D43C0A77E4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4ccc3ab86343e2e232f594d45d7db215046000d6a7d48e6a66b7cc33ed598f30
semantic_inventory:
  - claim_key: CLAIM-4605BA9C5FA32012
    claim_text: An organization can create at most MAX_TAGS_PER_ORGANIZATION tags
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - tags.per_organization_limit
  - claim_key: CLAIM-EEA159D43C0A77E4
    claim_text: the default is 200
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 85
    subjects:
      - tags.per_organization_limit
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #900: Added an option to limit the number of tags that can be crea'
  recorded_at: '2026-11-16T13:18:45.388Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-max-tags-per-organization
type: req
---
An organization can create at most MAX_TAGS_PER_ORGANIZATION tags; the default is 200.

## Context

Reason not stated.

## Why this changed

Reason not stated. This decision replaces REQ-papra-organization-tags-uncapped without saying why it changed.

## Source

> Added an option to limit the number of tags that can be created in an organization, defaulting to 200. Configurable via the `MAX_TAGS_PER_ORGANIZATION` environment variable.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.2.0 changelog, #900: Added an option to limit the number of tags that can be crea
