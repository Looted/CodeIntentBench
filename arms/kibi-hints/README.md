# kibi-hints

The `kibi` arm with Kibi's search-hints plugin installed and active (`kibi-plugin-search-hints`, version
in `../kibi/versions.env`). When `kb_search` gives a weak lexical answer, the plugin ranks requirements
by meaning with the bundled potion-base-8M static embedding and the answer suggests up to ten of them.

The plugin is a separate arm so that embeddings are compared fairly: `memory-embed` gets the same model.
The `kibi` arm itself runs without it.
