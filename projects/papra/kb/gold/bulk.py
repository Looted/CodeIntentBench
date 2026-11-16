# Decisions harvested from Papra's release changelogs (changelog.json: every changeset entry of apps/*/CHANGELOG.md
# with its package, version, PR, commit and date). Each entry is one requirement: its statement is the clauses joined
# with '; ', its excerpt the verbatim changeset text, its date and commit the changeset's. A reason is recorded only
# when the changeset itself states one (quoted); otherwise the requirement says "Reason not stated."
# spec.py merges BULK_SPEC and BULK_SUBJECTS; apply.py appends BULK_CLAIMS to later.json's claims.
# A fact tuple may carry a fifth element, a version tag, so a superseded requirement keeps its own fact
# (FACT-papra-<subject>-<property>-<tag>) instead of sharing the current one.
import json, os

_CL = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'changelog.json')))
PRS = 'papra-hq/papra release changelogs: '

def _find(key):
    """The one app changeset entry whose text contains key."""
    hits = [i for i, e in enumerate(_CL) if key in e['text'] and e['pkg'] in ('app', 'docs', 'webhooks', 'lecture')]
    if len(hits) != 1: raise SystemExit(f'changelog key {key!r} matches {len(hits)} entries')
    return hits[0]

BULK_SUBJECTS, _SUBJ = {}, {}
def S(key, title, _idx, definition):
    """A subject; its source reference is the changeset of the first decision that constrains it (set by E)."""
    _SUBJ[key] = (title, definition)

BULK_SPEC, BULK_CLAIMS = {}, []
def E(slug, key, component, clauses, why=None, sup=(), extra=()):
    """One decision from the changeset entry whose text contains key (plus extra entries quoted in the excerpt)."""
    idx = _find(key); e = _CL[idx]; rid = f'REQ-papra-{slug}'
    statement = '; '.join(c for c, _ in clauses) + '.'
    excerpt = '\n'.join(_CL[i]['text'] for i in (idx, *map(_find, extra)))
    claim = {'id': rid, 'since': e['date'], 'commit': e['commit'], 'component': component, 'sourceId': 'papra-changelog',
             'reference': f"{e['pkg']} {e['version']} changelog, #{e['pr']}: {e['text'][:60].rstrip()}", 'statement': statement, 'excerpt': excerpt}
    if why: claim['rationale'] = f"The changeset of #{e['pr']} ({e['date']}): {why}"
    if sup:
        claim['supersedes'] = [s if s.startswith('REQ-') else f'REQ-papra-{s}' for s in sup]
        claim['why_changed'] = (f"The changeset of #{e['pr']} ({e['date']}) gives the reason for the change: {why}" if why else
                                f"Reason not stated. The changeset of #{e['pr']} ({e['date']}) replaces the earlier behaviour without saying why it changed.")
    BULK_CLAIMS.append(claim); BULK_SPEC[rid] = list(clauses)
    for _, f in clauses:
        if f[1] in _SUBJ and f[1] not in BULK_SUBJECTS:
            BULK_SUBJECTS[f[1]] = (_SUBJ[f[1]][0], f"{PRS}{e['pkg']} {e['version']} (#{e['pr']})", _SUBJ[f[1]][1])

