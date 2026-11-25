import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hookSource, lookupSource } from '../src/agent.ts';

test('hookSource names the hook that showed a decision', () => {
  assert.equal(hookSource('PreToolUse:Edit'), 'edit-hook');
  assert.equal(hookSource('PostToolUse:Write'), 'edit-hook');
  assert.equal(hookSource('PreToolUse:Bash'), 'read-hook');
  assert.equal(hookSource('PostToolUse:Read'), 'read-hook');
  assert.equal(hookSource('PostToolUse:Grep'), 'read-hook');
  assert.equal(hookSource('SessionStart:startup'), 'session-hook');
  assert.equal(hookSource('UserPromptSubmit'), 'session-hook');
  assert.equal(hookSource('PreToolUse:WebFetch'), 'hook:WebFetch');
  assert.equal(hookSource('Stop'), 'hook:Stop');
  assert.equal(hookSource(''), 'hook:unknown');
});

test('lookupSource names the tool that found a decision', () => {
  assert.equal(lookupSource('mcp__kibi__kb_search', {}), 'kb_search');
  assert.equal(lookupSource('mcp__tracker__tracker_search', {}), 'tracker_search');
  assert.equal(lookupSource('mcp__mem0__search_memories', {}), 'search_memories');
  assert.equal(lookupSource('Bash', { command: 'npx kibi search tags' }), 'cli');
  assert.equal(lookupSource('Bash', { command: 'cat docs/decisions.md' }), 'file-read');
  assert.equal(lookupSource('Read', { file_path: 'docs/x.md' }), 'file-read');
});
