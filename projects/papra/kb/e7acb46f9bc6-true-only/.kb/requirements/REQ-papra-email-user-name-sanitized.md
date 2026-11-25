---
title: The user's name is sanitized before it is put in email content.
status: closed
semantic_text: The user's name is sanitized before it is put in email content.
semantic_clauses:
  - The user's name is sanitized before it is put in email content
logic_claims:
  - CLAIM-83340C21B5B77C60
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0607310b5e0abf2c99c14eebbcf2cd64de09d3e8d50c92b97e9c3c2342b00f31
semantic_inventory:
  - claim_key: CLAIM-83340C21B5B77C60
    claim_text: The user's name is sanitized before it is put in email content
    role: normative
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - email.templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.0 changelog, #995: Properly sanitize user name before including it in the email'
  recorded_at: '2026-11-16T10:23:50.785Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:email
rationale: 'The changeset of #995 (2026-04-02): "to prevent potential XSS or html injection attacks" (security advisory GHSA-6f8x-2rc9-vgh4).'
id: REQ-papra-email-user-name-sanitized
type: req
---
The user's name is sanitized before it is put in email content.

## Context

The changeset of #995 (2026-04-02): "to prevent potential XSS or html injection attacks" (security advisory GHSA-6f8x-2rc9-vgh4).

## Source

> Properly sanitize user name before including it in the email content to prevent potential XSS or html injection attacks. Addressing [GHSA-6f8x-2rc9-vgh4](https://github.com/papra-hq/papra/security/advisories/GHSA-6f8x-2rc9-vgh4), credit to [@Toothless5143](https://github.com/Toothless5143) for the responsible disclosure.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.0 changelog, #995: Properly sanitize user name before including it in the email
