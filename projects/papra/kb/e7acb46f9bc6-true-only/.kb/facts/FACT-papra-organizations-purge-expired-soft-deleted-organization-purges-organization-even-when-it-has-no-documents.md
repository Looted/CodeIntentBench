---
title: organizations.purge_expired_soft_deleted_organization purges_organization_even_when_it_has_no_documents = True
status: active
fact_kind: property_value
subject_key: organizations.purge_expired_soft_deleted_organization
property_key: purges_organization_even_when_it_has_no_documents
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E66AF46901F93174
claim_text: Purges organization even when it has no documents
text_ref: REQ-papra-organizations-purges-organization-even-when-it-has-no
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1594'
  recorded_at: '2025-06-03T12:35:43.000Z'
id: FACT-papra-organizations-purge-expired-soft-deleted-organization-purges-organization-even-when-it-has-no-documents
type: fact
---
Purges organization even when it has no documents.

Modeled from REQ-papra-organizations-purges-organization-even-when-it-has-no so the claim can be checked for contradictions.
