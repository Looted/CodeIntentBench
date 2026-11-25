---
title: Retrieve document count and total size for an organization.
status: active
semantic_text: Retrieve document count and total size for an organization.
semantic_clauses:
  - Retrieve document count and total size for an organization
logic_claims:
  - CLAIM-A54FFBD0D2F4D3D7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bdd659adedef71a2ffee97d1d456ba6a681939bc3d01f0e0eca84029698f8fe5
semantic_inventory:
  - claim_key: CLAIM-A54FFBD0D2F4D3D7
    claim_text: Retrieve document count and total size for an organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - documents.get_organization_stats
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1134'
  recorded_at: '2025-02-05T11:47:48.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-retrieve-document-count-and-total-size-for
type: req
---
Retrieve document count and total size for an organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > getOrganizationStats).

## Source

Source: Papra server behaviour notes - SRV-1134
