import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { getBuildInfo, sourceLinks, workflowExcerpt } from "./build-info.ts";

test("local builds do not fabricate repository, commit, or run links", () => {
  const info = getBuildInfo({});
  assert.deepEqual(info, { repository: null, revision: null, runId: null });
  assert.equal(sourceLinks(info).file("src/App.tsx"), null);
  assert.equal(sourceLinks(info).run, null);
});

test("CI source links point to the exact built revision and run", () => {
  const sha = "a".repeat(40);
  const links = sourceLinks(
    getBuildInfo({
      GITHUB_REPOSITORY: "example/portfolio",
      GITHUB_SHA: sha,
      GITHUB_RUN_ID: "12345",
    }),
  );
  assert.equal(
    links.commit,
    `https://github.com/example/portfolio/commit/${sha}`,
  );
  assert.equal(
    links.file(".github/workflows/deploy.yml"),
    `https://github.com/example/portfolio/blob/${sha}/.github/workflows/deploy.yml`,
  );
  assert.equal(
    links.run,
    "https://github.com/example/portfolio/actions/runs/12345",
  );
});

test("invalid public metadata and secret fields never become release metadata", () => {
  assert.deepEqual(
    getBuildInfo({
      GITHUB_REPOSITORY: "https://elsewhere.test/me",
      GITHUB_SHA: "main",
      GITHUB_RUN_ID: "../settings",
      CLOUDFLARE_API_TOKEN: "private",
    }),
    { repository: null, revision: null, runId: null },
  );
});

test("every explorer excerpt is backed by the real workflow", () => {
  const workflow = readFileSync(
    new URL("../../.github/workflows/deploy.yml", import.meta.url),
    "utf8",
  );
  assert.match(workflowExcerpt(workflow, "commit"), /pull_request:/);
  assert.match(workflowExcerpt(workflow, "security"), /zizmorcore\/zizmor-action/);
  assert.match(workflowExcerpt(workflow, "checks"), /bun run test/);
  assert.match(workflowExcerpt(workflow, "build"), /bun run build/);
  assert.match(
    workflowExcerpt(workflow, "publish"),
    /pages deploy dist/,
  );
  assert.throws(
    () => workflowExcerpt(workflow, "missing"),
    /Missing workflow section/,
  );
});
