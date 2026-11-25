---
title: Credential label names in the n8n integration are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is re…
status: active
semantic_text: Credential label names in the n8n integration are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Credential label names in the n8n integration are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-FE7BB3382F2BADAF
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b87bd26b73deb1cf85dbd31e63e99161f5d97b9385c6b9cddc2087dba9fa03b9
semantic_inventory:
  - claim_key: CLAIM-FE7BB3382F2BADAF
    claim_text: Credential label names in the n8n integration are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - n8n.credential_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 116
      end: 162
    subjects:
      - n8n.credential_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'n8n integration notes: N8N-122'
  recorded_at: '2025-02-07T13:27:54.000Z'
tags:
  - bootstrap
  - knowledge-source:n8n-decisions
  - component:n8n
rationale: Pasted names carried trailing spaces and produced credential labels that looked identical but were not.
id: REQ-n8n-credential-labels-names-trimmed
type: req
---
Credential label names in the n8n integration are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced credential labels that looked identical but were not.

## Source

> fix(n8n): trim credential label names (N8N-122)

Source: n8n integration notes - N8N-122
