---
title: share_link.public_access status_when_unavailable = 410
status: active
fact_kind: property_value
subject_key: share_link.public_access
property_key: status_when_unavailable
operator: eq
value_type: int
value_int: 410
claim_key: CLAIM-E23127F28DDDD962
claim_text: A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-deleted
text_ref: REQ-papra-share-link-gone-semantics
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): document-share-links/document-share-links.usecases.test.ts#share-link-gone-semantics'
  recorded_at: '2026-11-15T23:01:09.887Z'
id: FACT-papra-share-link-public-access-status-when-unavailable
type: fact
---
A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-deleted.

Modeled from REQ-papra-share-link-gone-semantics so the claim can be checked for contradictions.
