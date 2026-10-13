import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import type { Arc, ProjectConfig, Rule, Task } from './types.ts';

export const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const PROJECTS_DIR = join(REPO_ROOT, 'projects');
export const ARMS_DIR = join(REPO_ROOT, 'arms');
export const RUNS_DIR = process.env.CIB_RUNS_DIR ? resolve(process.env.CIB_RUNS_DIR) : join(REPO_ROOT, 'runs');
export const CACHE_DIR = process.env.CIB_CACHE_DIR ? resolve(process.env.CIB_CACHE_DIR) : join(REPO_ROOT, 'cache');

function readYaml<T>(path: string): T {
  return YAML.parse(readFileSync(path, 'utf8')) as T;
}

export function loadProject(name: string): ProjectConfig {
  const path = join(PROJECTS_DIR, name, 'project.yaml');
  if (!existsSync(path)) throw new Error(`unknown project '${name}' (${path} missing)`);
  return readYaml<ProjectConfig>(path);
}

export function loadRules(project: string): Rule[] {
  return loadRulesDir(join(PROJECTS_DIR, project, 'rules'));
}

/** Rules from any directory of rule files (a project's, or the applicable subset written into a run). */
export function loadRulesDir(dir: string): Rule[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.yaml'))
    .sort()
    .map((f) => readYaml<Rule>(join(dir, f)));
}

export function loadTasks(project: string): Task[] {
  const dir = join(PROJECTS_DIR, project, 'tasks');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => statSync(join(dir, f)).isDirectory() && existsSync(join(dir, f, 'task.yaml')))
    .sort()
    .map((f) => readYaml<Task>(join(dir, f, 'task.yaml')));
}

export function loadTask(project: string, id: string): Task {
  const task = loadTasks(project).find((t) => t.id === id);
  if (!task) throw new Error(`unknown task '${id}' in project '${project}'`);
  return task;
}

export function listProjects(): string[] {
  return readdirSync(PROJECTS_DIR).filter((f) => existsSync(join(PROJECTS_DIR, f, 'project.yaml')));
}

export function listArms(): string[] {
  return readdirSync(ARMS_DIR).filter((f) => statSync(join(ARMS_DIR, f)).isDirectory());
}

export function loadArcs(project: string): Arc[] {
  const dir = join(PROJECTS_DIR, project, 'arcs');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => statSync(join(dir, f)).isDirectory() && existsSync(join(dir, f, 'arc.yaml')))
    .sort()
    .map((f) => ({ ...readYaml<Arc>(join(dir, f, 'arc.yaml')), _dir: join(dir, f) }));
}

export function loadArc(project: string, id: string): Arc {
  const arc = loadArcs(project).find((a) => a.id === id);
  if (!arc) throw new Error(`unknown arc '${id}' in project '${project}'`);
  return arc;
}
