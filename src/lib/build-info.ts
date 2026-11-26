export function deploymentRunUrl(env: Record<string, string | undefined>) {
  const repository = env.GITHUB_REPOSITORY;
  const runId = env.GITHUB_RUN_ID;
  if (
    !repository || !/^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+$/.test(repository) ||
    !runId || !/^\d+$/.test(runId)
  ) {
    return null;
  }
  return `https://github.com/${repository}/actions/runs/${runId}`;
}
