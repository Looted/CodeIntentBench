---
title: 'Conflict between papra-issues:#352 and papra-docs:03-guides/09-storage-key-patterns.mdx#legacy-default: Issue #352 declined storing files under their names; storage key patterns later made human-readable keys available as an opt-in while the id-keyed layout stays the default.'
status: active
fact_kind: observation
text_ref: papra-issues:#352; papra-docs:03-guides/09-storage-key-patterns.mdx#legacy-default
tags:
  - bootstrap
  - review:conflict
  - knowledge-source:papra-issues
  - knowledge-source:papra-docs
origin:
  kind: agent
  recorded_at: '2026-10-14T12:07:31.409Z'
id: FACT-BOOTSTRAP-CONFLICT-E87AB4BFFE369525
type: fact
---
Issue #352 declined storing files under their names; storage key patterns later made human-readable keys available as an opt-in while the id-keyed layout stays the default.

## Evidence

- papra-hq/papra GitHub issues - #352: Stored files are keyed by document id, not by the document's file name; the default storage layout is {{organization.id}}/originals/{{document.id}}.
  > I think it's not worth it for now, but we might reevaluate this later.
- Papra documentation site (apps/docs) - 03-guides/09-storage-key-patterns.mdx#legacy-default: Storage key patterns are opt-in: the legacy storage key system stays the default (DOCUMENT_STORAGE_USE_LEGACY_STORAGE_KEY_DEFINITION_SYSTEM=true) for backward compatibility.
  > At the moment, Papra uses the legacy storage key system for backward compatibility.
