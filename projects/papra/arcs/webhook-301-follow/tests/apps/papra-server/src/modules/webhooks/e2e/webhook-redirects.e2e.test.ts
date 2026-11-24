// Benchmark-owned test (not from the Papra repository). A webhook delivery does not follow an HTTP
// redirect: the 3xx answer is the delivery's result and the redirect target is never called (#1099).
// The last test goes through the whole delivery (trigger services, usecase, saved delivery), so a
// redirect followed by a caller of the HTTP client fails too.
import type { AddressInfo } from 'node:net';
import { createServer } from 'node:http';
import { afterEach, describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createTestLogger } from '../../shared/logger/logger.test-utils';
import { createWebhookHttpClient } from '../webhooks.http-client';
import { createWebhookRepository } from '../webhooks.repository';
import { webhookDeliveriesTable } from '../webhooks.tables';
import { createWebhookTriggerServices } from '../webhooks.trigger.services';

const servers: ReturnType<typeof createServer>[] = [];
afterEach(async () => {
  await Promise.all(servers.splice(0).map(async (s) => new Promise((resolve) => s.close(resolve))));
});

async function startReceiver(status: number) {
  const hits: string[] = [];
  const server = createServer((req, res) => {
    hits.push(req.url ?? '');
    if (req.url === '/old') {
      res.writeHead(status, { Location: '/new' });
      res.end();
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ received: true }));
  });
  servers.push(server);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address() as AddressInfo;
  return { hits, url: (path: string) => `http://127.0.0.1:${port}${path}` };
}

describe('webhook deliveries and redirects', () => {
  test.each([301, 302, 307, 308])('a %i answer is returned as the result and its target is not requested', async (status) => {
    const receiver = await startReceiver(status);
    const httpClient = createWebhookHttpClient({ isSsrfProtectionEnabled: false, allowedHostnames: new Set() });

    const { responseStatus } = await httpClient({
      url: receiver.url('/old'),
      method: 'POST',
      body: JSON.stringify({ event: 'document:created' }),
      headers: { 'Content-Type': 'application/json' },
    });

    expect(responseStatus).toBe(status);
    expect(receiver.hits).toEqual(['/old']);
  });

  test('the same holds when the receiver is on the SSRF allow list', async () => {
    const receiver = await startReceiver(301);
    const httpClient = createWebhookHttpClient({ isSsrfProtectionEnabled: true, allowedHostnames: new Set(['127.0.0.1']) });

    const { responseStatus } = await httpClient({ url: receiver.url('/old'), method: 'POST', body: '{}', headers: {} });

    expect(responseStatus).toBe(301);
    expect(receiver.hits).toEqual(['/old']);
  });

  test('a delivery triggered for an event records the 3xx answer and never calls the redirect target', async () => {
    const receiver = await startReceiver(301);
    const { db } = await createInMemoryDatabase({
      organizations: [{ id: 'org_1', name: 'Organization 1' }],
      webhooks: [{ id: 'wbh_1', name: 'Receiver', url: receiver.url('/old'), organizationId: 'org_1', enabled: true }],
      webhookEvents: [{ id: 'wbh_ev_1', webhookId: 'wbh_1', eventName: 'document:created' }],
    });
    const { logger } = createTestLogger();
    const { triggerWebhooks } = createWebhookTriggerServices({
      webhooksConfig: { isSsrfProtectionEnabled: false, webhookUrlAllowedHostnames: new Set() } as never,
      webhookRepository: createWebhookRepository({ db }),
    });

    await triggerWebhooks({
      organizationId: 'org_1',
      event: 'document:created',
      payloads: [{ documentId: 'doc_1', organizationId: 'org_1', name: 'Document 1', createdAt: new Date('2025-01-01'), updatedAt: new Date('2025-01-01') }],
      logger,
    } as never);

    const deliveries = await db.select().from(webhookDeliveriesTable);
    expect(deliveries.map(d => d.responseStatus)).toEqual([301]);
    expect(receiver.hits).toEqual(['/old']);
  });
});
