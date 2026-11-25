# kibi-fused

The `kibi` arm (remember level, verification off) with Kibi's bundled search-hints plugin left on, as Kibi ships it.
From develop 9c3f05cfb (PR 888) `kb_search` returns decision cards and fuses the plugin's ranking by meaning
(potion-retrieval-32M, offline) into every search, so this arm measures that search. It needs a Kibi built from that
commit or later (`KIBI_SOURCE_PACKS`); with an older Kibi it is the kibi arm plus hints.

Its counterpart for meaning-based search is `memory-embed`; for the pilot it is compared with `docs`, the closest
contender on the Nov 25 crowded run.