# ---------------------------------------------------------------- subjects
S('storage.driver_delete', 'Storage driver file deletion', 1, "What a document storage driver does with a file when Papra deletes the document's file: the bytes are removed from the backend. It is not trashing a document, which keeps the file.")
S('storage.b2_driver', 'Backblaze B2 storage driver', 2, "The dedicated Backblaze B2 document storage driver (DOCUMENT_STORAGE_DRIVER=b2). It is not the S3 driver pointed at B2's S3-compatible endpoint.")
S('storage.s3_driver', 'S3 storage driver', 275, "The document storage driver for S3-compatible object stores (AWS S3, Backblaze B2 via its S3 API, MinIO and others).")
S('storage.azure_driver', 'Azure Blob storage driver', 3, "The document storage driver that keeps files in Azure Blob Storage.")
S('documents.count', 'Organization document count', 12, "The number of documents Papra reports for an organization (document count and statistics endpoint).")
S('documents.statistics', 'Document statistics endpoint', 112, "GET /api/organizations/:organizationId/documents/statistics: counts and sizes of an organization's documents.")
S('email.sending', 'Transactional email sending', 20, "How the server sends transactional emails (invitations, password resets, verification): the configured email driver and its settings.")
S('email.templates', 'Email template rendering', 243, "The rendering of transactional email bodies from templates, including user-provided values such as the user's name.")
S('billing.manage_subscription', 'Manage subscription entry', 23, "The \"Manage subscription\" action in an organization's settings, which opens the billing portal.")
S('config.client_base_url', 'Client base URL (CLIENT_BASE_URL)', 27, "The public URL of the web client, used for links in emails and redirects; set with CLIENT_BASE_URL.")
S('config.app_base_url', 'Application base URL (APP_BASE_URL)', 53, "APP_BASE_URL: one public base URL for both the server and the client of a Papra instance.")
S('documents.file_download', 'Document file download response', 88, "The HTTP response that serves a document's stored file to the browser (preview and download).")
S('documents.filename_encoding', 'Document file name encoding', 98, "How Papra decodes and returns the original file name of an uploaded document, including in the Content-Disposition header.")
S('tags.api_key_access', 'Tag changes through API keys', 37, "Adding or removing tags on a document with an API key instead of a user session.")
S('tags.color', 'Tag colour validation', 99, "The server-side validation of a tag's hex colour code.")
S('ocr.languages', 'OCR languages', 42, "The languages the built-in OCR uses when reading images and scanned PDFs (DOCUMENTS_OCR_LANGUAGES).")
S('ocr.tesseract_engine', 'Tesseract engine selection', 139, "Which Tesseract implementation the built-in OCR uses: the native tesseract CLI or tesseract.js.")
S('auth.email_login', 'Email and password login', 46, "Signing in with an email address and password, as opposed to an OAuth or SSO provider.")
S('auth.registration', 'New account registration', 308, "Creating a new user account on the instance, through the sign-up page, the authentication API or an OAuth provider; controlled by AUTH_IS_REGISTRATION_ENABLED.")
S('auth.register_link', 'Register link on the login page', 180, "The \"Don't have an account? Register\" link shown on the login page.")
S('auth.forbidden_email_domains', 'Forbidden registration email domains', 145, "AUTH_FORBIDDEN_EMAIL_DOMAINS: email domains that may not be used to register a new account.")
S('auth.secret', 'Authentication secret (AUTH_SECRET)', 154, "AUTH_SECRET: the server secret that signs authentication sessions and tokens.")
S('auth.password_reset', 'Password reset', 303, "Resetting a user's password through the reset-password flow.")
S('auth.oauth_custom_providers', 'Custom OAuth providers', 17, "OAuth2/OIDC providers configured by the instance (AUTH_PROVIDERS_CUSTOMS) for signing in.")
S('webhook.delivery', 'Webhook delivery', 61, "Sending an organization webhook's HTTP request to its URL when a subscribed event happens.")
S('webhook.signature', 'Webhook signature and payload', 59, "The signature headers and payload format of outgoing organization webhooks.")
S('webhook.secret', 'Webhook signing secret', 114, "The optional secret an organization webhook uses to sign its requests.")
S('webhook.fields', 'Webhook create and update parameters', 237, "The name, secret and URL parameters of the webhook creation and update API endpoints.")
S('webhook.listing', 'Organization tag and webhook listing', 200, "The API endpoints that list an organization's tags and webhooks.")
S('content_extraction.execution', 'Content extraction execution', 62, "When and where the text extraction (including OCR) of an added document runs.")
S('content_extraction.formats', 'Content extraction file formats', 122, "The file formats from which the built-in extraction can read text.")
S('content_extraction.pdf_fallback', 'PDF page-render OCR fallback', 216, "What the built-in extraction does with a PDF page that has neither text nor images suitable for OCR.")
S('content_extraction.external_providers', 'External content extraction providers', 287, "Content extraction services other than Papra's internal engine (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combinable by document type and fallback.")
S('content_extraction.external_timeout', 'External extraction request timeout', 300, "How long Papra waits for an external content extraction service (Docling, Mistral OCR, Azure DI) to process a document.")
S('content_extraction.image_rotation', 'Image rotation in OCR', 310, "How OCR handles an image whose rotation is stored in EXIF metadata.")
S('content_extraction.docling_options', 'Docling conversion options', 325, "DOCLING_OPTIONS: the JSON conversion options (OCR languages and others) sent to a Docling server.")
S('tagging_rules.execution_order', 'Tagging rule execution order', 67, "When tagging rules run on an added document relative to its content extraction.")
S('tagging_rules.side_effects', 'Side effects of automatic tagging', 103, "What else happens when a tagging rule adds a tag to a document: activity log entries and webhooks.")
S('tagging_rules.delete_confirmation', 'Tagging rule deletion confirmation', 303, "The confirmation step shown before a tagging rule is deleted in the UI.")
S('documents.open_in_new_tab', 'Open in new tab button', 87, "The document page button that opened the stored file directly in a new browser tab.")
S('tasks.driver', 'Task service database driver', 89, "The database driver of the background task service (memory or libsql/sqlite).")
S('tasks.sqlite_pragma', 'Task service sqlite PRAGMA statements', 94, "The PRAGMA statements (journal mode, synchronous and similar settings) that the sqlite-backed task service runs while migrating its own database.")
S('tasks.scheduled_startup', 'Scheduled tasks at startup', 265, "Whether scheduled tasks run once immediately when the server starts (RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT and per-task settings).")
S('upload.max_size', 'Maximum upload size (DOCUMENT_STORAGE_MAX_UPLOAD_SIZE)', 90, "The instance-wide maximum size of an uploaded file, DOCUMENT_STORAGE_MAX_UPLOAD_SIZE. It is not a plan's per-organization file size limit.")
S('upload.client_guard', 'Client-side upload size guard', 85, "The check in the web client that rejects a file before it is uploaded.")
S('upload.concurrency', 'Browser upload concurrency', 137, "How many files the web client uploads at the same time.")
S('upload.organization_scope', 'Upload target organization', 149, "The rule deciding into which organizations a user may upload documents, relative to the organizations the user belongs to.")
S('upload.route_timeout', 'Document upload route timeout', 158, "The request timeout of the document upload route, separate from the default route timeout.")
S('config.route_timeout', 'Default route timeout setting', 159, "The server's default request timeout, config.server.defaultRouteTimeoutMs.")
S('rate_limit.ip_header', 'Rate limit client IP header', 100, "The request header from which the rate limiter reads the client IP address.")
S('intake_email.origin_address', 'Intake email origin address validation', 108, "The validation of the sender and recipient addresses carried by an incoming intake email webhook.")
S('intake_email.forwarded_destination', 'Forwarded intake email destination', 147, "Which recipient address identifies the intake email when a message was forwarded.")
S('intake_email.attachment_mime', 'Intake email attachment MIME type', 202, "The content type Papra stores for a file that arrived as an attachment of an intake email, which decides how the document is previewed and extracted.")
S('intake_email.catch_all_driver', 'Intake email catch-all driver', 91, "The intake email driver that accepts mail for any username on a configured domain, with a separate username generation driver.")
S('server.hostname', 'Server hostname setting', 117, "The network interface address or host name on which the HTTP server listens for connections.")
S('server.process_mode', 'Server process mode', 121, "Whether a Papra process starts the API, the background workers, or both.")
S('webhook.redirects', 'Webhook HTTP redirects', 258, "What a webhook delivery does when the target answers with an HTTP 3xx redirect.")
S('webhook.ssrf_at_delivery', 'SSRF validation at webhook delivery', 259, "The SSRF check run on the resolved address when a webhook request is sent, in addition to the check at creation and update.")
S('auth.session_listing', 'Server authentication logging', 141, "Log output of the server's authentication middleware.")
S('organizations.single_redirect', 'Root redirect to the only organization', 174, "Where the client sends a user who opens / and is a member of exactly one organization.")
S('tags.search_link', 'Tag search link', 175, "The search query the client generates when a user clicks a tag to find its documents.")
S('tags.list_order', 'Tag list order', 176, "The default order of the organization's tag list page.")
S('release.package_name', 'Application distribution package name', 180, "The name of the internal package that versions the Papra application and its release tags.")
S('tags.name_normalization', 'Tag name and description trimming', 186, "Whitespace normalization of a tag's name and description when it is created or updated.")
S('search.tag_name_matching', 'Tag name matching in search queries', 187, "How the search syntax compares the name written after tag: with the names of the organization's tags, including letter case.")
S('tags.duplicate_update', 'Renaming a tag to an existing name', 191, "The error returned when a tag is updated with a name another tag of the organization already has.")
S('tags.duplicate_status', 'Duplicate tag status code', 228, "The HTTP status code the API returns when a tag that already exists is created, or a tag is added to a document that already has it.")
S('tags.per_organization_limit', 'Tags per organization limit', 204, "MAX_TAGS_PER_ORGANIZATION: the maximum number of tags an organization can create.")
S('tags.mutation_scope', 'Tag mutation scoping', 247, "Which tag the tag update and delete endpoints may change, relative to the organization in the URL.")
S('tags.delete_response', 'Tag deletion response', 248, "The HTTP status code and body the API answers with when a tag is deleted, or when the tag to delete does not exist.")
S('tags.inline_picker_casing', 'Inline tag picker casing', 289, "The name the inline tag picker suggests when the typed text matches no existing tag.")
S('documents.search_endpoint', 'Document search endpoint', 152, "The API endpoint that searches an organization's documents and the shape of its response.")
S('documents.list_endpoint', 'Document list endpoint', 181, "GET /api/organizations/:organizationId/documents and its query parameters.")
S('documents.sort', 'Document list sort', 252, "The order in which the document list and search return documents: the sortField and sortOrder parameters, the defaults, and the tie-break.")
S('documents.trash_response', 'Trash document response', 312, "The HTTP response of DELETE /api/organizations/:organizationId/documents/:documentId, which moves a document to the trash.")
S('documents.orphan_cleanup', 'Orphan file cleanup on duplicate of a trashed document', 161, "The file written by an upload whose content matches a trashed document: it is an orphan once the trashed document is restored.")
S('documents.document_date', 'Document date', 214, "The document date property: the date the document itself carries (an invoice date, a letter's date), separate from its creation (import) date.")
S('documents.reprocess', 'Document reprocess endpoint', 318, "The API action that runs content extraction, auto tagging and tagging rules again on a document that already exists, without uploading it again.")
S('documents.batch_tags', 'Batch document tag management', 251, "The API endpoint that adds or removes tags on many documents in one request.")
S('search.index_keys', 'Search index keys', 166, "The columns the search index uses to locate a document's entry.")
S('search.query_length', 'Search query length', 246, "The maximum number of characters a document search query may contain before the API refuses it.")
S('search.custom_property_filters', 'Custom property search filters', 220, "Search filters on custom property values (status:todo, has:status).")
S('search.quoted_filters', 'Quoted search filters', 223, "Search filters whose name contains spaces, written in quotes (\"warranty date\":>2026).")
S('search.date_filter', 'date: search filter', 215, "The search syntax that selects documents by their document date (date:>2026) or by whether they have one at all (has:date).")
S('config.boolean_env', 'Boolean environment variables', 225, "How the server parses environment variables that hold a boolean.")
S('api_keys.current', 'Current API key endpoint', 162, "GET /api/api-keys/current, which describes the API key used for the request.")
S('api_keys.custom_property_permissions', 'API key custom property permissions', 270, "The API key permissions that let a key create, update and delete an organization's custom property definitions and values.")
S('custom_properties.delete_response', 'Custom property deletion response', 271, "The HTTP response of DELETE /api/organizations/:organizationId/custom-properties/:propertyDefinitionId.")
S('admin.user_deletion', 'Admin user deletion', 275, "Deleting a user from the platform admin user details page.")
S('storage.migration_script', 'Document storage migration script', 212, "The script that moves documents from one storage service to another or rewrites their storage keys.")
S('storage.s3_checksum', 'S3 checksum headers', 274, "The checksum verification headers the S3 driver sends.")
S('storage.s3_client', 'S3 client library', 276, "The library the S3 storage driver uses to talk to the object store.")
S('ingestion_folder.watcher_stability', 'Ingestion folder file stability wait', 275, "How long the ingestion folder watcher waits for a file's size to stop changing before it consumes the file.")
S('auto_tagging.ai', 'AI auto-tagging', 280, "Tagging an added document with AI from its extracted content, using the organization's tag names and descriptions.")
S('auto_tagging.organization_settings', 'Auto-tagging organization settings', 281, "The per-organization auto-tagging settings page: enable, allow new tags, maximum tags per document.")
S('auto_tagging.ai_credits', 'AI credit accounting', 317, "The recording of AI credit usage for auto-tagging and other AI features.")
S('docker.node_image', 'Docker base image pinning', 282, "How the Dockerfile references its Node.js base image.")
S('client.fonts', 'Client fonts', 309, "Where the web client loads its fonts from.")
S('billing.stripe_webhook', 'Stripe webhook verification', 306, "The endpoint that receives Stripe billing events for subscriptions, and how it checks that an event really comes from Stripe.")
S('storage_pattern.document_date', 'Document date in storage key patterns', 322, "The pattern expressions that put a document's own date or its creation date into the folder or file name of its storage key.")
S('activity_log.document', 'Document activity log', 25, "The per-document log of who did what (created, updated, tagged, trashed) and when.")

