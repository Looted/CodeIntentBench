---
title: content_extraction.image_rotation honours_exif_rotation = True
status: active
fact_kind: property_value
subject_key: content_extraction.image_rotation
property_key: honours_exif_rotation
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C43652F73A85D746
claim_text: OCR reads images in the rotation stored in their EXIF metadata
text_ref: REQ-papra-ocr-honours-exif-rotation
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1469: Fixed OCR extraction for images whose rotation is stored in'
  recorded_at: '2026-11-16T10:22:45.755Z'
id: FACT-papra-content-extraction-image-rotation-honours-exif-rotation
type: fact
---
OCR reads images in the rotation stored in their EXIF metadata.

Modeled from REQ-papra-ocr-honours-exif-rotation so the claim can be checked for contradictions.
