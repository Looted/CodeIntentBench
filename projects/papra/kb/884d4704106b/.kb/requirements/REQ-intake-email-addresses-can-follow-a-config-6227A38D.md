---
title: Intake email addresses can follow a configured naming pattern instead of the randomly generated names (an instance-level setting, INTAKE_EMAILS_USERNAME_DRIV…
status: active
semantic_text: Intake email addresses can follow a configured naming pattern instead of the randomly generated names (an instance-level setting, INTAKE_EMAILS_USERNAME_DRIVER=pattern).
logic_claims:
  - CLAIM-677C758B72971D22
  - CLAIM-6BF3A84944A148E5
semantic_clauses:
  - Intake email addresses can follow a configured naming pattern instead of the randomly generated names
  - an instance-level setting, INTAKE_EMAILS_USERNAME_DRIVER=pattern
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f906a1da8794c49891753facd144ccc39f1ab5415ad09719fe8b3e182f852865
semantic_inventory:
  - claim_key: CLAIM-677C758B72971D22
    claim_text: Intake email addresses can follow a configured naming pattern instead of the randomly generated names
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - intake_email.address
  - claim_key: CLAIM-6BF3A84944A148E5
    claim_text: an instance-level setting, INTAKE_EMAILS_USERNAME_DRIVER=pattern
    role: descriptive
    status: modeled
    span:
      start: 103
      end: 167
    subjects:
      - intake_email.address
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #486'
  recorded_at: '2026-10-14T12:08:46.520Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:intake_emails
id: REQ-intake-email-addresses-can-follow-a-config-6227A38D
type: req
required_evidence: asserted
rationale: 'Requested in issue #486 by GoldenGamerLP (2025-09-09): the random names are "slightly weird or suspecious in the case you need to send something from work to papra." The maintainer stated no reason of his own.'
---
Intake email addresses can follow a configured naming pattern instead of the randomly generated names (an instance-level setting, INTAKE_EMAILS_USERNAME_DRIVER=pattern).

## Context

Requested in issue #486 by GoldenGamerLP (2025-09-09): the random names are "slightly weird or suspecious in the case you need to send something from work to papra." The maintainer stated no reason of his own.

## Source

> it's planned to add support for this

Source: papra-hq/papra GitHub issues - #486
