import assert from "node:assert/strict";
import { test } from "node:test";
import { deploymentRunUrl } from "./build-info.ts";

test("links to the GitHub Actions run for this build", () => {
  assert.equal(
    deploymentRunUrl({ GITHUB_REPOSITORY: "example/portfolio", GITHUB_RUN_ID: "12345" }),
    "https://github.com/example/portfolio/actions/runs/12345",
  );
});

test("omits the link when run metadata is missing or invalid", () => {
  for (const env of [
    {},
    { GITHUB_REPOSITORY: "example/portfolio" },
    { GITHUB_RUN_ID: "12345" },
    { GITHUB_REPOSITORY: "https://example.com", GITHUB_RUN_ID: "12345" },
    { GITHUB_REPOSITORY: "example/portfolio", GITHUB_RUN_ID: "../settings" },
  ]) {
    assert.equal(deploymentRunUrl(env), null);
  }
});
