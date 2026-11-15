export type BuildInfo = {
  repository: string | null;
  revision: string | null;
  runId: string | null;
};

// Only these public identifiers are bundled. Never expose process.env wholesale.
export function getBuildInfo(
  env: Record<string, string | undefined>,
): BuildInfo {
  const repository = env.GITHUB_REPOSITORY || env.PORTFOLIO_REPOSITORY || "";
  const revision = env.GITHUB_SHA || "";
  const runId = env.GITHUB_RUN_ID || "";
  return {
    repository: /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+$/.test(repository)
      ? repository
      : null,
    revision: /^[a-f0-9]{40}$/i.test(revision) ? revision : null,
    runId: /^\d+$/.test(runId) ? runId : null,
  };
}

export function sourceLinks(info: BuildInfo) {
  const base = info.repository ? `https://github.com/${info.repository}` : null;
  return {
    repository: base,
    commit: base && info.revision ? `${base}/commit/${info.revision}` : null,
    run: base && info.runId ? `${base}/actions/runs/${info.runId}` : null,
    file: (path: string) =>
      base
        ? `${base}/blob/${info.revision || "main"}/${path.split("/").map(encodeURIComponent).join("/")}`
        : null,
  };
}

// Excerpts come from the checked-in workflow, not a second illustrative copy.
export function workflowExcerpt(source: string, section: string): string {
  const start = `# inspect:${section}:start`;
  const end = `# inspect:${section}:end`;
  const after = source.split(start)[1];
  if (!after || !after.includes(end))
    throw new Error(`Missing workflow section: ${section}`);
  const lines = after.split(end)[0].trimEnd().replace(/^\n/, "").split("\n");
  const indents = lines
    .filter((line) => line.trim())
    .map((line) => line.match(/^ */)![0].length);
  const indent = Math.min(...indents);
  return lines.map((line) => line.slice(indent)).join("\n");
}
