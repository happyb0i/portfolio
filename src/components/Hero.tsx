import { Layers, Terminal } from "lucide-react";

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
        <div
          className="hy-hero-drawing"
          aria-label="Conceptual stack for isolated AI coding-agent workloads on EKS"
        >
          <span className="hy-drawing-label">A LOOK UNDER THE HOOD</span>
          <div className="hy-workload">
            <Terminal aria-hidden="true" />
            <div>
              AI coding-agent workloads
              <small>Isolated execution environments</small>
            </div>
          </div>
          <div className="hy-connection"></div>
          <div className="hy-eks">
            <span>KUBERNETES / AMAZON EKS</span>
            <div className="hy-kata">
              <Layers aria-hidden="true" />
              <div>
                Kata Containers<small>Firecracker microVMs</small>
              </div>
            </div>
            <div className="hy-microvms">
              <span>Isolated workload</span>
              <span>Isolated workload</span>
            </div>
          </div>
          <p>Conceptual view · Homeswift.ai infrastructure work</p>
        </div>
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
