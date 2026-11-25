---
title: storage.get_most_recent_kek when_no_kek_is_found_an_error_is = True
status: active
fact_kind: property_value
subject_key: storage.get_most_recent_kek
property_key: when_no_kek_is_found_an_error_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D1D8BCAC9E623609
claim_text: When no KEK is found, an error is thrown
text_ref: REQ-papra-storage-no-kek-is-found-error-is-thrown
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1734'
  recorded_at: '2026-09-22T10:58:22.000Z'
id: FACT-papra-storage-get-most-recent-kek-when-no-kek-is-found-an-error-is
type: fact
---
When no KEK is found, an error is thrown.

Modeled from REQ-papra-storage-no-kek-is-found-error-is-thrown so the claim can be checked for contradictions.
