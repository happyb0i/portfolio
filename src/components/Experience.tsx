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
              I started in network operations and IT support, then moved into
              infrastructure automation at Sea. Today I build cloud platforms,
              automate deployments, and run isolated environments for AI workloads.
            </p>
            <section className="pw-education" aria-labelledby="education">
              <h3 id="education">Education</h3>
              <ul>
                <li>
                  <h4>Bachelor of Computer Science</h4>
                  <p className="pw-specialisation">Digital Systems Security</p>
                  <p>University of Wollongong (SIM) · 2017–2019</p>
                </li>
                <li>
                  <h4>Diploma in Information Technology</h4>
                  <p>Republic Polytechnic · 2010–2013</p>
                </li>
              </ul>
            </section>
          </div>
          <div>
            <ol className="pw-timeline">
              <li>
                <span className="pw-date">2026 — NOW</span>
                <div>
                  <h3>Homeswift.ai</h3>
                  <span className="pw-role">Infrastructure Engineer</span>
                  <ul className="pw-accomplishments">
                    <li>
                      Built a self-service app that let users launch their own AI agents on
                      Kubernetes, with persistent storage to retain each agent’s state.
                    </li>
                    <li>
                      Isolated live coding agents on EKS by configuring nodes for nested
                      virtualization and deploying Kata Containers with Firecracker
                      microVMs.
                    </li>
                    <li>
                      Migrated application traffic to Cloudflare Tunnel and restricted
                      access to protected applications with Cloudflare Zero Trust.
                    </li>
                  </ul>
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
                  <p>Sole infrastructure engineer for Backprop Finance, Tensorplex Stake, and Dojo.</p>
                  <ul className="pw-accomplishments">
                    <li>
                      Designed two shared EKS clusters with separate AWS accounts for
                      project-specific resources, balancing shared compute with project
                      isolation.
                    </li>
                    <li>
                      Sped up builds with GitLab CI/CD caching and reduced manual deployment
                      steps by automating image-tag updates for Argo CD.
                    </li>
                    <li>
                      Operated more than 20 Bittensor validators and set up alerts for
                      availability, performance, and resource issues.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span className="pw-date">2022 — 2024</span>
                <div>
                  <h3>Caspen Technology</h3>
                  <span className="pw-role">DevOps Engineer</span>
                  <ul className="pw-accomplishments">
                    <li>
                      Moved applications from individual servers to Kubernetes on EKS and
                      VKE, automating builds and deployments with GitLab CI/CD and Flux.
                    </li>
                    <li>
                      Provisioned dedicated AWS infrastructure for each customer project
                      with Terraform.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <span className="pw-date">2021 — 2022</span>
                <div>
                  <h3>Sea Limited</h3>
                  <span className="pw-role">Automation Engineer</span>
                  <ul className="pw-accomplishments">
                    <li>
                      Automated VM discovery with Python and pyVmomi, using vCenter folder
                      placement to identify VMs that needed Bareos backup jobs.
                    </li>
                    <li>
                      Automated backup server setup for new regions using GitLab CI/CD and
                      Ansible to install Bareos and configure its services.
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
            <details className="pw-earlier">
              <summary>Earlier experience <span aria-hidden="true" /></summary>
              <ol className="pw-timeline">
                <li>
                  <span className="pw-date">2019 — 2021</span>
                  <div>
                    <h3>Sea Limited</h3>
                    <span className="pw-role">IT Support Engineer</span>
                    <p>
                      Built a web tool that converted new-hire tickets into JSON
                      to simplify Active Directory account creation.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="pw-date">2014 — 2019</span>
                  <div>
                    <h3>MINDEF</h3>
                    <span className="pw-role">Network Technician / Administrator</span>
                    <p>
                      Deployed network equipment, administered networks, and
                      troubleshot connectivity issues.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="pw-date">2013</span>
                  <div>
                    <h3>Pay2Home Remittance Services</h3>
                    <span className="pw-role">Part-time IT Administrator</span>
                    <p>Supported network and server maintenance and deployed equipment on-site.</p>
                  </div>
                </li>
                <li>
                  <span className="pw-date">2012</span>
                  <div>
                    <h3>Dreamsmart Solutions</h3>
                    <span className="pw-role">Software Development Intern</span>
                    <p>Worked on Android game development.</p>
                  </div>
                </li>
              </ol>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
