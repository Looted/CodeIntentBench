---
title: Tag colour preset names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Tag colour preset names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Tag colour preset names in the web client are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-D753501767A79656
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 64b2ec4c99ee52cb006f60c9a144a6e84d4487df9d2f60201a7eeabba0887980
semantic_inventory:
  - claim_key: CLAIM-D753501767A79656
    claim_text: Tag colour preset names in the web client are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - client.tag_colour_presets
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 112
      end: 158
    subjects:
      - client.tag_colour_presets
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Web client decision log (apps/papra-client): WCL-152'
  recorded_at: '2025-03-16T09:08:25.000Z'
tags:
  - bootstrap
  - knowledge-source:client-decisions
  - component:client
id: REQ-client-tag-colour-presets-names-trimmed
type: req
---
Tag colour preset names in the web client are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(client): trim tag colour preset names (WCL-152)

Source: Web client decision log (apps/papra-client) - WCL-152
