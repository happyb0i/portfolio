import { useRef, useState } from "react";
import { Network, Shield } from "lucide-react";
import { projects } from "../data/projects";
import type { ProjectId } from "../data/projects";
import { ProjectDetails } from "./ProjectDetails";

const icons = { platform: Network, isolation: Shield };

export function Projects() {
  const [selected, setSelected] = useState<ProjectId | null>(null);
  const triggers = useRef<Partial<Record<ProjectId, HTMLButtonElement | null>>>(
    {},
  );

  function closeStudy(id: ProjectId) {
    setSelected(null);
    triggers.current[id]?.focus({ preventScroll: true });
    triggers.current[id]?.scrollIntoView({ block: "nearest" });
  }

  return (
    <section className="pw-selected" id="work" aria-labelledby="work-title">
      <div className="pw-section-label">
        <div>
          01 / SELECTED WORK<h2 id="work-title">Systems I’ve helped build.</h2>
        </div>
        <span>
          The work I owned, the decisions I made, and what they enabled.
        </span>
      </div>
      {projects.map((project) => {
        const Icon = icons[project.id];
        const open = selected === project.id;
        return (
          <article
            className="pw-project"
            data-key={project.id}
            key={project.id}
          >
            <button
              className="pw-project-toggle"
              type="button"
              ref={(element) => {
                triggers.current[project.id] = element;
              }}
              aria-expanded={open}
              aria-controls={`pw-${project.id}`}
              aria-label={`${open ? "Close" : "Read"} case study: ${project.title}`}
              onClick={() => setSelected(open ? null : project.id)}
            >
              <span className="pw-number">
                <Icon aria-hidden="true" />
                {project.number}
              </span>
              <span className="pw-project-main">
                <span className="pw-company">{project.company}</span>
                <span className="pw-project-title">{project.title}</span>
                <span className="pw-project-result">{project.summary}</span>
              </span>
              <span className="pw-project-type">
                {open ? "Close case study" : "Read case study"}
                <span className="pw-open-indicator" aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </span>
            </button>
            <ProjectDetails
              id={project.id}
              open={open}
              label={project.title}
              onClose={() => closeStudy(project.id)}
            />
          </article>
        );
      })}
    </section>
  );
}
