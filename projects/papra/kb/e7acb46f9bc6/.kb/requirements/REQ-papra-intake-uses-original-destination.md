---
title: A forwarded intake email is matched by its original destination address when one is available.
status: active
semantic_text: A forwarded intake email is matched by its original destination address when one is available.
semantic_clauses:
  - A forwarded intake email is matched by its original destination address when one is available
logic_claims:
  - CLAIM-EF6B8CD050931A02
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 47c60851dbcd529b3735de2305c08ec3d979b51ece3ccca8afcd890923cd3e2a
semantic_inventory:
  - claim_key: CLAIM-EF6B8CD050931A02
    claim_text: A forwarded intake email is matched by its original destination address when one is available
    role: normative
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - intake_email.forwarded_destination
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #655: Intake email edge case: use original destination addresses w'
  recorded_at: '2026-11-16T10:25:18.848Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:intake-email
id: REQ-papra-intake-uses-original-destination
type: req
---
A forwarded intake email is matched by its original destination address when one is available.

## Context

Reason not stated.

## Source

> Intake email edge case: use original destination addresses when available for intake emails when forwarded

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.11.0 changelog, #655: Intake email edge case: use original destination addresses w
