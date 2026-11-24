---
title: The back office reads BACKOFFICE_SESSION_SECRET from a file named by BACKOFFICE_SESSION_SECRET_FILE when that variable is set.
status: active
semantic_text: The back office reads BACKOFFICE_SESSION_SECRET from a file named by BACKOFFICE_SESSION_SECRET_FILE when that variable is set.
semantic_clauses:
  - The back office reads BACKOFFICE_SESSION_SECRET from a file named by BACKOFFICE_SESSION_SECRET_FILE when that variable is set
logic_claims:
  - CLAIM-47E5B25776D14AE6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 469ccf3eb0151cbfcfb5a6d6845116cede25b39753ee4c48da05c91a994a464a
semantic_inventory:
  - claim_key: CLAIM-47E5B25776D14AE6
    claim_text: The back office reads BACKOFFICE_SESSION_SECRET from a file named by BACKOFFICE_SESSION_SECRET_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 125
    subjects:
      - backoffice.backoffice_session_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-356'
  recorded_at: '2026-09-12T08:09:28.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Configuration files end up in backups and in support tickets.
id: REQ-backoffice-backoffice-session-secret-source
type: req
---
The back office reads BACKOFFICE_SESSION_SECRET from a file named by BACKOFFICE_SESSION_SECRET_FILE when that variable is set.

## Context

Configuration files end up in backups and in support tickets.

## Source

> feat(backoffice): where BACKOFFICE_SESSION_SECRET is read from (OPS-356)

Source: Papra Cloud back office handbook - OPS-356
