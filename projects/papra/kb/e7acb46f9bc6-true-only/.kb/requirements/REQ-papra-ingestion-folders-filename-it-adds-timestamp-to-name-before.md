---
title: Given a filename, it adds a timestamp to the name, before the extension.
status: active
semantic_text: Given a filename, it adds a timestamp to the name, before the extension.
semantic_clauses:
  - Given a filename, it adds a timestamp to the name, before the extension
logic_claims:
  - CLAIM-2906C5949C97C8FC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4b3e71dcce2ba9eb0d4ed14e524ea5a8851f726796ad8f16cecc3d075cd402ab
semantic_inventory:
  - claim_key: CLAIM-2906C5949C97C8FC
    claim_text: Given a filename, it adds a timestamp to the name, before the extension
    role: normative
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - ingestion_folders.add_timestamp_to_filename
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1404'
  recorded_at: '2026-03-17T11:01:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:ingestion-folders
id: REQ-papra-ingestion-folders-filename-it-adds-timestamp-to-name-before
type: req
---
Given a filename, it adds a timestamp to the name, before the extension.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/ingestion-folders/ingestion-folder.models.test.ts (ingestion-folder models > addTimestampToFilename).

## Source

Source: Papra server behaviour notes - SRV-1404
