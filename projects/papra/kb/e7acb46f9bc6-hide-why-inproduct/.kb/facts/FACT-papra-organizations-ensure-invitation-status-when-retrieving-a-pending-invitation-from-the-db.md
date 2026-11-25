---
title: organizations.ensure_invitation_status when_retrieving_a_pending_invitation_from_the_db = True
status: active
fact_kind: property_value
subject_key: organizations.ensure_invitation_status
property_key: when_retrieving_a_pending_invitation_from_the_db
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CAB8808BA4A0261E
claim_text: When retrieving a pending invitation from the db, it may be just expired
text_ref: REQ-papra-organizations-retrieving-pending-invitation-from-db-it-may
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1470'
  recorded_at: '2025-02-21T13:17:07.000Z'
id: FACT-papra-organizations-ensure-invitation-status-when-retrieving-a-pending-invitation-from-the-db
type: fact
---
When retrieving a pending invitation from the db, it may be just expired.

Modeled from REQ-papra-organizations-retrieving-pending-invitation-from-db-it-may so the claim can be checked for contradictions.
