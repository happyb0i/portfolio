import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <div id="portfolio">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="pw-page">
        <header className="pw-nav">
          <a href="#home" className="pw-wordmark" aria-label="Eric Kong — home">
            Eric Kong.
          </a>
          <nav aria-label="Portfolio">
            <a href="#work">Selected work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact ↗</a>
          </nav>
        </header>
        <main id="main-content">
          <Hero />
          <Projects />
          <Experience />
        </main>
        <Contact />
      </div>
    </div>
  );
}
