---
title: HTML-like characters in email templates are escaped, not removed.
status: active
semantic_text: HTML-like characters in email templates are escaped, not removed.
semantic_clauses:
  - HTML-like characters in email templates are escaped, not removed
logic_claims:
  - CLAIM-12C436CCA4159D42
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 83c3f1b8709f0398840b310c76d61564f62cbbfec97336e6af223b0af4e412fb
semantic_inventory:
  - claim_key: CLAIM-12C436CCA4159D42
    claim_text: HTML-like characters in email templates are escaped, not removed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - email.templates
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1061: Html-ish characters in email templates are now escaped inste'
  recorded_at: '2026-11-16T10:34:49.704Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:email
id: REQ-papra-email-html-escaped
type: req
---
HTML-like characters in email templates are escaped, not removed.

## Context

Reason not stated.

## Why this changed

Reason not stated. The changeset of #1061 (2026-04-23) replaces the earlier behaviour without saying why it changed.

## Source

> Html-ish characters in email templates are now escaped instead of sanitized-out

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1061: Html-ish characters in email templates are now escaped inste
