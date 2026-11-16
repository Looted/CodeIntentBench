---
title: The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_…
status: active
semantic_text: The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_DRIVER).
semantic_clauses:
  - The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_DRIVER)
logic_claims:
  - CLAIM-E40D045AE92FDBB4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b5cae9b9991e8ac59f9234f5e69c0238a8c3c1d7270823a5189f0258a7949f80
semantic_inventory:
  - claim_key: CLAIM-E40D045AE92FDBB4
    claim_text: The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_DRIVER)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 164
    subjects:
      - intake_email.catch_all_driver
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.3 changelog, #504: Split the intake-email username generation from the email ad'
  recorded_at: '2026-11-16T10:25:26.493Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:intake-email
id: REQ-papra-intake-catch-all-driver
type: req
---
The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_DRIVER).

## Context

Reason not stated.

## Source

> Split the intake-email username generation from the email address creation, some changes regarding the configuration when using the `random` driver. ```env # Old configuration INTAKE_EMAILS_DRIVER=random-username INTAKE_EMAILS_EMAIL_GENERATION_DOMAIN=mydomain.com # New configuration INTAKE_EMAILS_DRIVER=catch-all INTAKE_EMAILS_CATCH_ALL_DOMAIN=mydomain.com INTAKE_EMAILS_USERNAME_DRIVER=random ```

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.9.3 changelog, #504: Split the intake-email username generation from the email ad
