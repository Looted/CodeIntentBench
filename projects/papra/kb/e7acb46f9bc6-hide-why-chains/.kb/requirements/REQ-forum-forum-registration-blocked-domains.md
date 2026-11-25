---
title: Addresses from disposable-mail domains are refused in community forum registration; a domain on the block list is refused even when it is also on the allowed…
status: active
semantic_text: Addresses from disposable-mail domains are refused in community forum registration; a domain on the block list is refused even when it is also on the allowed list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in community forum registration
  - a domain on the block list is refused even when it is also on the allowed list
logic_claims:
  - CLAIM-FB1B409ACAB0D81E
  - CLAIM-0D5093478D80516F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8fc4058ffe9277a99cd8c68e65efa9f5466f76536286d2249191fd348f544fdd
semantic_inventory:
  - claim_key: CLAIM-FB1B409ACAB0D81E
    claim_text: Addresses from disposable-mail domains are refused in community forum registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - forum.forum_registration
  - claim_key: CLAIM-0D5093478D80516F
    claim_text: a domain on the block list is refused even when it is also on the allowed list
    role: normative
    status: modeled
    span:
      start: 84
      end: 162
    subjects:
      - forum.forum_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-262'
  recorded_at: '2025-06-05T10:53:37.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-registration-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in community forum registration; a domain on the block list is refused even when it is also on the allowed list.

## Context

Reason not stated.

## Source

> feat(forum): block disposable email domains (FRM-262)

Source: Community forum operations notes - FRM-262
