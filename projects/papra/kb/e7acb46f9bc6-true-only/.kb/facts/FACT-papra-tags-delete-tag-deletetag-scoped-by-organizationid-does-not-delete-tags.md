---
title: tags.delete_tag deletetag_scoped_by_organizationid_does_not_delete_tags = True
status: active
fact_kind: property_value
subject_key: tags.delete_tag
property_key: deletetag_scoped_by_organizationid_does_not_delete_tags
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DA78734094F66AD1
claim_text: DeleteTag scoped by organizationId does not delete tags belonging to another organization
text_ref: REQ-papra-tags-deletetag-scoped-by-organizationid-does-not-delete
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1830'
  recorded_at: '2025-12-20T08:15:03.000Z'
id: FACT-papra-tags-delete-tag-deletetag-scoped-by-organizationid-does-not-delete-tags
type: fact
---
DeleteTag scoped by organizationId does not delete tags belonging to another organization.

Modeled from REQ-papra-tags-deletetag-scoped-by-organizationid-does-not-delete so the claim can be checked for contradictions.
