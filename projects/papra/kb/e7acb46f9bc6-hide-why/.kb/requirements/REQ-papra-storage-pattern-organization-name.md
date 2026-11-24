---
title: Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use; organization names are not unique, so a…
status: active
semantic_text: Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use; organization names are not unique, so a pattern that uses it should also include {{organization.id}} to keep folders distinct.
semantic_clauses:
  - Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use
  - organization names are not unique, so a pattern that uses it should also include {{organization.id}} to keep folders distinct
logic_claims:
  - CLAIM-424DDFE9E8FD7F43
  - CLAIM-9C96117D75E04952
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1b4ab6acd89faaa527e7a882548b803741f0be88a6ac1bdef122eb32ddd439cf
semantic_inventory:
  - claim_key: CLAIM-424DDFE9E8FD7F43
    claim_text: Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - storage_pattern.organization_name
  - claim_key: CLAIM-9C96117D75E04952
    claim_text: organization names are not unique, so a pattern that uses it should also include {{organization.id}} to keep folders distinct
    role: normative
    status: modeled
    span:
      start: 117
      end: 242
    subjects:
      - storage_pattern.organization_name
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #1529'
  recorded_at: '2026-11-16T13:15:02.463Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:storage
rationale: 'Maintainer CorentinTh on issue #976 (2026-03-27): "Organization names are not unique, so it could cause weird storage paths if two separate organizations have the same name". The changeset of PR #1529 says the expression is there "to organize files into folders named after your organizations".'
id: REQ-papra-storage-pattern-organization-name
type: req
---
Storage key patterns support {{organization.name}}, the current organization name sanitized for safe filesystem use; organization names are not unique, so a pattern that uses it should also include {{organization.id}} to keep folders distinct.

## Context

Maintainer CorentinTh on issue #976 (2026-03-27): "Organization names are not unique, so it could cause weird storage paths if two separate organizations have the same name". The changeset of PR #1529 says the expression is there "to organize files into folders named after your organizations".

## Source

> Add support for `{{organization.name}}` in document storage key patterns to organize files into folders named after your organizations.
> Use `organization.name` for readable organization folders. Organization names are not unique, so include `organization.id` to keep folders distinct:

Source: papra-hq/papra merged pull requests - #1529
