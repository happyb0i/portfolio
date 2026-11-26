import { Layers, Server, Terminal } from "lucide-react";

export function Hero() {
  return (
    <>
      <section className="hy-hero" id="home">
        <div className="hy-hero-copy">
          <div className="hy-eyebrow">
            <span></span> INFRASTRUCTURE ENGINEER · SINGAPORE
          </div>
          <h1>
            Behind the apps.
            <br />
            <em>Under the hood.</em>
          </h1>
          <p>
            I build and operate cloud infrastructure,
            automate deployments, and create environments for AI
            agents to run.
          </p>
          <div className="hy-actions">
            <a className="hy-primary" href="#work">
              Explore my work <span>↓</span>
            </a>
            <a href="#experience">
              My experience <span>↗</span>
            </a>
          </div>
          <div className="hy-current">
            Currently Infrastructure Engineer at <strong>Homeswift.ai</strong>
          </div>
        </div>
        <figure className="hy-hero-drawing">
          <figcaption>How I isolated coding agents on EKS</figcaption>
          <ol className="hy-isolation-stack">
            <li>
              <Terminal aria-hidden="true" />
              <span>AI coding-agent workloads</span>
            </li>
            <li>
              <Layers aria-hidden="true" />
              <span>Kata Containers with Firecracker microVMs</span>
            </li>
            <li>
              <Server aria-hidden="true" />
              <span>EKS nodes configured for nested virtualization</span>
            </li>
          </ol>
        </figure>
      </section>
      <div className="hy-toolstrip">
        <span>TOOLS I WORK WITH</span>
        <div>
          AWS <b>·</b> Kubernetes <b>·</b> Terraform <b>·</b> GitLab CI/CD{" "}
          <b>·</b> Argo CD <b>·</b> Grafana
        </div>
      </div>
    </>
  );
}
