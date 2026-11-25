---
title: Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register.
status: active
semantic_text: Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register.
semantic_clauses:
  - Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register
logic_claims:
  - CLAIM-2CC270A6A7176569
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1aa7b4cb09325b4a5d1390276267b8cb49977491b8c3fce2f3f4f8e32469a2d3
semantic_inventory:
  - claim_key: CLAIM-2CC270A6A7176569
    claim_text: Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register
    role: normative
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - auth.forbidden_email_domains
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #638: Added the possibility to filter out some email domain names'
  recorded_at: '2026-11-16T10:24:54.478Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:auth
id: REQ-papra-forbidden-email-domains
type: req
---
Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register.

## Context

Reason not stated.

## Source

> Added the possibility to filter out some email domain names for new registration

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.11.0 changelog, #638: Added the possibility to filter out some email domain names