B, I, T = 'b', 'i', 's'
# ---------------------------------------------------------------- storage
E('storage-driver-hard-deletes-files', 'Properly hard delete files', 'storage', [
  ('Deleting a document file removes it from the storage backend: storage drivers hard delete the file', (B, 'storage.driver_delete', 'hard_deletes_file', True))])
E('b2-storage-driver-supported', 'Added support for b2 document storage', 'storage', [
  ('Documents can be stored in Backblaze B2 through a dedicated b2 storage driver', (B, 'storage.b2_driver', 'available', True, 'v1'))])
E('azure-blob-storage-driver', 'azure blob document storage', 'storage', [
  ('Documents can be stored in Azure Blob Storage through the azure storage driver', (B, 'storage.azure_driver', 'available', True))])
E('b2-storage-driver-dropped', 'Dropped support for the dedicated backblaze', 'storage', [
  ('The dedicated Backblaze B2 storage driver is no longer supported', (B, 'storage.b2_driver', 'available', False)),
  ('B2 is used through the S3 storage driver', (T, 'storage.b2_driver', 'replacement', 's3_driver'))],
  why='"Dropped support for the dedicated backblaze b2 storage driver as b2 now fully support s3 client".', sup=['b2-storage-driver-supported'])
E('storage-missing-file-errors', 'Properly handle missing files errors', 'storage', [
  ('Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure', (B, 'storage.driver_delete', 'missing_file_has_dedicated_error', True))])
