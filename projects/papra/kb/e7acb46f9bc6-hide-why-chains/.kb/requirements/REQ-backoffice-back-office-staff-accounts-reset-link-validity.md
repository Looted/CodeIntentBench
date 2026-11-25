---
title: Password reset links for back office staff accounts are valid for 1440 minutes.
status: active
semantic_text: Password reset links for back office staff accounts are valid for 1440 minutes.
semantic_clauses:
  - Password reset links for back office staff accounts are valid for 1440 minutes
logic_claims:
  - CLAIM-47290DC4C9EDF877
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ef9832222e77aca29ef4181f06b549c0646d2e71917946e1bef41321b62f42ff
semantic_inventory:
  - claim_key: CLAIM-47290DC4C9EDF877
    claim_text: Password reset links for back office staff accounts are valid for 1440 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-541'
  recorded_at: '2026-06-02T12:28:26.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-backoffice-back-office-staff-accounts-reset-link-validity
type: req
---
Password reset links for back office staff accounts are valid for 1440 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Why this changed

OPS-541 replaced the value recorded in OPS-486 and gives this reason for the change: Mail to some providers took longer than that to arrive.

## Source

> feat(backoffice): reset links valid 1440 minutes (OPS-541)

Source: Papra Cloud back office handbook - OPS-541
