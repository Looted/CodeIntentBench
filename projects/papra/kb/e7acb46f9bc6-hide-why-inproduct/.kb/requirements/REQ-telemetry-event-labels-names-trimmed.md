---
title: Event label names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is ref…
status: active
semantic_text: Event label names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Event label names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-8A4DBDEC6D338104
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 08e182c8111f1d35f6a83ce76fcd0af2fce41db5ec2e520fe0ca018b0c37c1a1
semantic_inventory:
  - claim_key: CLAIM-8A4DBDEC6D338104
    claim_text: Event label names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - telemetry.event_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 115
      end: 161
    subjects:
      - telemetry.event_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-118'
  recorded_at: '2025-10-27T09:47:04.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-event-labels-names-trimmed
type: req
---
Event label names in the telemetry dashboard are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(telemetry): trim event label names (TEL-118)

Source: Telemetry dashboard decision log - TEL-118