E('s3-checksum-when-required', 'Set S3 checksum verification', 'storage', [
  ('The S3 storage driver sends checksum verification headers only when required', (T, 'storage.s3_checksum', 'checksum_mode', 'when_required'))],
  why='"Set S3 checksum verification headers to \\"when required\\" to fix Backblaze B2 storage issues."')
E('s3-driver-uses-s3mini', 'Replace the AWS S3 SDK', 'storage', [
  ('The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK', (T, 'storage.s3_client', 'library', 's3mini'))],
  why='it "removes 97 transitive packages (~23 MB unpacked) from the server, replacing them with a single more performant and dependency-free package".')
E('storage-migration-script', 'document storage migration script', 'storage', [
  ('A document storage migration script moves documents from one storage service to another or updates their storage keys or configuration', (B, 'storage.migration_script', 'available', True))])
E('storage-pattern-document-date', 'Added `document.date` and `document.createdAt`', 'storage', [
  ('Storage key patterns support {{document.date}} and {{document.createdAt}}', (B, 'storage_pattern.document_date', 'available_as_expression', True)),
  ('documents without a date use no-date, which the default transformer can change', (T, 'storage_pattern.document_date', 'value_when_missing', 'no-date'))])

# ---------------------------------------------------------------- documents
E('document-count-excludes-deleted', 'Excluded deleted documents from doc count', 'documents', [
  ("Deleted documents are excluded from an organization's document count", (B, 'documents.count', 'includes_deleted_documents', False))])
E('document-statistics-deleted-and-total', 'Added deleted and total document counts', 'documents', [
  ('The document statistics endpoint returns deleted and total document counts and sizes alongside the active ones', (B, 'documents.statistics', 'includes_deleted_and_total', True))])
E('files-served-as-attachment-octet-stream', 'serving files as attachement', 'documents', [
  ("A document's file is served as an attachment with an application/octet-stream content type", (T, 'documents.file_download', 'content_type', 'application_octet_stream'))],
  why='"Enhanced security by serving files as attachement and with an octet-stream content type".')
E('no-open-in-new-tab', 'Removed the "open in new tab"', 'documents', [
  ('The document page has no button that opens the file in a new tab', (B, 'documents.open_in_new_tab', 'available', False))],
  why='"Removed the \\"open in new tab\\" button for security improvement (xss prevention)".')
E('file-names-decoded-as-utf8', 'Properly handle file names encoding', 'documents', [
  ('Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept', (T, 'documents.filename_encoding', 'encoding', 'utf8'))], extra=('Fix content disposition header to support non-ascii',))
E('document-trash-returns-204', 'The route to trash a document', 'documents', [
  ('Trashing a document (DELETE /api/organizations/:organizationId/documents/:documentId) returns 204 No Content with no body', (I, 'documents.trash_response', 'status_code', 204))])
E('orphan-file-cleanup-on-trashed-duplicate', 'Properly cleanup orphan file', 'documents', [
  ('When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored', (B, 'documents.orphan_cleanup', 'orphan_file_deleted', True))])
E('document-date-property', 'Add the document date property', 'documents', [
  ('Documents have a document date property, separate from their creation date', (B, 'documents.document_date', 'separate_from_created_at', True))])
E('document-reprocess-endpoint', 'Added an API endpoint to reprocess', 'documents', [
  ('POST /api/organizations/:organizationId/documents/:documentId/reprocess re-runs content extraction, auto tagging and tagging rules on an existing document', (T, 'documents.reprocess', 'reruns', 'extraction_auto_tagging_and_tagging_rules'))])
E('batch-document-tag-endpoint', 'Added a batch document tag management API', 'documents', [
  ('A batch API endpoint adds or removes tags on many documents in one request', (B, 'documents.batch_tags', 'available', True))])
E('document-activity-log', 'Added document activity log', 'documents', [
  ('Every document keeps an activity log of the actions taken on it', (B, 'activity_log.document', 'available', True))])

# ---------------------------------------------------------------- search, list and sort (3-step chains)
E('search-endpoint-nested-results', 'the document search endpoint return format changed', 'search', [
  ('The document search endpoint (GET /api/organizations/:organizationId/documents/search) nests its results under searchResults.documents', (T, 'documents.search_endpoint', 'response_shape', 'search_results_documents', 'v1')),
  ('each result carries only the document id and name', (T, 'documents.search_endpoint', 'result_fields', 'id_and_name', 'v1'))])
E('search-endpoint-complete-documents', 'Document search endpoint now returns complete documents', 'search', [
  ('The document search endpoint returns complete documents and a totalCount of all matches', (T, 'documents.search_endpoint', 'response_shape', 'documents_and_total_count', 'v2')),
  ('it no longer nests results under searchResults', (B, 'documents.search_endpoint', 'nests_under_search_results', False, 'v2'))],
  sup=['search-endpoint-nested-results'])
E('documents-list-no-tag-filter', 'Removed the possibility to filter by tag', 'search', [
  ('The document list route no longer accepts a tags filter', (B, 'documents.list_endpoint', 'accepts_tags_parameter', False)),
  ('documents are filtered by tag through a tag: search query', (T, 'documents.list_endpoint', 'tag_filtering_via', 'tag_search_filter'))])
E('search-merged-into-documents-list', 'removed the `/api/organizations/:organizationId/documents/search` endpoint', 'search', [
  ('The /documents/search endpoint is removed', (B, 'documents.search_endpoint', 'available', False)),
  ('GET /api/organizations/:organizationId/documents takes an optional searchQuery and returns all documents when it is empty', (T, 'documents.list_endpoint', 'search_parameter', 'searchQuery')),
  ('the match count is returned as documentsCount, not totalCount', (T, 'documents.list_endpoint', 'count_field', 'documentsCount'))],
  sup=['search-endpoint-complete-documents'])
