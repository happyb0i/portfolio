export function Contact() {
  return (
    <footer className="pw-contact" id="contact" aria-labelledby="contact-title">
      <h2 className="pw-section-label" id="contact-title">
        03 / CONTACT
      </h2>
      <nav className="pw-social-links" aria-label="Social profiles">
        <a
          href="https://github.com/happyb0i"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a
          href="www.linkedin.com/in/erickongws"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile (opens in a new tab)"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </nav>
      {__DEPLOYMENT_RUN_URL__ && (
        <a
          className="pw-deployment-link"
          href={__DEPLOYMENT_RUN_URL__}
          target="_blank"
          rel="noopener noreferrer"
        >
          View this deployment on GitHub Actions <span aria-hidden="true">↗</span>
        </a>
      )}
    </footer>
  );
}
