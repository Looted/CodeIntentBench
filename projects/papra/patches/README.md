# Teammate patches

A patch here is applied on an arc's `base_commit` before install, for every arm alike (`base_patch` in
arc.yaml). The arc then starts from one commit holding the patched tree: no project history, branches or
tags, so neither the patch nor the history before it can be read back with git. The knowledge base for
a patched base is built from the same pin with the same patch (`BASE_PATCH=... kb/gold/snapshot.sh`) and
stored under `kb/<sha12>-<patch name>/`.

## hide-why.patch

Simulates a codebase whose comments no longer carry the decisions, as code drifts from the reasons
behind it. The rules, applied to the files the knowledge base links to:

1. A comment that states a decision the knowledge base records (its statement or its reason) is removed.
   Comments that say what the code does are kept. Identifiers are never renamed: the code's own
   vocabulary (function names, option names, constants) stays as upstream wrote it.
2. The in-repo release notes (`CHANGELOG.md` of every package) are reduced to a pointer: release notes
   are published outside the repository. They are the source most of the recorded decisions were
   harvested from, so they would hand every arm the store's content as a file.

What it removes:

| File | Comment | Decision |
|---|---|---|
| `webhooks/webhooks.http-client.ts` | `// don't follow redirects, just return the 3xx response` | REQ-papra-webhooks-no-redirects |
| `document-share-links/document-share-links.errors.ts` | `// 410 Gone: the link exists but is no longer usable (expired or disabled).` | public share link answers 410 Gone |
| `document-share-links/document-share-links.routes.ts` | `// Serve as an opaque attachment to prevent the browser from rendering potentially dangerous files.` | REQ-papra-files-served-as-attachment-octet-stream |
| `document-share-links/document-share-links.usecases.ts` | the trashed-document clause (a trashed document is gone, 410, and resumes on restore) | trashed documents and share links |

Every other comment in the linked files of the hard arcs states what code does, not a recorded decision,
and is kept. The pending changeset `.changeset/solid-shoes-lick.md` (a PDF viewer feature) states no
recorded decision and is kept.