E('document-sort-parameters', 'Added `sortField` and `sortOrder`', 'search', [
  ('The document list accepts sortField (createdAt, updatedAt, name or documentDate) and sortOrder (asc or desc)', (T, 'documents.sort', 'sort_fields', 'createdAt_updatedAt_name_documentDate')),
  ('the documents page sorts by creation date by default', (T, 'documents.sort', 'client_default_field', 'createdAt', 'v1'))], extra=('Added sorting option in the documents list',))
E('document-sort-by-document-date', 'Sort documents by document date instead', 'search', [
  ('The documents page sorts documents by document date instead of creation date', (T, 'documents.sort', 'client_default_field', 'documentDate'))],
  sup=['document-sort-parameters'])
E('document-sort-falls-back-to-import-date', 'Document sort order fallback', 'search', [
  ('Documents that tie on the chosen sort field are ordered by their importation (creation) date', (T, 'documents.sort', 'tie_break_field', 'createdAt'))])
E('search-index-by-ids', 'Improved search speed by using document and organization ids', 'search', [
  ('The search index locates entries by document id and organization id', (T, 'search.index_keys', 'keys', 'document_id_and_organization_id'))],
  why='"Improved search speed by using document and organization ids in index".')
E('search-query-max-1024', 'Limited search query to 1024', 'search', [
  ('A search query is limited to 1024 characters', (I, 'search.query_length', 'max_characters', 1024))])
E('tag-filter-case-insensitive', 'tag filters are now case-insensitive', 'search', [
  ('The tag: search filter matches tag names case-insensitively', (B, 'search.tag_name_matching', 'case_insensitive', True))],
  why='tag filters are case-insensitive "as tags names are case-insensitive".')
E('custom-property-search-filters', 'Added support for searching by custom properties', 'search', [
  ('Documents can be searched by custom property value (status:todo) and by presence (has:status, -has:status)', (B, 'search.custom_property_filters', 'available', True))])
E('quoted-search-filters', 'Added support for quoted search filters', 'search', [
  ('Search filters can be quoted, so a filter name may contain spaces', (B, 'search.quoted_filters', 'available', True))])
E('date-search-filter', 'Added the `date` search filter', 'search', [
  ('The date: filter selects documents by document date (date:>2026) and has:date by its presence', (B, 'search.date_filter', 'available', True))])

# ---------------------------------------------------------------- tags
E('tags-changeable-with-api-keys', 'Allow for adding/removing tags to document using api keys', 'tags', [
  ('Tags can be added to and removed from documents with an API key', (B, 'tags.api_key_access', 'allowed', True))])
E('tag-colour-case-insensitive', 'api validation of tag colors', 'tags', [
  ('Tag colour hex codes are validated case-insensitively, so uppercase codes are accepted', (B, 'tags.color', 'hex_case_insensitive', True))], extra=('Fixes 400 error when submitting tags with uppercase hex',))
E('tag-names-trimmed', 'Trim tag names and descriptions', 'tags', [
  ('Tag names and descriptions are trimmed on creation and update', (B, 'tags.name_normalization', 'trimmed', True))],
  why='"to avoid leading/trailing spaces".')
E('tag-rename-duplicate-error', 'Added explicit error when trying to update a tag', 'tags', [
  ('Updating a tag with a name another tag already has returns an explicit duplicate-name error', (B, 'tags.duplicate_update', 'explicit_error', True))])
E('tag-duplicates-return-409', 'Api now returns a 409 status code', 'tags', [
  ('Creating a tag that already exists returns 409, not 400', (I, 'tags.duplicate_status', 'create_duplicate_status', 409)),
  ('adding a tag to a document that already has it returns 409 with a document-already-has-tag error', (I, 'tags.duplicate_status', 'add_existing_tag_status', 409))], extra=('"document already has tag" error',))
E('max-tags-per-organization', 'limit the number of tags that can be created', 'tags', [
  ('An organization can create at most MAX_TAGS_PER_ORGANIZATION tags', (B, 'tags.per_organization_limit', 'configurable', True)),
  ('the default is 200', (I, 'tags.per_organization_limit', 'default', 200))])
E('tag-listing-requires-membership', 'prevented unauthorized listing to organization tags', 'tags', [
  ("Only members of an organization can list its tags and webhooks", (B, 'webhook.listing', 'non_member_can_list', False))])
E('tag-mutations-scoped-to-organization', 'tag updates and deletions were not scoped', 'tags', [
  ('Tag update and delete endpoints only change tags of the organization in the URL', (B, 'tags.mutation_scope', 'scoped_to_url_organization', True))])
E('tag-delete-returns-204', 'Tag deletion endpoint now returns', 'tags', [
  ('Deleting a tag returns 204 No Content', (I, 'tags.delete_response', 'status_code', 204)),
  ('deleting a tag that does not exist in the organization returns 404', (I, 'tags.delete_response', 'missing_tag_status_code', 404))])
E('tag-search-link-quotes-names', 'Fix tag automatic search link', 'tags', [
  ('The search link of a tag whose name has spaces quotes the name (tag:"my tag")', (B, 'tags.search_link', 'quotes_names_with_spaces', True))])
E('tag-list-newest-first', 'Tag list: order tags by creation date', 'tags', [
  ('The tag list is ordered by creation date, newest first', (T, 'tags.list_order', 'default_order', 'created_at_desc'))])
E('inline-tag-picker-keeps-casing', 'inline tag picker lowercasing', 'tags', [
  ('The inline tag picker suggests a new tag with the casing the user typed', (B, 'tags.inline_picker_casing', 'keeps_typed_casing', True))])

# ---------------------------------------------------------------- tagging rules, auto tagging, extraction
E('tagging-rules-after-extraction', 'executed tagging rules before the file content', 'tagging-rules', [
  ("Tagging rules run on a new document only after its content has been extracted", (T, 'tagging_rules.execution_order', 'runs_after', 'content_extraction'))])
E('auto-tagging-logs-activity', 'Save document activity log when auto tagging', 'tagging-rules', [
  ('A tag added by a tagging rule is recorded in the document activity log', (B, 'tagging_rules.side_effects', 'logs_activity', True)),
  ('it triggers the document:tag:added webhook', (B, 'tagging_rules.side_effects', 'triggers_tag_added_webhook', True))], extra=('Trigger tag-added webhooks when auto tagging',))
