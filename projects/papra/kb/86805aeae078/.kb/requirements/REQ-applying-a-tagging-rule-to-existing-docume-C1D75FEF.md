---
title: Applying a tagging rule to existing documents enqueues a background task that processes the documents in batches; the API endpoint returns 202 Accepted with…
status: active
semantic_text: Applying a tagging rule to existing documents enqueues a background task that processes the documents in batches; the API endpoint returns 202 Accepted with the task id immediately.
logic_claims:
  - CLAIM-E88208E0A1714819
  - CLAIM-106CF6E1715A96A3
semantic_clauses:
  - Applying a tagging rule to existing documents enqueues a background task that processes the documents in batches
  - the API endpoint returns 202 Accepted with the task id immediately
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0b245ab50cc3147485fb1ad424f9524700dd8c660d0bf17cdd6e6f7ba717485d
semantic_inventory:
  - claim_key: CLAIM-E88208E0A1714819
    claim_text: Applying a tagging rule to existing documents enqueues a background task that processes the documents in batches
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 112
  - claim_key: CLAIM-106CF6E1715A96A3
    claim_text: the API endpoint returns 202 Accepted with the task id immediately
    role: descriptive
    status: ontology_gap
    span:
      start: 114
      end: 180
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/06-tagging-rules.mdx#api'
  recorded_at: '2026-10-14T12:11:07.897Z'
rationale: 'Maintainer review on PR #540: loading all document records into memory will cause OOM issues with large datasets, and running the tagging reapplication synchronously in the route handler will cause timeouts.'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:tagging_rules
id: REQ-applying-a-tagging-rule-to-existing-docume-C1D75FEF
type: req
---
Applying a tagging rule to existing documents enqueues a background task that processes the documents in batches; the API endpoint returns 202 Accepted with the task id immediately.

## Context

Maintainer review on PR #540: loading all document records into memory will cause OOM issues with large datasets, and running the tagging reapplication synchronously in the route handler will cause timeouts.

## Source

> You can also apply tagging rules programmatically using the API. The endpoint enqueues a background task and returns immediately:

Source: Papra documentation site (apps/docs) - 03-guides/06-tagging-rules.mdx#api
