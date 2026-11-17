"""Build the crowded variant of a stored Papra knowledge base: the same .kb plus generated decisions.

Usage: python3 crowd.py <source .kb> <output .kb> [--seed N]
       python3 crowd.py --list [--seed N]        the generated ids, one per line
       python3 crowd.py --roles <workspace>      rewrite crowd-roles.json with the pinned kibi (on PATH)

Kibi's semantic advisor gives every clause a role (descriptive, normative, condition, exception) and a
sync refuses a requirement whose recorded roles differ from the advisor's. crowd-roles.json holds the
role of every generated clause that is not descriptive, as `kibi model` (mode analyze) of the pinned
release returns it; --roles rebuilds it and has to be run again when the statements or the pin change.

EVERY ENTRY THIS SCRIPT WRITES IS SYNTHETIC. None of them is a Papra decision: the products, limits,
reasons and source references are made up for the benchmark, to test whether a store still returns the
governing decision when it holds many decisions on the same topics. The store text does not say so (an
agent must tell the entries apart by what they say they govern); this file and kb/README.md do.
SYNTHETIC_SOURCE_IDS below names the `knowledge-source:` tags that only generated entries carry.

What the generated entries are, and are not:
  - They are about the topics of the v7 search-gap arcs (tags and labels, search, secrets and sign-up,
    organizations and other owned containers, password reset and sessions).
  - Each one names the product or service it governs, and none of those is apps/papra-server: sibling
    surfaces of the monorepo (the web client, the mobile app, the CLI, the documentation site, the marketing website)
    and services around it (a browser extension, a desktop sync client, the hosted back office, a
    partner portal, a support portal, a community forum, a status page, a license server, ...).
  - None is linked to a symbol, a test or a real entry, and no real entry is changed: the real
    requirements, facts, relationships and symbols are copied byte for byte.
  - Some limits (about one in three of the counted and timed ones) have an earlier value, recorded as a closed entry the current one supersedes.
  - Each is modeled as the real ones are (one property fact per clause on a subject of its own), so
    `kibi check` has nothing new to report about them.

Deterministic: the same seed gives the same files. Timestamps are derived from the entry, not the clock.
"""
import hashlib, json, os, random, re, shutil, sys, yaml

SEED = 7
SYNTHETIC = True  # every entry built here; see the module docstring

# surface key -> (where the decision is recorded, reference prefix, the phrase that names the surface in a statement)
SURFACES = {
    'website':   ('Marketing website decision log (apps/website)', 'WEB', 'on the marketing website'),
    'docs':      ('Documentation site decision log (apps/docs)', 'DOC', 'on the documentation site'),
    'client':    ('Web client decision log (apps/papra-client)', 'WCL', 'in the web client'),
    'mobile':    ('Mobile app decision log (apps/mobile)', 'MOB', 'in the mobile app'),
    'cli':       ('CLI design notes (packages/cli)', 'CLI', 'in the papra CLI'),
    'sdk':       ('API SDK design notes (packages/api-sdk)', 'SDK', 'in the API SDK'),
    'extension': ('Browser extension decision log', 'EXT', 'in the browser extension'),
    'desktop':   ('Desktop sync client decision log', 'DSK', 'in the desktop sync client'),
    'backoffice': ('Papra Cloud back office handbook', 'OPS', 'in the Papra Cloud back office'),
    'portal':    ('Partner portal decision log', 'PRT', 'in the partner portal'),
    'support':   ('Support portal decision log', 'SUP', 'in the support portal'),
    'forum':     ('Community forum operations notes', 'FRM', 'on the community forum'),
    'status':    ('Status page runbook', 'STA', 'on the status page'),
    'license':   ('License server decision log', 'LIC', 'on the license server'),
    'telemetry': ('Telemetry dashboard decision log', 'TEL', 'in the telemetry dashboard'),
    'education': ('Education programme portal notes', 'EDU', 'in the education portal'),
    'marketplace': ('Template marketplace decision log', 'MKT', 'in the template marketplace'),
    'n8n':       ('n8n integration notes', 'N8N', 'in the n8n integration'),
    'infra':     ('Infrastructure runbook', 'INF', 'in the hosted infrastructure'),
}
SYNTHETIC_SOURCE_IDS = sorted(f'{k}-decisions' for k in SURFACES)

def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower().replace("'s ", ' ')).strip('-')
def cap(s): return s[0].upper() + s[1:]
def an(s): return ('an ' if s[0].lower() in 'aeiou' else 'a ') + s

class Entry:
    def __init__(self, surface, subject, subject_title, key, clauses, quote, reasons, old=None):
        self.surface, self.subject, self.subject_title, self.key = surface, subject, subject_title, key
        self.clauses, self.quote, self.reasons, self.old = clauses, quote, reasons, old

ENTRIES = []
TITLES = {}  # subject -> what the subject is, where the default (the thing and its surface) reads badly
DEFS = {}    # subject -> its definition: what the thing is and which Papra server thing it is not
def rng_for(*parts): return random.Random('|'.join(map(str, (SEED, *parts))))

def skey(surface, thing): return f'{surface}.{slug(thing).replace("-", "_")}'

def add(topic, surface, thing, key, clauses, quote, reasons, old=None):
    """One decision about `thing` of `surface`. clauses: [(text, property, value)]; old: (clauses, why it changed) of the value it replaced."""
    subject = skey(surface, thing)
    ENTRIES.append((topic, Entry(surface, subject, TITLES.get(subject, cap(thing) + ' ' + SURFACES[surface][2]), key, clauses, quote, reasons, old)))

# ---------------------------------------------------------------- tags and other labels
# (surface, noun, plural, what they are unique or counted per)
LABELS = [
    ('website', 'blog tag', 'blog tags', 'site'), ('website', 'blog category', 'blog categories', 'site'),
    ('website', 'changelog label', 'changelog labels', 'site'), ('website', 'case-study tag', 'case-study tags', 'site'),
    ('docs', 'page tag', 'page tags', 'documentation version'), ('docs', 'glossary term', 'glossary terms', 'locale'),
    ('docs', 'sidebar group', 'sidebar groups', 'documentation version'),
    ('client', 'saved view', 'saved views', 'user'), ('client', 'tag colour preset', 'tag colour presets', 'organization'),
    ('client', 'tag filter shortcut', 'tag filter shortcuts', 'user'),
    ('mobile', 'scan preset', 'scan presets', 'device'), ('mobile', 'saved filter', 'saved filters', 'account'),
    ('mobile', 'quick label', 'quick labels', 'device'), ('mobile', 'offline tag draft', 'offline tag drafts', 'device'),
    ('cli', 'tag alias', 'tag aliases', 'mapping file'), ('cli', 'profile', 'profiles', 'config file'),
    ('cli', 'import label', 'import labels', 'import run'),
    ('extension', 'clip preset', 'clip presets', 'browser profile'), ('extension', 'site rule', 'site rules', 'browser profile'),
    ('extension', 'pinned tag', 'pinned tags', 'browser profile'),
    ('desktop', 'watch-folder label', 'watch-folder labels', 'device'), ('desktop', 'ignore pattern', 'ignore patterns', 'sync folder'),
    ('desktop', 'folder-to-tag mapping', 'folder-to-tag mappings', 'sync folder'),
    ('backoffice', 'customer tag', 'customer tags', 'support team'), ('backoffice', 'support macro', 'support macros', 'support team'),
    ('backoffice', 'coupon code', 'coupon codes', 'campaign'), ('backoffice', 'organization label', 'organization labels', 'instance'),
    ('portal', 'client label', 'client labels', 'partner account'), ('portal', 'workspace template', 'workspace templates', 'partner account'),
    ('support', 'ticket tag', 'ticket tags', 'site'), ('support', 'canned reply', 'canned replies', 'agent'),
    ('forum', 'forum tag', 'forum tags', 'site'), ('forum', 'forum category', 'forum categories', 'site'),
    ('status', 'incident label', 'incident labels', 'site'), ('status', 'component group', 'component groups', 'site'),
    ('telemetry', 'dashboard tag', 'dashboard tags', 'team'), ('telemetry', 'event label', 'event labels', 'project'),
    ('education', 'course label', 'course labels', 'classroom'), ('marketplace', 'template tag', 'template tags', 'site'),
    ('marketplace', 'template category', 'template categories', 'site'), ('n8n', 'credential label', 'credential labels', 'workflow'),
]

