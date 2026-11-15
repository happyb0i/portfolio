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
          href="https://www.linkedin.com/in/eric-kong-b3637220a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile (opens in a new tab)"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </footer>
  );
}