E('tagging-rule-delete-confirmation', 'deletion confirmation modal when deleting a tagging rule', 'tagging-rules', [
  ('Deleting a tagging rule asks for confirmation first', (B, 'tagging_rules.delete_confirmation', 'required', True))],
  why='"to prevent accidental deletion of tagging rules".')
E('ai-auto-tagging', 'Added AI auto-tagging', 'auto-tagging', [
  ('Extracted documents can be tagged automatically by AI from the tag names and descriptions', (B, 'auto_tagging.ai', 'available', True)),
  ('AI auto-tagging can create tags that do not exist yet', (B, 'auto_tagging.ai', 'can_create_tags', True))])
E('auto-tagging-owner-settings', 'Auto tagging can be configured per organization', 'auto-tagging', [
  ('Auto tagging is configured per organization by its owners', (T, 'auto_tagging.organization_settings', 'managed_by', 'owners')),
  ('owners choose whether it is on, whether it may create tags and the maximum number of tags it adds to a document', (T, 'auto_tagging.organization_settings', 'settings', 'enabled_create_tags_max_tags'))])
E('ai-credits-off-self-hosted', 'Fully disabled AI credit accounting', 'auto-tagging', [
  ('AI credit accounting is disabled by default on self-hosted instances', (B, 'auto_tagging.ai_credits', 'enabled_by_default_self_hosted', False))],
  why='"to silence \\"Failed to register AI credit usage\\" logs".')
E('extraction-runs-in-task-runner', 'content extraction (like OCR) is now done asynchronously', 'content-extraction', [
  ("A document's content extraction runs asynchronously in the background task runner, not during the upload request", (T, 'content_extraction.execution', 'runs_in', 'background_task_runner'))])
E('office-document-extraction', 'Added text extraction support for `.docx`', 'content-extraction', [
  ('Text is extracted from .docx, .odt, .rtf, .pptx, .odp, .xlsx and .ods files', (B, 'content_extraction.formats', 'office_formats_supported', True))], extra=('content extraction support for .xlsx and .ods',))
E('pdf-page-render-ocr-fallback', 'if neither text nor images suitable for OCR', 'content-extraction', [
  ('A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR', (B, 'content_extraction.pdf_fallback', 'renders_pages_for_ocr', True))],
  why='it adds "support for vectorized text".')
E('ocr-languages-configurable', 'DOCUMENTS_OCR_LANGUAGES', 'content-extraction', [
  ('The OCR languages are set with DOCUMENTS_OCR_LANGUAGES', (T, 'ocr.languages', 'setting', 'DOCUMENTS_OCR_LANGUAGES'))])
E('native-tesseract-when-available', 'native tesseract', 'content-extraction', [
  ('The native tesseract CLI is used for OCR when it is installed, and tesseract.js otherwise', (T, 'ocr.tesseract_engine', 'preferred_engine', 'native_cli_when_available'))])
E('external-extraction-providers', 'Add support for external document content extraction', 'content-extraction', [
  ('Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fallback', (B, 'content_extraction.external_providers', 'available', True)),
  ("Papra's internal extraction engine is the default", (T, 'content_extraction.external_providers', 'default_provider', 'internal'))])
E('external-extraction-timeout-5-min', 'Increased and made configurable the timeout of content extraction', 'content-extraction', [
  ('External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds', (I, 'content_extraction.external_timeout', 'default_ms', 300000)),
  ('each timeout is configurable (DOCLING_REQUEST_TIMEOUT_MS, MISTRAL_OCR_REQUEST_TIMEOUT_MS, AZURE_DI_REQUEST_TIMEOUT_MS)', (B, 'content_extraction.external_timeout', 'configurable', True))])
E('ocr-honours-exif-rotation', 'rotation is stored in EXIF', 'content-extraction', [
  ('OCR reads images in the rotation stored in their EXIF metadata', (B, 'content_extraction.image_rotation', 'honours_exif_rotation', True))])
E('docling-options', 'DOCLING_OPTIONS', 'content-extraction', [
  ('Docling OCR languages and conversion options are set with DOCLING_OPTIONS, a JSON object', (T, 'content_extraction.docling_options', 'setting', 'DOCLING_OPTIONS_json'))])

# ---------------------------------------------------------------- webhooks
E('webhooks-deferred', 'Webhooks invocation is now defered', 'webhooks', [
  ('Webhooks are sent in a deferred way, after the request that triggered the event', (B, 'webhook.delivery', 'deferred', True))])
E('webhooks-standard-webhooks-spec', 'match standard-webhook spec', 'webhooks', [
  ('Webhook signatures and payloads follow the standard-webhooks specification', (T, 'webhook.signature', 'format', 'standard_webhooks'))],
  why='the format was changed "to match standard-webhook spec".')
E('webhook-secret-redacted', 'Redacted webhook signing secret', 'webhooks', [
  ('The webhook update API response redacts the signing secret', (B, 'webhook.secret', 'returned_in_update_response', False))])
E('webhooks-without-secret', 'create webhooks without secrets', 'webhooks', [
  ('A webhook can be created without a secret', (B, 'webhook.secret', 'required', False))])
E('webhook-field-size-limits', 'size limits on the webhooks creation', 'webhooks', [
  ('Webhook names are limited to 128 characters', (I, 'webhook.fields', 'name_max_characters', 128)),
  ('webhook secrets are limited to 256 characters', (I, 'webhook.fields', 'secret_max_characters', 256)),
  ('webhook URLs are limited to 2048 characters', (I, 'webhook.fields', 'url_max_characters', 2048))])
E('webhooks-no-redirects', 'Webhooks no longer follow http redirects', 'webhooks', [
  ('Webhook requests do not follow HTTP redirects (3xx responses)', (B, 'webhook.redirects', 'followed', False))],
  why='it addresses security advisory GHSA-5g86-85rp-f9hx (the advisory is cited; the changeset gives no further reason).')
E('webhook-ssrf-at-delivery', 'Webhooks ssrf validation is now enforced when sending', 'webhooks', [
  ('The webhook SSRF check is also enforced when a webhook request is sent, not only when the URL is saved', (B, 'webhook.ssrf_at_delivery', 'enforced', True))],
  why='"preventing potential TOCTOU dns rebinding attacks (the exploitation window was very small and only theoretical though)".')

# ---------------------------------------------------------------- upload
E('max-upload-size-can-be-disabled', 'Fix an issue preventing to disable the max upload size', 'upload', [
  ('Setting the maximum upload size to 0 disables the limit', (I, 'upload.max_size', 'disabled_by_value', 0))])
