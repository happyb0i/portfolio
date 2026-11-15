import { Shield } from "lucide-react";
import type { ProjectId } from "../data/projects";

type Props = {
  id: ProjectId;
  open: boolean;
  label: string;
  onClose: () => void;
};

export function ProjectDetails({ id, open, label, onClose }: Props) {
  if (id === "platform")
    return (
      <div
        className="pw-project-content"
        hidden={!open}
        role="region"
        aria-label={label}
        id="pw-platform"
      >
        <div className="pw-sheet-heading">
          <span>01 / TENSORPLEX LABS · 2024 — 2025</span>
          <h2>Shared infrastructure for three products</h2>
          <button className="hy-close" type="button" onClick={onClose}>
            Close study ×
          </button>
        </div>
        <div className="pw-story">
          <div>
            <h3>The responsibility</h3>
            <p>
              I was the sole infrastructure engineer supporting all three
              products, covering EKS clusters, databases, caching services, and
              internal applications.
            </p>
          </div>
          <div>
            <h3>The architecture</h3>
            <p>
              I designed a hub-and-spoke architecture with two shared EKS
              clusters and separate AWS accounts for project-specific resources,
              provisioned with Terraform.
            </p>
          </div>
          <div>
            <h3>The decision</h3>
            <p>
              The design balanced compute utilisation, operational simplicity,
              and project isolation. I also built and maintained GitLab CI/CD
              and Argo CD workflows.
            </p>
          </div>
        </div>
        <div
          className="pw-diagram"
          aria-label="Simplified architecture showing two shared EKS clusters and separate AWS accounts for project-specific resources."
        >
          <div className="pw-diagram-caption">
            SHARED COMPUTE / PROJECT RESOURCES <span>SIMPLIFIED SCHEMATIC</span>
          </div>
          <div className="pw-platform-diagram">
            <div className="pw-clusters">
              <span>SHARED COMPUTE</span>
              <div>
                <b>EKS cluster 1</b>
                <b>EKS cluster 2</b>
              </div>
            </div>
            <div className="pw-account-group">
              <span>SEPARATE AWS ACCOUNTS</span>
              <div>
                <b>
                  Project-specific resources
                  <br /> Databases · Caching · Applications
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="pw-project-foot">
          <span>MY ROLE: SOLE INFRASTRUCTURE ENGINEER</span>
          <span>AWS · Terraform · EKS · GitLab · Argo CD</span>
        </div>
      </div>
    );
  if (id === "isolation")
    return (
      <div
        className="pw-project-content"
        hidden={!open}
        role="region"
        aria-label={label}
        id="pw-isolation"
      >
        <div className="pw-sheet-heading">
          <span>02 / HOMESWIFT.AI · 2026 — PRESENT</span>
          <h2>Isolated environments for live AI workloads</h2>
          <button className="hy-close" type="button" onClick={onClose}>
            Close study ×
          </button>
        </div>
        <div className="pw-story">
          <div>
            <h3>The requirement</h3>
            <p>
              Run live AI coding-agent workloads in isolated environments on
              EKS.
            </p>
          </div>
          <div>
            <h3>My contribution</h3>
            <p>
              I configured nodes with nested virtualization and deployed Kata
              Containers with Firecracker microVMs.
            </p>
          </div>
          <div>
            <h3>What it enabled</h3>
            <p>
              Live AI coding-agent workloads could run in isolated environments
              on the EKS platform.
            </p>
          </div>
        </div>
        <div
          className="pw-diagram"
          aria-label="Simplified stack: EKS nodes with nested virtualization, Kata Containers with Firecracker microVMs, and isolated AI coding-agent workloads."
        >
          <div className="pw-diagram-caption">
            ISOLATION STACK <span>SIMPLIFIED SCHEMATIC</span>
          </div>
          <div className="pw-stack">
            <div className="pw-stack-top">
              <Shield aria-hidden="true" /> Isolated AI coding-agent workloads
            </div>
            <div>Kata Containers + Firecracker microVMs</div>
            <div>EKS nodes configured with nested virtualization</div>
          </div>
        </div>
        <div className="pw-project-foot">
          <span>MY ROLE: NODE CONFIGURATION & RUNTIME DEPLOYMENT</span>
          <span>EKS · Kata Containers · Firecracker</span>
        </div>
      </div>
    );
  return null;
}
