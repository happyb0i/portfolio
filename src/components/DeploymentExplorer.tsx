import { useState } from "react";
import {
  GitCommitHorizontal,
  ListChecks,
  Package,
  CloudUpload,
  PanelTop,
  FileCode,
  ChevronDown,
} from "lucide-react";
import workflow from "../../.github/workflows/deploy.yml?raw";
import hosting from "../../wrangler.jsonc?raw";
import heroSource from "./Hero.tsx?raw";
import packageSource from "../../package.json?raw";
import { sourceLinks, workflowExcerpt } from "../lib/build-info";

const links = sourceLinks(__BUILD_INFO__);
const workflowPath = ".github/workflows/deploy.yml";
const stages = [
  {
    id: "commit",
    label: "Commit",
    system: "GitHub",
    icon: GitCommitHorizontal,
    title: "Every release starts with a change.",
    description:
      "Pull requests and pushes to main trigger the checked-in GitHub Actions workflow.",
    evidence:
      "Follow the source revision and its workflow run. CI builds record their commit automatically.",
    path: workflowPath,
    code: workflowExcerpt(workflow, "commit"),
  },
  {
    id: "checks",
    label: "Checks",
    system: "GitHub Actions",
    icon: ListChecks,
    title: "Make the quality gate inspectable.",
    description:
      "Audit workflows and dependency-update configuration with zizmor, and run the app tests. Publishing requires both workflow security and the build to pass.",
    evidence:
      "Inspect the actual security gate and project checks. Dependabot separately proposes weekly updates for Bun dependencies, GitHub Actions, and Docker images.",
    path: workflowPath,
    code: [
      workflowExcerpt(workflow, "security"),
      workflowExcerpt(workflow, "checks"),
    ].join("\n\n"),
  },
  {
    id: "build",
    label: "Build",
    system: "React + Vite",
    icon: Package,
    title: "Turn the source into a release.",
    description:
      "TypeScript checks the app, then Vite bundles React and styles into dist/. For deployments from main, that output is saved as an artifact for publishing.",
    evidence:
      "The actual package scripts below define the checks, tests, and production build.",
    path: "package.json",
    code: JSON.stringify(
      { scripts: JSON.parse(packageSource).scripts },
      null,
      2,
    ),
  },
  {
    id: "publish",
    label: "Publish",
    system: "Cloudflare Pages",
    icon: CloudUpload,
    title: "The deployment is part of the story.",
    description:
      "Successful builds on main publish to Cloudflare Pages. Pull requests run checks and build without publishing. The publish job needs the Cloudflare project and credentials to be configured.",
    evidence:
      "Inspect the publish step and hosting configuration. The workflow uploads the same build artifact that passed the checks.",
    path: workflowPath,
    code: workflowExcerpt(workflow, "publish"),
  },
  {
    id: "page",
    label: "This page",
    system: "What you see",
    icon: PanelTop,
    title: "Close the loop with the page itself.",
    description:
      "This is a React application. The excerpt below is imported directly from the component that renders the introduction above.",
    evidence:
      "When built in GitHub Actions, source links point to the exact commit used for this version.",
    path: "src/components/Hero.tsx",
    code: heroSource.match(/<h1>[\s\S]*?<\/h1>/)?.[0] ?? heroSource,
  },
] as const;

type StageId = (typeof stages)[number]["id"];

