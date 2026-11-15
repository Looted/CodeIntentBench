---
title: A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-dele…
status: active
semantic_text: A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-deleted. The link itself is never deleted on trash, so access resumes automatically once the document or organization is restored.
semantic_clauses:
  - A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-deleted
  - The link itself is never deleted on trash
  - access resumes automatically once the document or organization is restored
logic_claims:
  - CLAIM-E23127F28DDDD962
  - CLAIM-3614CB6878174298
  - CLAIM-89B5FC12CD6D0510
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23359a36bb5939656065a12ddc37d0e113b8d9d5521eb07f1779ee2e380e732b
semantic_inventory:
  - claim_key: CLAIM-E23127F28DDDD962
    claim_text: A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-deleted
    role: normative
    status: modeled
    span:
      start: 0
      end: 160
    subjects:
      - share_link.public_access
  - claim_key: CLAIM-3614CB6878174298
    claim_text: The link itself is never deleted on trash
    role: descriptive
    status: modeled
    span:
      start: 162
      end: 203
    subjects:
      - share_link.public_access
  - claim_key: CLAIM-89B5FC12CD6D0510
    claim_text: access resumes automatically once the document or organization is restored
    role: descriptive
    status: modeled
    span:
      start: 208
      end: 282
    subjects:
      - share_link.public_access
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): document-share-links/document-share-links.usecases.test.ts#share-link-gone-semantics'
  recorded_at: '2026-11-15T22:58:14.255Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:share_links
  - rule:share-link-gone-semantics
rationale: 'For the soft-deleted organization case, the changeset of PR #1348 (2026-07-10) calls it a security fix: such links "were still publicly accessible". Why the answer is 410 rather than 404, and why a link survives the trash: reason not stated.'
id: REQ-papra-share-link-gone-semantics
type: req
---
A public share link answers 410 Gone (not 404) when the link is disabled or expired, when its document is in the trash, or when its organization is soft-deleted. The link itself is never deleted on trash, so access resumes automatically once the document or organization is restored.

## Context

For the soft-deleted organization case, the changeset of PR #1348 (2026-07-10) calls it a security fix: such links "were still publicly accessible". Why the answer is 410 rather than 404, and why a link survives the trash: reason not stated.

## Source

> throws 410 when the link is disabled
> throws 410 when the link is expired
> throws 410 when the organization is soft-deleted
> a trashed document is no longer reachable through its share link, and access resumes once it is restored

Source: Papra server test suite (apps/papra-server/src/modules) - document-share-links/document-share-links.usecases.test.ts#share-link-gone-semantics
