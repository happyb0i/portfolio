export function Experience() {
  return (
    <>
      <section className="pw-career" id="experience">
        <div className="pw-section-label">
          <div>
            02 / EXPERIENCE<h2>Built on hands-on experience.</h2>
          </div>
          <span>Networks → automation → infrastructure</span>
        </div>
        <div className="pw-career-layout">
          <div className="pw-career-intro">
            <h2>
              Built from
              <br /> the ground up.
            </h2>
            <p>
              I started in network administration and IT support, then moved
              into automation and DevOps. That path has taken me from deploying
              computers and managing backups to building cloud platforms and
              internal tools.
            </p>
            <details className="pw-education">
              <summary>
                Education & early roles <span>+</span>
              </summary>
              <p>
                <strong>
                  Bachelor of Computer Science: Digital Systems Security
                </strong>
                <br /> University of Wollongong (SIM) · 2017–2019
              </p>
              <p>
                <strong>Diploma in Information Technology</strong>
                <br /> Republic Polytechnic · 2010–2013
              </p>
              <p>
                Earlier roles: part-time IT administration at Pay2Home (2013)
                and an Android game development internship at Dreamsmart
                Solutions (2012).
              </p>
            </details>
          </div>
          <ol className="pw-timeline">
            <li>
              <span className="pw-date">2026 — NOW</span>
              <div>
                <h3>Homeswift.ai</h3>
                <span className="pw-role">Infrastructure Engineer</span>
                <p>
                  AI-agent tooling and isolated workloads. Migrated application
                  traffic to Cloudflare Tunnel and configured Zero Trust access.
                </p>
                <small>
                  Continued from Tensorplex Labs under the same management.
                </small>
              </div>
            </li>
            <li>
              <span className="pw-date">2024 — 2025</span>
              <div>
                <h3>Tensorplex Labs</h3>
                <span className="pw-role">Infrastructure Engineer</span>
                <p>
                  Sole infrastructure engineer across three products. CI/CD,
                  production security checks, shared observability, and
                  operations for more than 20 Bittensor validators.
                </p>
              </div>
            </li>
            <li>
              <span className="pw-date">2022 — 2024</span>
              <div>
                <h3>Caspen Technology</h3>
                <span className="pw-role">DevOps Engineer</span>
                <p>
                  Containerised applications, deployed to EKS and VKE, and
                  automated delivery with GitLab and Flux.
                </p>
              </div>
            </li>
            <li>
              <span className="pw-date">2021 — 2022</span>
              <div>
                <h3>Sea Limited</h3>
                <span className="pw-role">Automation Engineer</span>
                <p>
                  Automated reporting, VM discovery, and backup configuration
                  with Python, Ansible, and GitLab CI/CD.
                </p>
              </div>
            </li>
            <li>
              <span className="pw-date">2019 — 2021</span>
              <div>
                <h3>Sea Limited</h3>
                <span className="pw-role">IT Support Engineer</span>
                <p>
                  IT support, account administration, and computer imaging and
                  deployment.
                </p>
              </div>
            </li>
            <li>
              <span className="pw-date">2014 — 2019</span>
              <div>
                <h3>MINDEF</h3>
                <span className="pw-role">
                  Network Technician / Administrator
                </span>
                <p>
                  Network administration, equipment deployment, and
                  troubleshooting.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
