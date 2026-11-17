---
title: Incident label names on the status page are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Incident label names on the status page are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Incident label names on the status page are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-52ABB18DA897C1E8
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 86a919c57194615460e5f54dcd6d8f7b7c25b36ad623fbea09c0d6c61f535159
semantic_inventory:
  - claim_key: CLAIM-52ABB18DA897C1E8
    claim_text: Incident label names on the status page are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - status.incident_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 110
      end: 156
    subjects:
      - status.incident_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-119'
  recorded_at: '2025-03-01T11:49:35.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-incident-labels-names-trimmed
type: req
---
Incident label names on the status page are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(status): trim incident label names (STA-119)

Source: Status page runbook - STA-119