E('client-rejects-too-big-files', 'client side guard for rejecting too-big files', 'upload', [
  ('The web client rejects a file larger than the allowed size before uploading it', (B, 'upload.client_guard', 'rejects_too_big_files', True))])
E('client-guard-uses-organization-limit', 'Use organization max file size limit for pre-upload', 'upload', [
  ("The client's pre-upload size check uses the organization's maximum file size", (T, 'upload.client_guard', 'limit_source', 'organization_max_file_size'))])
E('browser-upload-concurrency-limited', 'Limit concurrent browser upload', 'upload', [
  ('The web client limits how many files it uploads at once', (B, 'upload.concurrency', 'limited', True))],
  why='"to avoid network crashes".')
E('upload-only-to-member-organizations', 'unauthorized upload to another organization', 'upload', [
  ('A user can only upload documents to an organization they are a member of', (B, 'upload.organization_scope', 'non_member_upload_allowed', False))])
E('upload-route-dedicated-timeout', 'dedicated increased timeout for the document upload route', 'upload', [
  ('The document upload route has its own, longer timeout than other routes', (B, 'upload.route_timeout', 'longer_than_default', True))])
E('default-route-timeout-config-key', 'Changed config key `config.server.routeTimeoutMs`', 'config', [
  ('The default route timeout is the config key server.defaultRouteTimeoutMs', (T, 'config.route_timeout', 'config_key', 'server.defaultRouteTimeoutMs')),
  ('its environment variable is unchanged', (B, 'config.route_timeout', 'env_variable_renamed', False))])
E('max-upload-default-25mb', 'Increased default max file size from 10MB to 25MB', 'upload', [
  ('The default maximum upload size is 25MB (it was 10MB)', (I, 'upload.max_size', 'default_megabytes', 25)),
  ('DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it', (T, 'upload.max_size', 'setting', 'DOCUMENT_STORAGE_MAX_UPLOAD_SIZE'))])

# ---------------------------------------------------------------- email
E('docker-email-dry-run-default', 'Set email setting to dry-run by default', 'email', [
  ('In the Docker image emails are not sent by default: the email setting is dry-run (EMAILS_DRY_RUN)', (T, 'email.sending', 'docker_default_mode', 'dry_run', 'v1'))])
E('email-drivers-logger', 'Reworked the email sending system', 'email', [
  ('Emails are sent through a configurable driver (EMAILS_DRIVER)', (T, 'email.sending', 'driver_setting', 'EMAILS_DRIVER')),
  ('EMAILS_DRY_RUN is removed and EMAILS_DRIVER=logger logs emails instead of sending them', (B, 'email.sending', 'dry_run_setting_available', False))],
  why='the email system was reworked "to be more flexible and allow for different drivers to be used".', sup=['docker-email-dry-run-default'])
E('smtp-email-driver', 'classic SMTP client', 'email', [
  ('Emails can be sent through a classic SMTP server', (B, 'email.sending', 'smtp_supported', True))])
E('email-user-name-sanitized', 'Properly sanitize user name', 'email', [
  ("The user's name is sanitized before it is put in email content", (T, 'email.templates', 'user_value_handling', 'sanitized', 'v1'))],
  why='"to prevent potential XSS or html injection attacks" (security advisory GHSA-6f8x-2rc9-vgh4).')
E('email-html-escaped', 'Html-ish characters in email templates', 'email', [
  ('HTML-like characters in email templates are escaped, not removed', (T, 'email.templates', 'user_value_handling', 'escaped'))],
  sup=['email-user-name-sanitized'])

# ---------------------------------------------------------------- config, server, deploy
E('client-base-url-docker-default', 'Set CLIENT_BASE_URL default value', 'config', [
  ('In the Docker images CLIENT_BASE_URL defaults to http://localhost:1221', (T, 'config.client_base_url', 'docker_default', 'http://localhost:1221', 'v1'))])
E('app-base-url', 'Introduce APP_BASE_URL', 'config', [
  ('A single APP_BASE_URL sets the base URL of both the server and the client', (B, 'config.app_base_url', 'shared_by_server_and_client', True))],
  why='it was introduced "to mutualize server and client base url".', sup=['client-base-url-docker-default'])
E('stricter-boolean-env', 'App environment configuration validation is now a bit stricter', 'config', [
  ('A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false', (B, 'config.boolean_env', 'invalid_value_reads_false', False))])
E('rate-limit-ip-header-configurable', 'env variable to configure ip header for rate limit', 'config', [
  ('The header the rate limiter reads the client IP from is configurable', (B, 'rate_limit.ip_header', 'configurable', True))])
E('server-hostname-configurable', 'Added server hostname configuration', 'config', [
  ('The server hostname is configurable', (B, 'server.hostname', 'configurable', True))])
E('api-workers-or-both', 'start either just the api, just the workers', 'config', [
  ('A process can start just the API, just the workers, or both', (T, 'server.process_mode', 'options', 'api_workers_both')),
  ('both is the default', (T, 'server.process_mode', 'default', 'both'))])
E('task-service-libsql-driver', 'Libsql/Sqlite driver for the tasks service', 'config', [
  ('The background task service can use a libsql/sqlite driver', (B, 'tasks.driver', 'libsql_supported', True))])
E('task-migrations-pragma-optional', 'disable PRAGMA statements', 'config', [
  ('PRAGMA statements in the sqlite task service migrations can be disabled', (B, 'tasks.sqlite_pragma', 'can_be_disabled', True))])
E('scheduled-tasks-startup-toggle', 'RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT', 'config', [
  ('RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT=false stops all scheduled tasks from running once at startup', (T, 'tasks.scheduled_startup', 'global_setting', 'RUN_SCHEDULED_TASKS_ON_STARTUP_DEFAULT')),
  ('each task keeps its own startup setting', (B, 'tasks.scheduled_startup', 'per_task_setting', True))],
  why='"mainly usefull for instance that reboot often, dev environments or fast startup requirements (few ms gained)".')
E('docker-node-image-pinned', 'Pined the Dockerfile node version sha', 'deploy', [
  ('The Dockerfile pins its Node.js base image by digest', (B, 'docker.node_image', 'pinned_by_digest', True))],
  why='"to reduce supply chain attack surface".')
