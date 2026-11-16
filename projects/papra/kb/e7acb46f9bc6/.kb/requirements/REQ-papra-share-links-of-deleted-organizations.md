---
title: Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is…
status: active
semantic_text: Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is soft-deleted, and resumes automatically if the organization is restored during the grace period.
semantic_clauses:
  - Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is soft-deleted
  - resumes automatically if the organization is restored during the grace period
logic_claims:
  - CLAIM-1ECB1835F0BF5A7D
  - CLAIM-D242FFE734A5A361
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c59ffa5d0a805bcc0f7f001c52b8be533e83cf0671a74bf6d6bf278fab3c4516
semantic_inventory:
  - claim_key: CLAIM-1ECB1835F0BF5A7D
    claim_text: Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is soft-deleted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 170
    subjects:
      - share_link.public_access
  - claim_key: CLAIM-D242FFE734A5A361
    claim_text: resumes automatically if the organization is restored during the grace period
    role: normative
    status: modeled
    span:
      start: 176
      end: 253
    subjects:
      - share_link.public_access
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #1348'
  recorded_at: '2026-11-16T10:18:09.874Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:share_links
rationale: 'The changeset of PR #1348 (2026-07-10) calls it a security fix: "document share links belonging to a soft-deleted organization were still publicly accessible".'
id: REQ-papra-share-links-of-deleted-organizations
type: req
---
Public access to a document share link (document metadata, file download and password verification) stops with 410 Gone as soon as the link's organization is soft-deleted, and resumes automatically if the organization is restored during the grace period.

## Context

The changeset of PR #1348 (2026-07-10) calls it a security fix: "document share links belonging to a soft-deleted organization were still publicly accessible".

## Source

> Security fix: document share links belonging to a soft-deleted organization were still publicly accessible. Public access (document metadata, file download, and password verification) now stops with a 410 Gone as soon as the organization is deleted, and resumes automatically if the organization is restored during the grace period.

Source: papra-hq/papra merged pull requests - #1348
