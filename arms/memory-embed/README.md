# Arm `memory-embed`

The `memory` arm's notes store, searched by meaning as well as by keywords. Queries and notes are embedded
with potion-base-8M, the static embedding that Kibi's search-hints plugin bundles, loaded from that
package at the version in `../kibi/versions.env`. The keyword (TF-IDF) and embedding rankings are fused by
reciprocal rank. Everything else is the `memory` arm: the same tools, the same seeding, the same sentence
in `CLAUDE.md`.

It is the counterpart of `kibi-hints`: the two arms that get embeddings get the same ones.

Stands for: vector memory databases (mem0, Zep) with hybrid search.