E('fonts-bundled', 'Fonts are now bundled with the app', 'deploy', [
  ('Fonts are bundled with the app rather than loaded from Bunny Fonts', (T, 'client.fonts', 'source', 'bundled'))],
  why='so "it can be used offline"; "A step towards making Papra fully air-gapped."')
E('app-package-renamed', 'Renamed the internal distribution package', 'release', [
  ('The application distribution package is @papra/app', (T, 'release.package_name', 'name', '@papra/app')),
  ('release tags use the format @papra/app@<version>', (T, 'release.package_name', 'tag_format', '@papra/app@version'))])
E('manage-subscription-off-by-default', 'Disable "Manage subscription"', 'billing', [
  ('The Manage subscription action in organization settings is disabled by default', (B, 'billing.manage_subscription', 'enabled_by_default', False))])
E('stripe-webhook-forgery-prevented', 'Prevent stripe webhook forgery', 'billing', [
  ('Stripe webhooks are rejected when no Stripe webhook secret is configured', (B, 'billing.stripe_webhook', 'accepted_without_secret', False))])

# ---------------------------------------------------------------- auth
E('email-login-can-be-disabled', 'disable login via email', 'auth', [
  ('Email and password login can be disabled', (B, 'auth.email_login', 'can_be_disabled', True))],
  why='"to support sso-only auth".')
E('register-link-hidden', 'Hide the "Don\'t have an account? Register" link', 'auth', [
  ('The login page hides the Register link when registration is disabled', (B, 'auth.register_link', 'shown_when_registration_disabled', False))])
E('forbidden-email-domains', 'filter out some email domain names', 'auth', [
  ('Email domains listed in AUTH_FORBIDDEN_EMAIL_DOMAINS cannot register', (B, 'auth.forbidden_email_domains', 'can_register', False))])
E('auth-secret-min-32', 'auth secret to be at least 32 characters', 'auth', [
  ('AUTH_SECRET must be at least 32 characters', (I, 'auth.secret', 'min_length', 32))],
  why='"for security reasons".')
E('auth-secret-required-in-production', 'AUTH_SECRET is not set in production', 'auth', [
  ('The server refuses to start in production without AUTH_SECRET', (B, 'auth.secret', 'required_in_production', True))])
E('password-reset-revokes-sessions', 'revoke all user sessions on password reset', 'auth', [
  ("Resetting a password revokes all of the user's sessions", (B, 'auth.password_reset', 'revokes_sessions', True))])
E('registration-disabled-blocks-api', 'setting `AUTH_IS_REGISTRATION_ENABLED=false` hid the sign-up', 'auth', [
  ('With AUTH_IS_REGISTRATION_ENABLED=false the authentication API also refuses email and password registrations', (B, 'auth.registration', 'api_registration_when_disabled', False))])
E('oauth-no-new-accounts-when-disabled', 'Prevent custom OAuth providers from creating new accounts', 'auth', [
  ('When registration is disabled, custom OAuth providers do not create new accounts', (B, 'auth.oauth_custom_providers', 'creates_accounts_when_registration_disabled', False)),
  ('existing users can still sign in with them', (B, 'auth.oauth_custom_providers', 'existing_users_sign_in_when_registration_disabled', True))])

# ---------------------------------------------------------------- intake email, ingestion
E('intake-addresses-rfc5322', 'RFC 5322 compliant', 'intake-email', [
  ('Intake email webhook addresses are validated as RFC 5322 addresses, not just simple emails', (T, 'intake_email.origin_address', 'validation', 'rfc5322'))], extra=('Allow for more complex intake-email origin',))
E('intake-uses-original-destination', 'use original destination addresses', 'intake-email', [
  ('A forwarded intake email is matched by its original destination address when one is available', (T, 'intake_email.forwarded_destination', 'matched_by', 'original_destination_address'))])
E('intake-attachment-mime-coercion', 'Coerce MIME type of intake email attachments', 'intake-email', [
  ('An intake attachment declared as application/octet-stream or with no type gets its MIME type from magic bytes, then from its extension', (T, 'intake_email.attachment_mime', 'coercion', 'magic_bytes_then_extension'))])
E('intake-catch-all-driver', 'Split the intake-email username generation', 'intake-email', [
  ('The random-username intake driver is replaced by a catch-all driver (INTAKE_EMAILS_CATCH_ALL_DOMAIN) with a separate username driver (INTAKE_EMAILS_USERNAME_DRIVER)', (T, 'intake_email.catch_all_driver', 'username_generation', 'separate_username_driver'))])
E('ingestion-watcher-stability', 'file size polling interval for ingestion folder', 'ingestion', [
  ('The ingestion folder watcher consumes a file only after its size has stayed constant for INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS', (T, 'ingestion_folder.watcher_stability', 'threshold_setting', 'INGESTION_FOLDER_WATCHER_FILE_STABILITY_THRESHOLD_MS')),
  ('the polling interval is INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS', (T, 'ingestion_folder.watcher_stability', 'poll_setting', 'INGESTION_FOLDER_WATCHER_FILE_STABILITY_POLL_INTERVAL_MS'))],
  why='"This helps to avoid processing files that are still being written to (e.g., scanners, cameras, network shares, etc.)."')

# ---------------------------------------------------------------- api keys, admin, organizations
E('current-api-key-endpoint', 'GET /api/api-keys/current', 'api-keys', [
  ('GET /api/api-keys/current describes the API key used for the request', (B, 'api_keys.current', 'available', True))])
E('api-key-custom-property-permissions', 'api-key permissions for managing custom properties', 'api-keys', [
  ('API keys have permissions for managing custom properties', (B, 'api_keys.custom_property_permissions', 'available', True))])
E('custom-property-delete-returns-204', 'Custom property definition deletion endpoint', 'custom-properties', [
  ('Deleting a custom property definition returns 204 with no body', (I, 'custom_properties.delete_response', 'status_code', 204))])
E('admin-can-delete-users', 'delete a user in the admin user details', 'admin', [
  ('A platform admin can delete a user from the admin user details page', (B, 'admin.user_deletion', 'available', True))])
E('single-organization-redirect', 'having only one organization, get redirected', 'organizations', [
  ('A user with exactly one organization who opens / is redirected to that organization', (B, 'organizations.single_redirect', 'redirects', True))])
