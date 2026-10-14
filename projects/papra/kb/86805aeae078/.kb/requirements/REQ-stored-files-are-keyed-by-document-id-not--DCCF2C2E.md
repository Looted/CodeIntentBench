---
title: Stored files are keyed by document id, not by the document's file name; the default storage layout is {{organization.id}}/originals/{{document.id}}.
status: active
semantic_text: Stored files are keyed by document id, not by the document's file name; the default storage layout is {{organization.id}}/originals/{{document.id}}.
logic_claims:
  - CLAIM-D25F0B2A70217FF7
  - CLAIM-8EA6CE6C47DE0081
semantic_clauses:
  - Stored files are keyed by document id, not by the document's file name
  - the default storage layout is {{organization.id}}/originals/{{document.id}}
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 455fb36e8c9220d71637e47c809379d51032f3316aaef18d41cecabb031eb809
semantic_inventory:
  - claim_key: CLAIM-D25F0B2A70217FF7
    claim_text: Stored files are keyed by document id, not by the document's file name
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 70
  - claim_key: CLAIM-8EA6CE6C47DE0081
    claim_text: the default storage layout is {{organization.id}}/originals/{{document.id}}
    role: descriptive
    status: ontology_gap
    span:
      start: 72
      end: 147
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #352'
  recorded_at: '2026-10-14T12:10:40.534Z'
rationale: Filename collisions, invalid or special characters and consistency across storage backends; storing by id decouples the physical storage from user-facing metadata.
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:storage
id: REQ-stored-files-are-keyed-by-document-id-not--DCCF2C2E
type: req
---
Stored files are keyed by document id, not by the document's file name; the default storage layout is {{organization.id}}/originals/{{document.id}}.

## Context

Filename collisions, invalid or special characters and consistency across storage backends; storing by id decouples the physical storage from user-facing metadata.

## Source

> I think it's not worth it for now, but we might reevaluate this later.

Source: papra-hq/papra GitHub issues - #352
