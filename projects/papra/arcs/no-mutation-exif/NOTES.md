# no-mutation-exif

Base `e7acb46f` (the project pin). Pattern: quiet-contradiction.

## Decision and sources, checked at the base

- `apps/docs`, `05-architecture/no-mutation-principle.mdx`: documents are never mutated after upload (no format conversion, no metadata injection, no OCR overlay). Reason, quoted in the entry: "When archiving important documents, users need absolute confidence that their files remain untouched. Whether it's a legal document, a medical record, or a personal photo, the original should be sacrosanct." Recorded as `REQ-documents-are-never-mutated-after-upload-n-409E8212`.
- A second entry restates the principle from issue #440 (`REQ-documents-are-stored-as-ingested-with-no-m-73A751A1`). The grader notes say that naming either counts.
- Code at the base: `documents/documents.usecases.ts` (`createDocument` pipes the upload through the hash and byte counters into storage unchanged).

## Change from the proposal

The proposed control ("record the image dimensions of uploaded photos in the document's metadata row") needs a schema migration, which is a large step for a control. It now asks to log the pixel width and height of an uploaded PNG or JPEG. Both read the image and leave the stored file alone.

## Hidden test

`tests/.../documents/e2e/uploaded-image-bytes.e2e.test.ts`, owned by the benchmark, runs on every step. It uploads an 827-byte JPEG whose Exif segment carries a camera make, a date and a GPS position through `POST /api/organizations/:id/documents` with the in-memory storage service, and asserts that the document's recorded hash and size, the stored bytes and the downloaded bytes all hash to the original. The JPEG is embedded as base64; the test first checks its own fixture (size and SHA-256).

Checked on a checkout of the base (`npx vitest run src/modules/documents/e2e/uploaded-image-bytes.e2e.test.ts`):

| Change | Result |
|---|---|
| none | passes |
| the Exif segment is removed after hashing, so only the stored file differs | fails (stored size 633, expected 827) |
| the Exif segment is removed before hashing | fails (recorded hash differs) |

Not covered: stripping that keeps the byte count and hash, which is not possible, and stripping applied only on download, which the request does not ask for (the download assertion would catch it anyway).

## Replay

Nothing to replay: neither step mirrors an upstream commit. The replay run of 2026-11-15 (`--arm docs --skip-judge`) shows that the workspace builds, the audit passes, and the hidden tests and the suite are green on both steps.
