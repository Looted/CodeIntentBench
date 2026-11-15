---
title: organization.soft_delete keeps_organization_row = True
status: active
fact_kind: property_value
subject_key: organization.soft_delete
property_key: keeps_organization_row
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5088EFD427372AB7
claim_text: the organization row stays until the purge
text_ref: REQ-deleting-an-organization-is-a-soft-delete--58DE105C
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#soft-delete'
  recorded_at: '2026-11-15T21:45:14.109Z'
id: FACT-papra-organization-soft-delete-keeps-organization-row
type: fact
---
The organization row stays until the purge.

Modeled from REQ-deleting-an-organization-is-a-soft-delete--58DE105C so the claim can be checked for contradictions.
