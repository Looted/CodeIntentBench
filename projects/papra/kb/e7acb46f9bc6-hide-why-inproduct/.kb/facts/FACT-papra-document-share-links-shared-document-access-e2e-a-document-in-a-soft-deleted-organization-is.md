---
title: document_share_links.shared_document_access_e2e a_document_in_a_soft_deleted_organization_is = True
status: active
fact_kind: property_value
subject_key: document_share_links.shared_document_access_e2e
property_key: a_document_in_a_soft_deleted_organization_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DE402559AD0889A7
claim_text: A document in a soft-deleted organization is no longer reachable through its share link, and access resumes once the organization is restored
text_ref: REQ-papra-document-share-links-document-in-soft-deleted-organization-is-no
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-656'
  recorded_at: '2026-01-02T13:02:34.000Z'
id: FACT-papra-document-share-links-shared-document-access-e2e-a-document-in-a-soft-deleted-organization-is
type: fact
---
A document in a soft-deleted organization is no longer reachable through its share link, and access resumes once the organization is restored.

Modeled from REQ-papra-document-share-links-document-in-soft-deleted-organization-is-no so the claim can be checked for contradictions.
