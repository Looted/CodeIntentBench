---
title: share_link.public_access link_deleted_when_document_trashed = False
status: active
fact_kind: property_value
subject_key: share_link.public_access
property_key: link_deleted_when_document_trashed
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3614CB6878174298
claim_text: The link itself is never deleted on trash
text_ref: REQ-papra-share-link-gone-semantics
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): document-share-links/document-share-links.usecases.test.ts#share-link-gone-semantics'
  recorded_at: '2026-11-15T23:01:10.558Z'
id: FACT-papra-share-link-public-access-link-deleted-when-document-trashed
type: fact
---
The link itself is never deleted on trash.

Modeled from REQ-papra-share-link-gone-semantics so the claim can be checked for contradictions.