def labels():
    for surface, noun, plural, per in LABELS:
        where = SURFACES[surface][2]; P = f'{cap(plural)} {where}'; N = f'{cap(noun)} names {where}'
        r = rng_for('label', surface, noun)
        DEFS[skey(surface, plural)] = (f'The {plural} people create {where}, each a named {noun} kept per {per}. They belong to that product and are not the tags of a Papra organization, which the server stores.')
        if r.random() < 0.6:
            add('tags', surface, plural, 'unique-ignoring-case',
                [(f'{P} are unique per {per} regardless of letter case', 'name_uniqueness', 'unique ignoring letter case'),
                 (f'a duplicate is reported as {slug(noun)}-already-exists', 'duplicate_error', f'{slug(noun)}-already-exists')],
                f'feat({surface}): case-insensitive unique {noun} names',
                [f'Two {plural} that differed only by capitalisation were being created by accident and then merged by hand.',
                 f'Imports from other tools produced "{cap(noun)}" and "{noun}" side by side, and reports counted them separately.'])
        else:
            add('tags', surface, plural, 'case-sensitive-names',
                [(f'{P} are compared exactly as typed', 'name_uniqueness', 'exact'),
                 (f'two {plural} that differ only by letter case are distinct', 'case_variants_distinct', True)],
                f'docs({surface}): {noun} names are case-sensitive',
                [f'{cap(plural)} mirror identifiers of an outside system that is case-sensitive, so folding case would merge distinct entries.',
                 f'Existing data already held {plural} that differ only by case, and merging them would have lost information.'])
        n = r.choice([20, 25, 30, 50, 100, 150, 250, 300, 500, 1000]); configurable = r.random() < 0.5
        text = r.choice([f'{cap(an(per))} can hold at most {n} {plural} {where}', f'At most {n} {plural} can be created per {per} {where}',
                         f'The number of {plural} per {per} {where} is limited to {n}'])
        tail = (f'the limit is configurable and {n} is the default', 'limit_configurable', True) if configurable else ('the limit is fixed', 'limit_configurable', False)
        old = None
        if r.random() < 0.3:
            m = r.choice([x for x in (10, 20, 50, 100, 200) if x < n] or [n // 2])
            old = ([(text.replace(str(n), str(m)), 'maximum_count', m)],
                   r.choice([f'The earlier limit of {m} was reached by ordinary use within a few weeks of release.', 'Reason not stated.']))
        add('tags', surface, plural, 'maximum-count', [(text, 'maximum_count', n), tail], f'feat({surface}): limit {plural} per {per}',
            [f'Lists of {plural} are loaded in one request, and beyond a few hundred the screen became slow.',
             f'An unbounded number of {plural} had been used to store data the feature was never meant for.'], old)
        n = r.choice([24, 32, 40, 48, 64, 80, 100, 120])
        add('tags', surface, plural, 'name-length', [(f'{N} are limited to {n} characters', 'name_max_length', n)],
            f'feat({surface}): cap {noun} name length at {n}',
            [f'Longer names broke the layout of the list where {plural} are shown.', f'The column that stores the name is {n} characters wide.'])
        add('tags', surface, plural, 'names-trimmed',
            [(f'{N} are trimmed of leading and trailing whitespace before they are saved', 'name_trimmed', True),
             ('a name that is empty after trimming is refused', 'empty_name_refused', True)],
            f'fix({surface}): trim {noun} names',
            [f'Pasted names carried trailing spaces and produced {plural} that looked identical but were not.'])
        order = r.choice(['alphabetically, ignoring letter case', 'by most recent use first', 'in the order they were created', 'by number of uses, most used first'])
        add('tags', surface, plural, 'listing-order', [(f'{P} are listed {order}', 'listing_order', order)],
            f'feat({surface}): order {plural} {order.split(",")[0]}',
            [f'People looked for {an(noun)} by name and could not find it in a list ordered by creation.', f'The most used {plural} are the ones picked again, so they come first.'])
        if r.random() < 0.5:
            add('tags', surface, plural, 'delete-in-use', [(f'Deleting {an(noun)} {where} that is still in use is refused until nothing refers to it', 'delete_in_use', 'refused')],
                f'feat({surface}): refuse deleting {plural} in use', [f'A deleted {noun} silently disappeared from everything that used it and nobody could tell what had been there.'])
        else:
            add('tags', surface, plural, 'delete-in-use', [(f'Deleting {an(noun)} {where} removes it from everything that uses it, without confirmation for each use', 'delete_in_use', 'detached')],
                f'feat({surface}): deleting {an(noun)} detaches it', [f'Asking for confirmation once per use made cleaning up {plural} impractical.'])
        n = r.choice([5, 10, 20, 25, 50])
        add('tags', surface, plural, 'batch-size', [(f'At most {n} {plural} can be added or removed in one request {where}', 'batch_maximum', n)],
            f'feat({surface}): batch {plural}, {n} per request', [f'Requests with more than {n} {plural} timed out on slow connections.'])

# ---------------------------------------------------------------- search
# (surface, the search, its date filter, its text filter)
SEARCHES = [
    ('docs', 'the documentation site search', 'updated:', 'title:'), ('docs', 'the API reference search', 'since:', 'path:'),
    ('website', 'the blog search', 'published:', 'author:'), ('website', 'the template gallery search', 'added:', 'name:'),
    ('client', "the web client's command palette search", 'visited:', 'page:'), ('client', "the web client's demo-mode search", 'created:', 'name:'),
    ('mobile', "the mobile app's offline search", 'scanned:', 'name:'), ('mobile', "the mobile app's tag picker filter", 'used:', 'name:'),
    ('cli', 'the `papra logs` filter', 'since:', 'message:'), ('cli', 'the `papra history` filter', 'ran:', 'command:'),
    ('extension', "the browser extension's clip history search", 'clipped:', 'title:'), ('extension', "the browser extension's address-bar search", 'saved:', 'site:'),
    ('desktop', "the desktop sync client's local file search", 'modified:', 'path:'), ('desktop', "the desktop sync client's sync log filter", 'synced:', 'file:'),
    ('backoffice', 'the back office customer search', 'signed-up:', 'email:'), ('backoffice', 'the back office organization lookup', 'created:', 'name:'),
    ('backoffice', 'the back office invoice search', 'issued:', 'number:'), ('backoffice', 'the back office audit log search', 'at:', 'actor:'),
    ('support', 'the support portal ticket search', 'opened:', 'subject:'), ('support', 'the help-centre article search', 'updated:', 'title:'),
    ('forum', 'the community forum post search', 'posted:', 'author:'), ('forum', 'the community forum member search', 'joined:', 'name:'),
    ('portal', 'the partner portal client search', 'onboarded:', 'name:'), ('portal', 'the partner portal payout search', 'paid:', 'reference:'),
    ('status', 'the status page incident filter', 'started:', 'component:'), ('telemetry', 'the telemetry event search', 'at:', 'event:'),
    ('telemetry', 'the telemetry dashboard search', 'created:', 'name:'), ('license', 'the license lookup', 'issued:', 'holder:'),
    ('education', 'the education portal course search', 'starts:', 'name:'), ('marketplace', 'the template marketplace search', 'published:', 'name:'),
]

FINDS = {
    'the documentation site search': 'documentation pages', 'the API reference search': 'API endpoints and schemas', 'the blog search': 'blog posts',
    'the template gallery search': 'workspace templates shown on the website', "the web client's command palette search": 'pages and actions of the web client',
    "the web client's demo-mode search": 'the sample documents the demo keeps in the browser', "the mobile app's offline search": 'documents cached on the phone',
    "the mobile app's tag picker filter": 'tags while one is being picked on the phone', 'the `papra logs` filter': 'lines of the CLI log file',
    'the `papra history` filter': 'earlier CLI invocations', "the browser extension's clip history search": 'pages clipped earlier',
    "the browser extension's address-bar search": 'saved pages from the address bar', "the desktop sync client's local file search": 'files in the synced folders of the computer',
    "the desktop sync client's sync log filter": 'entries of the sync log', 'the back office customer search': 'customers of Papra Cloud',
    'the back office organization lookup': 'hosted organizations, for support staff', 'the back office invoice search': 'invoices',
    'the back office audit log search': 'staff actions', 'the support portal ticket search': 'support tickets', 'the help-centre article search': 'help-centre articles',
    'the community forum post search': 'forum posts', 'the community forum member search': 'forum members', 'the partner portal client search': 'clients of a partner',
    'the partner portal payout search': 'partner payouts', 'the status page incident filter': 'past incidents', 'the telemetry event search': 'telemetry events',
    'the telemetry dashboard search': 'saved dashboards', 'the license lookup': 'issued licenses', 'the education portal course search': 'courses',
    'the template marketplace search': 'published templates',
}
FOR = {
    'newsletter sign-up': 'to receive the newsletter', 'cloud waiting list': 'to be told when a hosted plan opens', 'webinar registration': 'to attend a webinar',
    'beta programme sign-up': 'to test pre-release builds of the mobile app', 'forum registration': 'to post on the forum', 'support account creation': 'to open and follow support tickets',
    'partner registration': 'to apply as a reseller', 'staff sign-in': 'to sign in as a member of staff', 'status subscriptions': 'to be mailed about incidents',
    'education discount requests': 'to ask for the education discount', 'author registration': 'to publish templates', 'license trial requests': 'to get a trial license',
    'feedback submissions': 'with a comment on a documentation page',
}
WHO = {
    'back office staff accounts': 'Papra Cloud support and billing staff', 'support portal accounts': 'customers who open support tickets', 'community forum accounts': 'forum members',
    'partner portal accounts': 'resellers', 'license portal accounts': 'license holders', 'status page administrator accounts': 'the people who post incidents',
    'telemetry dashboard accounts': 'analysts who read usage dashboards', 'education portal accounts': 'teachers and schools', 'template author accounts': 'people who publish templates',
    'newsletter preference accounts': 'newsletter subscribers who manage their preferences', 'documentation contributor accounts': 'people who edit the documentation through its review tool',
    'infrastructure console accounts': 'operators of the hosting platform', 'integration service accounts': 'automations that call the n8n integration',
}

def searches():
    for surface, what, datef, textf in SEARCHES:
        W = cap(what); r = rng_for('search', surface, what); k = slug(what.replace('the ', '', 1))
        TITLES[skey(surface, k)] = W
        DEFS[skey(surface, k)] = (f'{W}: the search box that finds {FINDS[what]}, with a {datef} date filter and a {textf} text filter of its own. It is not the document search endpoint of the Papra server.')
        n = r.choice([64, 100, 128, 200, 256, 500, 512, 2048, 4096])
        over = r.choice([('longer input is rejected with a validation error', 'rejected'), ('longer input is cut to the limit without an error', 'truncated')])
        old = None
        if r.random() < 0.25:
            m = r.choice([x for x in (50, 64, 100, 128, 255) if x < n] or [n // 2])
            old = ([(f'A query in {what} is limited to {m} characters', 'query_max_length', m)],
                   r.choice([f'Queries pasted from spreadsheets regularly ran past {m} characters.', 'Reason not stated.']))
        add('search', surface, k, 'query-length', [(f'A query in {what} is limited to {n} characters', 'query_max_length', n), (over[0], 'over_length_input', over[1])],
            f'feat({surface}): limit search query length to {n}',
            ['Very long queries were used to slow the search backend down.', 'The query is passed in a URL, and longer ones were cut by proxies on the way.'], old)
        bad = r.choice([('is rejected with a message that names the value', 'rejected'), ('is ignored and the other filters still apply', 'ignored'),
                        ('makes the search return nothing', 'matches nothing')])
        add('search', surface, k, 'invalid-date', [(f'An invalid date in the {datef} filter of {what} {bad[0]}', 'invalid_date_filter', bad[1])],
            f'fix({surface}): invalid date in {datef} filter',
            ['People mistyped a date, got an empty list and assumed nothing existed.', 'One mistyped filter should not cost the person the rest of a long query.',
             'A filter that cannot be understood must not be read as "no restriction".'])
        mt = r.choice([('exact equality, not contains matching', 'exact'), ('prefix matching, not contains matching', 'prefix'),
                       ('contains matching, not exact equality', 'contains'), ('whole-word matching', 'whole word')])
        add('search', surface, k, 'text-filter-matching', [(f'The {textf} filter of {what} uses {mt[0]}', 'text_filter_matching', mt[1])],
            f'feat({surface}): {textf} filter matching',
            ['Results that only contained the term somewhere drowned the one that was asked for.', 'People remember a fragment of a name, rarely all of it.'])
        n = r.choice([1, 2, 3])
        add('search', surface, k, 'minimum-length', [(f'{W} runs only once the query has at least {n} character{"s" if n > 1 else ""}', 'query_min_length', n)],
            f'feat({surface}): minimum query length {n}', ['One-letter queries matched nearly everything and were slow to render.'])
        n = r.choice([10, 20, 25, 30, 50, 100, 200])
        add('search', surface, k, 'page-size', [(f'{W} returns at most {n} results per page', 'page_size_maximum', n)],
            f'feat({surface}): {n} results per page', ['Larger pages were slow on the devices most people use.', 'The response of a larger page was too big for mobile connections.'])
        fold = r.choice([('ignores letter case and accents', 'case and accents ignored'), ('ignores letter case but not accents', 'case ignored'), ('is case-sensitive', 'case-sensitive')])
        add('search', surface, k, 'case-folding', [(f'Matching in {what} {fold[0]}', 'case_folding', fold[1])],
            f'feat({surface}): search case folding', ['Names are typed on phones, where capitals and accents are often left out.', 'Identifiers that differ only by case are different things here.'])
        fmt = r.choice([('dates as YYYY-MM-DD only', 'YYYY-MM-DD'), ('dates as YYYY-MM-DD and as YYYY/MM/DD', 'YYYY-MM-DD or YYYY/MM/DD'),
                        ('ISO dates and the words today, yesterday and last-week', 'ISO or relative words'), ('dates in the format of the browser locale', 'locale format')])
        add('search', surface, k, 'date-format', [(f'The {datef} filter of {what} accepts {fmt[0]}', 'date_filter_format', fmt[1])],
            f'feat({surface}): date formats of the {datef} filter', ['A date like 03/04 means two different days to two halves of the team.', 'These are the forms people were seen typing in the search logs.'])
        unk = r.choice([('is treated as plain search text', 'plain text'), ('is rejected with a list of the known filters', 'rejected'), ('is dropped silently', 'dropped')])
        add('search', surface, k, 'unknown-filter', [(f'A filter name that {what} does not know {unk[0]}', 'unknown_filter', unk[1])],
            f'feat({surface}): unknown search filters', ['Text with a colon in it, such as a time, is a common thing to search for.', 'A mistyped filter name silently widened the search.'])
        emp = r.choice([('lists the most recent items', 'most recent'), ('returns nothing', 'nothing'), ('is not sent', 'not sent')])
        add('search', surface, k, 'empty-query', [(f'An empty query in {what} {emp[0]}', 'empty_query', emp[1])],
            f'feat({surface}): empty search query', ['An empty box that shows nothing looked broken.', 'Listing everything for an empty query was the most expensive request the page made.'])

# ---------------------------------------------------------------- secrets and sign-up
# (surface, the service, variable, what the value is)
SECRETS = [
    ('backoffice', 'The back office', 'BACKOFFICE_SESSION_SECRET', 'session signing secret'), ('backoffice', 'The billing webhook receiver', 'BILLING_WEBHOOK_SECRET', 'webhook signing secret'),
    ('website', 'The newsletter service', 'NEWSLETTER_SIGNING_KEY', 'unsubscribe-link signing key'), ('docs', 'The documentation feedback endpoint', 'DOCS_FEEDBACK_SECRET', 'request signing secret'),
    ('docs', 'The documentation search proxy', 'DOCSEARCH_ADMIN_KEY', 'index admin key'), ('status', 'The status page', 'STATUS_WEBHOOK_SECRET', 'webhook signing secret'),
    ('license', 'The license server', 'LICENSE_SIGNING_KEY', 'license signing key'), ('telemetry', 'The telemetry relay', 'TELEMETRY_INGEST_TOKEN', 'ingest token'),
    ('support', 'The support portal', 'SUPPORT_SSO_SECRET', 'single sign-on secret'), ('forum', 'The forum sign-in bridge', 'FORUM_SSO_SECRET', 'single sign-on secret'),
    ('portal', 'The partner portal', 'PARTNER_PORTAL_JWT_SECRET', 'token signing secret'), ('extension', 'The extension pairing service', 'EXT_PAIRING_SECRET', 'pairing-code signing secret'),
    ('desktop', 'The desktop update server', 'UPDATE_SIGNING_KEY', 'update signing key'), ('mobile', 'The mobile push relay', 'PUSH_RELAY_AUTH_KEY', 'relay authentication key'),
    ('n8n', 'The n8n trigger endpoint', 'N8N_TRIGGER_SECRET', 'trigger signing secret'), ('infra', 'The asset URL signer', 'ASSET_URL_SIGNING_KEY', 'URL signing key'),
    ('infra', 'The backup agent', 'BACKUP_ENCRYPTION_KEY', 'backup encryption key'), ('education', 'The education portal', 'EDU_PORTAL_SESSION_SECRET', 'session signing secret'),
    ('marketplace', 'The template marketplace', 'MARKETPLACE_AUTH_SECRET', 'session signing secret'),
]
# (surface, the sign-up, short key)
SIGNUPS = [
    ('website', 'the newsletter sign-up form', 'newsletter sign-up'), ('website', 'the cloud waiting list', 'cloud waiting list'), ('website', 'webinar registration', 'webinar registration'),
    ('mobile', 'the mobile beta programme sign-up', 'beta programme sign-up'), ('forum', 'community forum registration', 'forum registration'),
    ('support', 'support portal account creation', 'support account creation'), ('portal', 'partner portal registration', 'partner registration'),
    ('backoffice', 'back office staff sign-in', 'staff sign-in'), ('status', 'status page subscriptions', 'status subscriptions'),
    ('education', 'education discount requests', 'education discount requests'), ('marketplace', 'template author registration', 'author registration'),
    ('license', 'license trial requests', 'license trial requests'), ('docs', 'documentation feedback submissions', 'feedback submissions'),
]

def secrets():
    for surface, svc, var, noun in SECRETS:
        r = rng_for('secret', var)
        TITLES[skey(surface, var)] = f'{var}, the {noun} of {svc[0].lower() + svc[1:]}'
        DEFS[skey(surface, var)] = (f'{var} holds the {noun} that {svc[0].lower() + svc[1:]} reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.')
        if r.random() < 0.65:
            add('auth', surface, var, 'required-in-production', [(f'{svc} refuses to start in production without {var}', 'required_in_production', True)],
                f'feat({surface}): require {var} in production',
                [f'A missing {noun} had gone unnoticed on a production deployment for a week.', f'Starting without the {noun} meant every value signed before the restart stopped verifying.'])
        else:
            add('auth', surface, var, 'generated-when-missing',
                [(f'{svc} generates a random {noun} at startup when {var} is not set', 'required_in_production', False), ('it logs a warning that values signed before a restart stop verifying', 'missing_secret_warning', True)],
                f'feat({surface}): generate {var} when unset',
                [f'The service keeps nothing signed across restarts, so a fixed {noun} buys nothing.', 'It is run mostly as a one-off container, and a refused start was the most common support question.'])
        n = r.choice([16, 24, 32, 40, 48, 64]); old = None
        if r.random() < 0.3:
            m = r.choice([x for x in (8, 12, 16, 24) if x < n] or [8])
            old = ([(f'{var} must be at least {m} characters long', 'minimum_length', m)], r.choice([f'A review found {m}-character values that were dictionary words.', 'Reason not stated.']))
        add('auth', surface, var, 'minimum-length', [(f'{var} must be at least {n} characters long', 'minimum_length', n)], f'feat({surface}): {var} minimum length {n}',
            [f'Short values of the {noun} can be guessed offline from one signed value.'], old)
        add('auth', surface, var, 'example-value-refused', [(f'{svc} refuses the example value of {var} from its documentation, in every environment', 'example_value_refused', True)],
            f'feat({surface}): refuse the documented example {var}', ['The example value was found in use on public deployments.'])
        d = r.choice([30, 60, 90, 180, 365]); h = r.choice([1, 24, 48, 72])
        add('auth', surface, var, 'rotation', [(f'{var} is rotated every {d} days', 'rotation_days', d), (f'the previous value stays valid for {h} hours after a rotation', 'rotation_overlap_hours', h)],
            f'chore({surface}): rotate {var} every {d} days', [f'Without an overlap, a rotation of the {noun} broke requests already on their way.'])
        src = r.choice([('from the environment only, never from a configuration file', 'environment only'), ('from the secret manager, with the environment as a fallback in development', 'secret manager'),
                        ('from a file named by ' + var + '_FILE when that variable is set', 'file or environment')])
        add('auth', surface, var, 'source', [(f'{svc} reads {var} {src[0]}', 'value_source', src[1])], f'feat({surface}): where {var} is read from',
            ['Configuration files end up in backups and in support tickets.', 'Container platforms mount secrets as files.'])
        add('auth', surface, var, 'never-logged', [(f'{svc} never writes {var} or a value derived from it to its logs', 'value_logged', False), ('startup logs show only whether it is set', 'startup_log', 'presence only')],
            f'fix({surface}): keep {var} out of logs', ['A debug log line had printed the configuration, the secret included.'])
        dev = r.choice([(f'{svc} uses a fixed development value outside production when {var} is not set', 'fixed development value'),
                        (f'{svc} requires {var} in every environment, development included', 'always required')])
        add('auth', surface, var, 'development-default', [(dev[0], 'development_default', dev[1])], f'feat({surface}): {var} outside production',
            ['Contributors should be able to start the service without any setup.', 'A development default had been copied into a production configuration.'])
    for surface, what, short in SIGNUPS:
        r = rng_for('signup', surface, what); W = cap(what)
        TITLES[skey(surface, short)] = W
        DEFS[skey(surface, short)] = (f'{W}: where a person gives an email address {FOR[short]}. It is not account registration on a Papra instance, which the sign-up settings of the server govern.')
        sub = r.random() < 0.5
        add('auth', surface, short, 'allowed-domains',
            [(f'When an allowed-domain list is configured for {what}, ' + ('subdomains of a listed domain are accepted as well' if sub else 'only addresses whose domain is exactly on the list are accepted'),
              'allowed_domain_matching', 'domain and subdomains' if sub else 'exact domain'), ('matching ignores letter case', 'domain_case_folding', True)],
            f'feat({surface}): allowed email domains for {short}',
            ['Companies with regional subdomains asked for one entry to cover all of them.' if sub else 'A listed domain says nothing about who controls its subdomains.'])
        win = r.choice([('a domain on the block list is refused even when it is also on the allowed list', 'block list wins'), ('the allowed list wins over the block list', 'allowed list wins')])
        add('auth', surface, short, 'blocked-domains', [(f'Addresses from disposable-mail domains are refused in {what}', 'disposable_domains_refused', True), (win[0], 'list_precedence', win[1])],
            f'feat({surface}): block disposable email domains', ['Disposable addresses made up most of the abuse reports.'])
        plus = r.choice([('are treated as the same address as the one without the plus part', 'folded'), ('are distinct addresses', 'distinct')])
        add('auth', surface, short, 'plus-addressing', [(f'Plus-addressed emails in {what} {plus[0]}', 'plus_addressing', plus[1])], f'feat({surface}): plus addressing in {short}',
            ['One person had registered forty times with plus addresses.', 'People use plus addresses to sort their mail, and folding them broke that.'])
        n = r.choice([3, 5, 10, 20]); per = r.choice(['hour', 'day'])
        add('auth', surface, short, 'rate-limit', [(f'At most {n} requests per IP address per {per} are accepted in {what}', f'requests_per_ip_per_{per}', n)], f'feat({surface}): rate limit {short}',
            ['A script had submitted the form several thousand times in a night.'])
        ver = r.choice([(f'An address given in {what} counts only after it is confirmed through an emailed link', 'required'), (f'Addresses given in {what} need no confirmation', 'not required')])
        add('auth', surface, short, 'email-confirmation', [(ver[0], 'email_confirmation', ver[1])], f'feat({surface}): email confirmation for {short}',
            ['Mistyped addresses were receiving mail meant for someone else.', 'A confirmation step halved completed sign-ups for no measured benefit.'])
        dup = r.choice([('answers as if it were new, so the form does not reveal who is registered', 'same answer'), ('is reported as already registered', 'reported')])
        add('auth', surface, short, 'repeat-address', [(f'A repeated address in {what} {dup[0]}', 'repeat_address', dup[1])], f'feat({surface}): repeated addresses in {short}',
            ['The form could be used to check whether an address was known.', 'People who had forgotten they signed up kept trying.'])

# ---------------------------------------------------------------- organizations and other owned containers
# (surface, noun, plural, the owner the limit is per, default limits to draw from)
CONTAINERS = [
    ('portal', 'client workspace', 'client workspaces', 'partner'), ('portal', 'sub-partner account', 'sub-partner accounts', 'partner'),
    ('portal', 'referral link', 'referral links', 'partner'), ('backoffice', 'organization', 'organizations', 'billing account'),
    ('backoffice', 'sandbox organization', 'sandbox organizations', 'customer'), ('backoffice', 'trial organization', 'trial organizations', 'email address'),
    ('backoffice', 'staff team', 'staff teams', 'staff member'), ('mobile', 'signed-in account', 'signed-in accounts', 'device'),
    ('mobile', 'pinned organization', 'pinned organizations', 'device'), ('desktop', 'linked organization', 'linked organizations', 'device'),
    ('desktop', 'sync folder', 'sync folders', 'linked organization'), ('cli', 'saved organization', 'saved organizations', 'profile'),
    ('extension', 'connected organization', 'connected organizations', 'browser profile'), ('forum', 'forum group', 'forum groups', 'member'),
    ('support', 'support contact', 'support contacts', 'organization'), ('support', 'shared inbox', 'shared inboxes', 'support team'),
    ('license', 'activation', 'activations', 'license key'), ('license', 'license key', 'license keys', 'customer'),
    ('telemetry', 'dashboard', 'dashboards', 'user'), ('telemetry', 'project', 'projects', 'team'),
    ('education', 'classroom workspace', 'classroom workspaces', 'teacher'), ('education', 'sponsored organization', 'sponsored organizations', 'school'),
    ('marketplace', 'published template', 'published templates', 'author'), ('n8n', 'organization connection', 'organization connections', 'workflow'),
    ('status', 'subscriber list', 'subscriber lists', 'status page'), ('website', 'demo workspace', 'demo workspaces', 'visitor'),
]

def containers():
    for surface, noun, plural, owner in CONTAINERS:
        where = SURFACES[surface][2]; r = rng_for('container', surface, noun)
        DEFS[skey(surface, plural)] = (f'The {plural} that {an(owner)} holds {where}, counted and limited per {owner}. They are not the organizations a Papra user owns on the server.')
        n = r.choice([1, 2, 3, 5, 10, 20, 25, 50, 100]); configurable = r.random() < 0.55
        text = r.choice([f'{cap(an(owner))} can own at most {n} {plural} {where}', f'{cap(an(owner))} can have at most {n} {plural} {where}',
                         f'The number of {plural} per {owner} {where} is limited to {n}'])
        tail = (f'the limit is configured per deployment and {n} is the default', 'limit_configurable', True) if configurable else ('the limit is the same for everyone', 'limit_configurable', False)
        old = None
        if r.random() < 0.35 and n > 1:
            m = r.choice([x for x in (1, 2, 3, 5, 10) if x < n])
            old = ([(text.replace(f'most {n} ', f'most {m} ').replace(f'limited to {n}', f'limited to {m}'), 'maximum_count', m)],
                   r.choice([f'Larger customers reached {m} {plural} in their first month.', 'Reason not stated.']))
        add('orgs', surface, plural, 'maximum-count', [(text, 'maximum_count', n), tail], f'feat({surface}): limit {plural} per {owner}',
            [f'A handful of accounts had created thousands of {plural} and slowed the listing for everyone.', f'Each {noun} reserves resources whether or not it is used.'], old)
        cnt = r.choice([(f'Only {plural} the {owner} owns count toward the limit {where}', f'{plural} shared with them do not count', 'owned only'),
                        (f'Archived {plural} do not count toward the limit {where}', f'restoring one is refused while the {owner} is at the limit', 'active only'),
                        (f'Every {noun} the {owner} can access counts toward the limit {where}', 'that includes ones shared with them', 'all accessible')])
        add('orgs', surface, plural, 'what-counts', [(cnt[0], 'counted_toward_limit', cnt[2]), (cnt[1], 'limit_detail', cnt[1])], f'feat({surface}): which {plural} count toward the limit',
            [f'People were blocked by {plural} they had only been invited to.', f'Archiving had become a way around the limit.'])
        ovr = r.choice([(f'Staff can raise or lower the {noun} limit for an individual {owner} {where}', 'per owner'), (f'The {noun} limit {where} cannot be changed for an individual {owner}', 'none'),
                        (f'The {noun} limit {where} follows the plan of the {owner} and is not set by hand', 'by plan')])
        add('orgs', surface, plural, 'limit-override', [(ovr[0], 'limit_override', ovr[1])], f'feat({surface}): overriding the {noun} limit',
            ['Support needed a way to help one customer without changing the limit for all.', 'Hand-set exceptions had been forgotten and never reviewed.'])
        at = r.choice([('is refused with an error that names the limit', 'refused, limit named'), ('is refused without disclosing the limit', 'refused, limit not named'),
                       ('is queued for staff approval', 'queued for approval')])
        add('orgs', surface, plural, 'at-the-limit', [(f'Creating {an(noun)} {where} when the {owner} is at the limit {at[0]}', 'at_limit', at[1])], f'feat({surface}): creating {an(noun)} at the limit',
            ['An error that did not say what the limit was produced a support ticket every time.', 'The limit differs between customers and is not theirs to compare.'])
        uq = r.choice([(f'unique per {owner}, regardless of letter case', 'unique per owner'), ('not required to be unique', 'not unique'), (f'unique across all {plural}', 'globally unique')])
        add('orgs', surface, plural, 'name-uniqueness', [(f'{cap(noun)} names {where} are {uq[0]}', 'name_uniqueness', uq[1])], f'feat({surface}): {noun} name uniqueness',
            [f'Two {plural} with the same name could not be told apart in the switcher.', 'Names are chosen by different people who cannot know what others picked.'])
        n = r.choice([32, 50, 64, 80, 100])
        add('orgs', surface, plural, 'name-length', [(f'{cap(noun)} names {where} are between 3 and {n} characters long', 'name_max_length', n)], f'feat({surface}): {noun} name length',
            ['One-letter names were used for throwaway tests and never cleaned up.'])
        d = r.choice([7, 14, 30, 60, 90])
        add('orgs', surface, plural, 'deletion-grace', [(f'A deleted {noun} {where} can be restored for {d} days', 'restore_window_days', d), ('after that it is removed for good', 'purged_after_window', True)],
            f'feat({surface}): {d}-day restore window for {plural}', [f'Most deletions that were regretted were noticed within a week or two.'])
        tr = r.choice([('only to someone who is already a member of it', 'existing member'), ('to any verified account, which must accept the transfer', 'any account, on acceptance'), ('only by staff', 'staff only')])
        add('orgs', surface, plural, 'ownership-transfer', [(f'Ownership of {an(noun)} {where} can be transferred {tr[0]}', 'ownership_transfer', tr[1])], f'feat({surface}): transferring {an(noun)}',
            ['A transfer to a mistyped address had handed a workspace to a stranger.', 'People leave, and what they owned has to go to someone.'])

# ---------------------------------------------------------------- password reset and sessions
# (surface, the accounts)
ACCOUNTS = [
    ('backoffice', 'back office staff accounts'), ('support', 'support portal accounts'), ('forum', 'community forum accounts'), ('portal', 'partner portal accounts'),
    ('license', 'license portal accounts'), ('status', 'status page administrator accounts'), ('telemetry', 'telemetry dashboard accounts'),
    ('education', 'education portal accounts'), ('marketplace', 'template author accounts'), ('website', 'newsletter preference accounts'),
    ('docs', 'documentation contributor accounts'), ('infra', 'infrastructure console accounts'), ('n8n', 'integration service accounts'),
]

def accounts():
    for surface, accts in ACCOUNTS:
        r = rng_for('accounts', surface, accts); one = accts[:-1]; k = accts
        TITLES[skey(surface, accts)] = cap(accts)
        DEFS[skey(surface, accts)] = (f'{cap(accts)}: the sign-in accounts of {WHO[accts]}, with passwords and sessions of their own. They are not the user accounts of a Papra instance.')
        rv = r.choice([(f'Resetting the password of {an(one)} signs out every session of that account', 'all sessions'),
                       (f'Resetting the password of {an(one)} keeps the session that performed the reset and ends all others', 'all but current'),
                       (f'Resetting the password of {an(one)} leaves existing sessions signed in until they expire', 'none')])
        add('sessions', surface, k, 'reset-and-sessions', [(rv[0], 'sessions_ended_on_reset', rv[1])], f'feat({surface}): sessions after a password reset',
            ['A reset is what people do when they think someone else is in their account.', 'Being signed out of the device they had just used to reset confused people.',
             'Sessions here last minutes, so ending them early was not worth the complexity.'])
        n = r.choice([15, 20, 30, 60, 120, 240, 1440]); old = None
        if r.random() < 0.4:
            m = r.choice([x for x in (10, 15, 30, 60) if x < n] or [10])
            old = ([(f'Password reset links for {accts} are valid for {m} minutes', 'reset_link_minutes', m)], r.choice(['Mail to some providers took longer than that to arrive.', 'Reason not stated.']))
        add('sessions', surface, k, 'reset-link-validity', [(f'Password reset links for {accts} are valid for {n} minutes', 'reset_link_minutes', n)], f'feat({surface}): reset links valid {n} minutes',
            ['A link in a mailbox is as good as the password for as long as it works.'], old)
        add('sessions', surface, k, 'reset-link-single-use', [(f'A password reset link for {accts} works once', 'reset_link_single_use', True), ('requesting a new link invalidates the earlier ones', 'new_link_invalidates_old', True)],
            f'feat({surface}): single-use reset links', ['An old link found in a mailbox months later still worked.'])
        n = r.choice([3, 5, 10]); per = r.choice(['hour', 'day'])
        add('sessions', surface, k, 'reset-rate-limit', [(f'At most {n} password reset emails are sent per account per {per} for {accts}', f'reset_emails_per_{per}', n)], f'feat({surface}): limit reset emails',
            ['The reset form had been used to flood a mailbox.'])
        add('sessions', surface, k, 'reset-unknown-address', [(f'Asking for a password reset for an address that has no account among {accts} gives the same answer as for one that does', 'reset_reveals_account', False)],
            f'fix({surface}): do not reveal accounts on reset', ['The form could be used to check whether an address had an account.'])
        nt = r.choice([('is confirmed by an email to the account address', True), ('sends no confirmation email', False)])
        add('sessions', surface, k, 'reset-notification', [(f'A completed password reset for {accts} {nt[0]}', 'reset_confirmation_email', nt[1])], f'feat({surface}): notify after a password reset',
            ['The owner should hear about a reset they did not ask for.', 'The reset itself already goes through the mailbox, so a second email added nothing.'])
        em = r.choice([('signs out every other session', 'others ended'), ('does not end any session', 'none ended')])
        add('sessions', surface, k, 'email-change', [(f'Changing the email address of {an(one)} {em[0]}', 'sessions_on_email_change', em[1])], f'feat({surface}): sessions after an email change',
            ['An address change is often the first step of taking an account over.'])
        d = r.choice([1, 7, 14, 30, 90]); idle = r.choice([15, 30, 60, 720])
        add('sessions', surface, k, 'session-lifetime', [(f'Sessions of {accts} last at most {d} day{"s" if d > 1 else ""}', 'session_days', d), (f'they end after {idle} minutes without activity', 'session_idle_minutes', idle)],
            f'feat({surface}): session lifetime', ['Shared computers were left signed in.', 'People were asked to sign in several times a day and complained.'])
        n = r.choice([1, 2, 3, 5, 10])
        add('sessions', surface, k, 'concurrent-sessions', [(f'{cap(an(one))} can have at most {n} sessions at a time', 'concurrent_sessions', n), ('signing in beyond that ends the oldest one', 'over_limit', 'oldest ended')],
            f'feat({surface}): limit concurrent sessions', ['Shared logins were a way around per-seat pricing.'])
        n = r.choice([8, 10, 12, 14, 16])
        add('sessions', surface, k, 'password-length', [(f'Passwords of {accts} are at least {n} characters long', 'password_min_length', n), ('there is no rule about character classes', 'character_class_rule', False)],
            f'feat({surface}): password minimum length {n}', ['Length does more than rules about symbols, which people satisfy with "!" at the end.'])
        tf = r.choice([('does not turn off two-factor authentication', False), ('turns off two-factor authentication, which must be set up again', True)])
        add('sessions', surface, k, 'reset-and-two-factor', [(f'Resetting the password of {an(one)} {tf[0]}', 'reset_disables_two_factor', tf[1])], f'feat({surface}): two-factor after a password reset',
            ['Otherwise a mailbox alone would be enough to get past the second factor.', 'People who lost their phone had no other way back in.'])
        ch = r.choice([('keeps the current session and ends the others', 'others ended'), ('keeps every session', 'none ended')])
        add('sessions', surface, k, 'password-change', [(f'Changing a password from the settings of {an(one)}, as opposed to resetting it, {ch[0]}', 'sessions_on_password_change', ch[1])],
            f'feat({surface}): sessions after a password change', ['The person changing it is signed in and knows the old password, so the case differs from a reset.'])

for build in (labels, searches, secrets, containers, accounts): build()

# ---------------------------------------------------------------- writing
def stamp(key, year=None):
    """A recorded-at time derived from the entry: between 2025-02 and 2026-09."""
    h = int(hashlib.sha256(f'{SEED}|{key}'.encode()).hexdigest()[:12], 16)
    month = h % 20; y, mo = 2025 + (month + 1) // 12, (month + 1) % 12 + 1
    return f'{y}-{mo:02d}-{h // 20 % 28 + 1:02d}T{h // 560 % 10 + 8:02d}:{h // 5600 % 60:02d}:{h // 336000 % 60:02d}.000Z'

ROLES_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'crowd-roles.json')
ROLES = json.load(open(ROLES_FILE)) if os.path.exists(ROLES_FILE) else {}

def claim_key(text): return 'CLAIM-' + hashlib.sha256(text.lower().encode()).hexdigest()[:16].upper()
class _Dumper(yaml.SafeDumper):
    def increase_indent(self, flow=False, indentless=False): return super().increase_indent(flow, False)  # lists indented, as Kibi writes them
def dump(front, body): return '---\n' + yaml.dump(front, Dumper=_Dumper, sort_keys=False, allow_unicode=True, width=100000) + '---\n' + body

def render(topic, e, rid, clauses, reason, ref, number, at, status='active', tag='', why_changed=None):
    """The files of one decision: the requirement, one property fact per clause, their links."""
    src_title = SURFACES[e.surface][0]; origin_ref = f'{src_title}: {ref}-{number}'
    statement = '; '.join(c for c, _, _ in clauses) + '.'
    title = statement if len(statement) <= 160 else statement[:157].rstrip() + '…'
    inv, facts, rels, pos = [], {}, [], 0
    subj_id = f'FACT-{slug(e.subject)}-subject'
    for text, prop, val in clauses:
        start = statement.index(text, pos); pos = start + len(text); ck = claim_key(text)
        inv.append({'claim_key': ck, 'claim_text': text, 'role': ROLES.get(text, 'descriptive'), 'status': 'modeled', 'span': {'start': start, 'end': pos}, 'subjects': [e.subject]})
        fid = f'FACT-{slug(e.subject)}-{slug(prop)}' + tag
        f = {'title': f'{e.subject} {prop} = {val}', 'status': 'deprecated' if status == 'closed' else 'active', 'fact_kind': 'property_value', 'subject_key': e.subject, 'property_key': prop, 'operator': 'eq'}
        if isinstance(val, bool): f.update(value_type='bool', value_bool=val)
        elif isinstance(val, int): f.update(value_type='int', value_int=val)
        else: f.update(value_type='string', value_string=val)
        f.update(claim_key=ck, claim_text=text, text_ref=rid, tags=['lane:strict', f'knowledge-source:{e.surface}-decisions'], origin={'kind': 'agent', 'ref': origin_ref, 'recorded_at': at}, id=fid, type='fact')
        facts[fid] = dump(f, f'{cap(text)}.\n\nModeled from {rid} so the claim can be checked for contradictions.\n')
        rels.append(('requires_property', rid, fid))
    rels.append(('constrains', rid, subj_id))
    body = [statement, '', '## Context', '', reason, '']
    if why_changed: body += ['## Why this changed', '', why_changed, '']
    body += ['## Source', '', f'> {e.quote} ({ref}-{number})', '', f'Source: {src_title} - {ref}-{number}', '']
    front = {'title': title, 'status': status, 'semantic_text': statement, 'semantic_clauses': [c for c, _, _ in clauses], 'logic_claims': [i['claim_key'] for i in inv],
             'semantic_inventory_version': 'kibi.semantic-inventory.v1', 'semantic_source_field': 'semantic_text',
             'semantic_source_hash': hashlib.sha256(statement.encode()).hexdigest(), 'semantic_inventory': inv, 'firmness': 'firm', 'required_evidence': 'asserted',
             'origin': {'kind': 'import', 'ref': origin_ref, 'recorded_at': at}, 'tags': ['bootstrap', f'knowledge-source:{e.surface}-decisions', f'component:{e.surface}']}
    if reason != 'Reason not stated.': front['rationale'] = reason
    front.update(id=rid, type='req')
    return dump(front, '\n'.join(body)), facts, rels

def put(files, new):
    for path, text in new.items():
        if path in files: raise SystemExit(f'two entries write {path}')
        files[path] = text

def build():
    """Every generated file: {relative path: text}, and the relationship records."""
    files, rels, seen, numbers = {}, [], set(), {}
    subjects = {e.subject for _, e in ENTRIES}
    def words(subject): return {w.rstrip('s') for w in re.split(r'[._]', subject.split('.', 1)[1])}
    for topic, e in ENTRIES:
        r = rng_for('entry', e.subject, e.key)
        rid = f'REQ-{e.surface}-{slug(e.subject.split(".", 1)[1])}-{e.key}'
        if rid in seen: raise SystemExit(f'duplicate id {rid}')
        seen.add(rid)
        ref = SURFACES[e.surface][1]; number = numbers[ref] = numbers.get(ref, 100) + r.choice([1, 2, 3, 5, 8])
        reason = r.choice(e.reasons) if r.random() < 0.55 else 'Reason not stated.'
        at = stamp(rid); why = None
        if e.old:
            old_clauses, changed = e.old; oid = rid + '-earlier'; onum = number - r.choice([40, 55, 70]); oat = stamp(oid)
            if oat > at: oat, at = at, oat
            text, facts, rl = render(topic, e, oid, old_clauses, 'Reason not stated.', ref, onum, oat, status='closed', tag='-earlier')
            put(files, {f'requirements/{oid}.md': text, **{f'facts/{k}.md': v for k, v in facts.items()}}); rels += [(*x, oat) for x in rl]
            rels.append(('supersedes', rid, oid, at))
            why = (f'{ref}-{number} replaced the value recorded in {ref}-{onum} and gives this reason for the change: {changed}' if changed != 'Reason not stated.' else
                   f'Reason not stated. {ref}-{number} replaces the value recorded in {ref}-{onum} without saying why it changed.')
        text, facts, rl = render(topic, e, rid, e.clauses, reason, ref, number, at, why_changed=why)
        put(files, {f'requirements/{rid}.md': text, **{f'facts/{k}.md': v for k, v in facts.items()}}); rels += [(*x, at) for x in rl]
        sid = f'FACT-{slug(e.subject)}-subject'
        if f'facts/{sid}.md' not in files:
            near = sorted(o for o in subjects if o != e.subject and o < e.subject and o.split('.')[0] == e.surface and words(o) & words(e.subject))
            s = {'title': e.subject_title, 'status': 'active', 'fact_kind': 'subject', 'subject_key': e.subject, 'canonical_key': e.subject, **({'distinct_from': near} if near else {}), 'tags': ['lane:strict', f'knowledge-source:{e.surface}-decisions'],
                 'origin': {'kind': 'agent', 'ref': SURFACES[e.surface][0], 'recorded_at': stamp(sid)}, 'id': sid, 'type': 'fact'}
            files[f'facts/{sid}.md'] = dump(s, DEFS[e.subject] + '\n')
    return files, rels

def write(src, out):
    files, rels = build()
    if os.path.exists(out): shutil.rmtree(out)
    shutil.copytree(src, out)
    for path, text in sorted(files.items()):
        full = os.path.join(out, path)
        if os.path.exists(full): raise SystemExit(f'{path} exists in the source knowledge base')
        open(full, 'w').write(text)
    shards = {}
    for kind, a, b, at in rels:
        shards.setdefault(hashlib.sha256(a.encode()).hexdigest()[:2], []).append(
            {'id': 'rel-' + hashlib.sha256(f'{kind}|{a}|{b}'.encode()).hexdigest()[:12], 'type': kind, 'from': a, 'to': b, 'created_at': at, 'created_by': 'kibi/upsert', 'source': 'mcp://kibi/upsert'})
    for shard, records in sorted(shards.items()):
        path = os.path.join(out, 'relationships', f'{shard}.yaml')
        head = open(path).read().rstrip('\n') + '\n' if os.path.exists(path) else 'relationships:\n'
        if head.rstrip().endswith(']'):  # a shard Kibi wrote in flow style cannot be appended to: the same records, as a block list
            records = yaml.load(head, Loader=yaml.BaseLoader)['relationships'] + records; head = 'relationships:\n'
        open(path, 'w').write(head + ''.join('  - ' + '\n    '.join(f'{k}: {json.dumps(v) if k == "created_at" else v}' for k, v in rec.items()) + '\n' for rec in records))
    reqs = sum(1 for p in files if p.startswith('requirements/'))
    print(f'{reqs} generated requirements ({sum(1 for p in files if p.endswith("-earlier.md") and p.startswith("requirements/"))} closed), {len(files) - reqs} facts, {len(rels)} relationships -> {out}')

if __name__ == '__main__':
    args = sys.argv[1:]
    if '--seed' in args: SEED = int(args[args.index('--seed') + 1]); del args[args.index('--seed'):args.index('--seed') + 2]
    if SEED != 7:  # the entries above were drawn with the default seed at import; draw them again
        ENTRIES.clear()
        for b in (labels, searches, secrets, containers, accounts): b()
    if args and args[0] == '--roles':
        import subprocess
        from concurrent.futures import ThreadPoolExecutor
        def roles(statement_clauses):
            statement, clauses = statement_clauses
            p = subprocess.run(['kibi', 'model', '--input', '-'], input=json.dumps({'mode': 'analyze', 'text': statement, 'clauses': clauses}), cwd=args[1], capture_output=True, text=True, timeout=600)
            props = json.loads(p.stdout.strip().splitlines()[0])['data']['receipt']['propositions']
            if [x['claim_text'] for x in props] != clauses: raise SystemExit(f'the advisor splits {statement!r} differently: {[x["claim_text"] for x in props]}')
            for x, c in zip(props, clauses):
                if x['claim_key'] != claim_key(c): raise SystemExit(f'claim key of {c!r}: {x["claim_key"]}')
            return [(x['claim_text'], x['role']) for x in props]
        todo = []
        for _, e in ENTRIES:
            for clauses in ([e.clauses] + ([e.old[0]] if e.old else [])):
                todo.append(('; '.join(c for c, _, _ in clauses) + '.', [c for c, _, _ in clauses]))
        with ThreadPoolExecutor(4) as pool: found = [x for r in pool.map(roles, todo) for x in r]
        out = {t: r for t, r in sorted(found) if r != 'descriptive'}
        json.dump(out, open(ROLES_FILE, 'w'), indent=1, sort_keys=True); open(ROLES_FILE, 'a').write('\n')
        print(f'{len(found)} clauses, {len(out)} not descriptive -> {ROLES_FILE}')
    elif args and args[0] == '--list':
        for path in sorted(build()[0]):
            if path.startswith('requirements/'): print(path[13:-3])
    elif len(args) == 2: write(*args)
    else: raise SystemExit(__doc__)