export function DeploymentExplorer() {
  const [selected, setSelected] = useState<StageId>("commit");
  const [sourceOpen, setSourceOpen] = useState(false);
  const [sourceView, setSourceView] = useState<"workflow" | "hosting">(
    "workflow",
  );
  const stage = stages.find((item) => item.id === selected)!;
  const stageIndex = stages.findIndex((item) => item.id === selected);
  const showHosting = selected === "publish" && sourceView === "hosting";
  const path = showHosting ? "wrangler.jsonc" : stage.path;
  const code = showHosting ? hosting : stage.code;
  const sourceUrl = links.file(path);

  return (
    <section
      className="pw-shipping"
      id="deployment"
      aria-labelledby="deployment-title"
    >
      <div className="pw-section-label">
        <span>THIS SITE / UNDER THE HOOD</span>
        <span>GitHub → Cloudflare Pages</span>
      </div>
      <div className="pw-shipping-heading">
        <h2 id="deployment-title">How this site ships.</h2>
        <p>Choose a step. Inspect the source behind it.</p>
      </div>
      <div
        className="pw-delivery-path"
        role="group"
        aria-label="Deployment stages"
      >
        {stages.map((item) => {
          const Icon = item.icon;
          return (
            <button
              className="pw-delivery-stage"
              type="button"
              key={item.id}
              aria-pressed={selected === item.id}
              aria-controls="deployment-step-details"
              onClick={() => {
                setSelected(item.id);
                setSourceView("workflow");
              }}
            >
              <span className="pw-stage-marker" aria-hidden="true">
                <Icon />
              </span>
              <strong>{item.label}</strong>
              <span className="pw-stage-system">{item.system}</span>
            </button>
          );
        })}
      </div>
      <div className="pw-step-summary">
        <div
          className="pw-step-story"
          id="deployment-step-details"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="pw-inspector-kicker">
            0{stageIndex + 1} / {stage.label.toUpperCase()}
          </span>
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
        </div>
        <button
          className="pw-source-toggle"
          type="button"
          aria-expanded={sourceOpen}
          aria-controls="deployment-source-panel"
          onClick={() => setSourceOpen((open) => !open)}
        >
          <FileCode aria-hidden="true" />
          <span>{sourceOpen ? "Hide source" : "Inspect source"}</span>
          <ChevronDown className="pw-source-chevron" aria-hidden="true" />
        </button>
      </div>
      <div
        className="pw-evidence-pane"
        id="deployment-source-panel"
        role="region"
        aria-label={`${stage.label} source`}
        hidden={!sourceOpen}
      >
        <div className="pw-evidence-header">
          <span>
            <FileCode aria-hidden="true" />
            <span className="pw-evidence-name">{path}</span>
          </span>
          <span className="pw-evidence-status">PROJECT SOURCE</span>
        </div>
        <p className="pw-source-description">{stage.evidence}</p>
        {selected === "publish" && (
          <div
            className="pw-source-views"
            role="group"
            aria-label="Deployment source files"
          >
            <button
              type="button"
              aria-pressed={sourceView === "workflow"}
              onClick={() => setSourceView("workflow")}
            >
              Workflow
            </button>
            <button
              type="button"
              aria-pressed={sourceView === "hosting"}
              onClick={() => setSourceView("hosting")}
            >
              Hosting config
            </button>
          </div>
        )}
        <pre
          className="pw-source-excerpt"
          tabIndex={0}
          role="region"
          aria-label={`${stage.label} source code`}
        >
          <code>{code}</code>
        </pre>
        <div className="pw-evidence-bottom">
          <span>
            {sourceUrl
              ? __BUILD_INFO__.revision
                ? "Source at this build’s revision"
                : "Repository source · main branch"
              : "Source links become available when a repository is configured"}
          </span>
          {sourceUrl && (
            <a
              className="pw-evidence-link"
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open on GitHub ↗
            </a>
          )}
        </div>
      </div>
      <div className="pw-delivery-meta">
        <span className="pw-build-status">
          {__BUILD_INFO__.revision
            ? `Built from ${__BUILD_INFO__.revision.slice(0, 7)}`
            : import.meta.env.DEV
              ? "Local preview"
              : "Local build"}
        </span>
        {(links.commit || links.run) && (
          <div className="pw-source-links">
            {links.commit && (
              <a href={links.commit} target="_blank" rel="noreferrer">
                View commit ↗
              </a>
            )}
            {links.run && (
              <a href={links.run} target="_blank" rel="noreferrer">
                Workflow run ↗
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
