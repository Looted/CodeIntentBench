---
title: share_link.public_access resumes_when_organization_restored = True
status: active
fact_kind: property_value
subject_key: share_link.public_access
property_key: resumes_when_organization_restored
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D242FFE734A5A361
claim_text: resumes automatically if the organization is restored during the grace period
text_ref: REQ-papra-share-links-of-deleted-organizations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1348'
  recorded_at: '2026-11-16T10:18:08.960Z'
id: FACT-papra-share-link-public-access-resumes-when-organization-restored
type: fact
---
Resumes automatically if the organization is restored during the grace period.

Modeled from REQ-papra-share-links-of-deleted-organizations so the claim can be checked for contradictions.
