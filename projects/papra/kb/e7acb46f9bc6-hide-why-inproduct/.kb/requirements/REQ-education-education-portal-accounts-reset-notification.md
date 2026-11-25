---
title: A completed password reset for education portal accounts sends no confirmation email.
status: active
semantic_text: A completed password reset for education portal accounts sends no confirmation email.
semantic_clauses:
  - A completed password reset for education portal accounts sends no confirmation email
logic_claims:
  - CLAIM-1C61EE9564C29426
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 175d9780afe5f0ca8b0b26a19dec97c85b64808806935bd7d68aeef919c9e1ee
semantic_inventory:
  - claim_key: CLAIM-1C61EE9564C29426
    claim_text: A completed password reset for education portal accounts sends no confirmation email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - education.education_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-150'
  recorded_at: '2025-05-14T09:06:35.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: The reset itself already goes through the mailbox, so a second email added nothing.
id: REQ-education-education-portal-accounts-reset-notification
type: req
---
A completed password reset for education portal accounts sends no confirmation email.

## Context

The reset itself already goes through the mailbox, so a second email added nothing.

## Source

> feat(education): notify after a password reset (EDU-150)

Source: Education programme portal notes - EDU-150
