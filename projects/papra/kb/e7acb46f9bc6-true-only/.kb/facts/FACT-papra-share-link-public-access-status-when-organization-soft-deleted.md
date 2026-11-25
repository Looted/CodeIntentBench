---
title: share_link.public_access status_when_organization_soft_deleted = 410
status: active
fact_kind: property_value
subject_key: share_link.public_access
property_key: status_when_organization_soft_deleted
operator: eq
value_type: int
value_int: 410
claim_key: CLAIM-1ECB1835F0BF5A7D
claim_text: Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is soft-deleted
text_ref: REQ-papra-share-links-of-deleted-organizations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1348'
  recorded_at: '2026-11-16T10:18:08.145Z'
id: FACT-papra-share-link-public-access-status-when-organization-soft-deleted
type: fact
---
Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is soft-deleted.

Modeled from REQ-papra-share-links-of-deleted-organizations so the claim can be checked for contradictions.
