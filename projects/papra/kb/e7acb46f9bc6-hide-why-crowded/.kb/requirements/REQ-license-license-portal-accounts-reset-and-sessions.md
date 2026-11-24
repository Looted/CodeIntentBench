---
title: Resetting the password of a license portal account leaves existing sessions signed in until they expire.
status: active
semantic_text: Resetting the password of a license portal account leaves existing sessions signed in until they expire.
semantic_clauses:
  - Resetting the password of a license portal account leaves existing sessions signed in until they expire
logic_claims:
  - CLAIM-0FC7B6DF069023C5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 65d36492a45e437755d86857868820aaefd352da842dabde4b5d36308338be12
semantic_inventory:
  - claim_key: CLAIM-0FC7B6DF069023C5
    claim_text: Resetting the password of a license portal account leaves existing sessions signed in until they expire
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - license.license_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-250'
  recorded_at: '2026-04-24T16:19:39.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Being signed out of the device they had just used to reset confused people.
id: REQ-license-license-portal-accounts-reset-and-sessions
type: req
---
Resetting the password of a license portal account leaves existing sessions signed in until they expire.

## Context

Being signed out of the device they had just used to reset confused people.

## Source

> feat(license): sessions after a password reset (LIC-250)

Source: License server decision log - LIC-250
