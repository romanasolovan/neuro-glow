"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="page">
      {/* 
        SITE HEADER
        Responsible for:
        - sticky top navigation
        - brand presence
        - desktop navigation
        - mobile menu trigger
      */}
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#top" className="brand" aria-label="Neuro Glow home">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__text">
              <span className="brand__name">Neuro Glow</span>
              <span className="brand__tagline">
                Science · Nature · Consciousness
              </span>
            </span>
          </a>

          {/* 
            DESKTOP NAVIGATION
            Responsible for:
            - primary section-to-section movement on tablet and desktop
          */}
          <nav className="nav" aria-label="Primary navigation">
            <a className="nav__link" href="#about">
              About
            </a>
            <a className="nav__link" href="#features">
              Features
            </a>
            <a className="nav__link" href="#practice">
              Practice
            </a>
            <a className="nav__link" href="#stories">
              Stories
            </a>
          </nav>

          {/* 
            MOBILE MENU TOGGLE
            Responsible for:
            - opening and closing the mobile navigation drawer
            - accessibility state via aria-expanded / aria-controls
          */}
          <button
            className="nav-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {/* 
          MOBILE NAVIGATION DRAWER
          Responsible for:
          - small-screen navigation
          - simple one-column tap targets
        */}
        <div
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        >
          <a className="mobile-menu__link" href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="mobile-menu__link" href="#features" onClick={closeMenu}>
            Features
          </a>
          <a className="mobile-menu__link" href="#practice" onClick={closeMenu}>
            Practice
          </a>
          <a className="mobile-menu__link" href="#stories" onClick={closeMenu}>
            Stories
          </a>
        </div>
      </header>

      {/* 
        MAIN PAGE CONTENT
        Responsible for:
        - the complete one-page foundation experience
        - smooth visual flow from hero to footer
      */}
      <main id="top">
        {/* 
          HERO SECTION
          Responsible for:
          - first emotional impression
          - core brand message
          - primary calls to action
          - visual tone of Neuro Glow
        */}
        <section className="hero">
          <div className="container--wide hero__inner">
            <div className="hero__content">
              <span className="eyebrow">Neural calm for modern life</span>

              <h1 className="hero__title">
                Where science, nature, and consciousness unite.
              </h1>

              <p className="hero__description">
                Neuro Glow is a calm digital sanctuary designed to help people
                regulate, reflect, and reconnect with themselves through a
                peaceful, intelligent, and deeply human experience.
              </p>

              <div className="hero__actions">
                <a href="#practice" className="button button--primary">
                  Begin your glow
                </a>
                <a href="#about" className="button button--secondary">
                  Explore the foundation
                </a>
              </div>

              <div className="hero__meta" aria-label="Key qualities">
                <span>Calm-first design</span>
                <span>Night-friendly atmosphere</span>
                <span>Gentle and intentional</span>
              </div>
            </div>

            {/* 
              HERO VISUAL PANEL
              Responsible for:
              - visual balance next to hero copy
              - showing emotional keywords / state values
              - giving the page a polished foundation feel
            */}
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__node hero__node--one" />
              <div className="hero__node hero__node--two" />
              <div className="hero__node hero__node--three" />

              <div className="hero__panel">
                <div className="hero__panel-grid">
                  <div className="hero__insight">
                    <p className="hero__insight-title">State</p>
                    <p className="hero__insight-value">Calm</p>
                  </div>

                  <div className="hero__insight">
                    <p className="hero__insight-title">Focus</p>
                    <p className="hero__insight-value">Clear</p>
                  </div>

                  <div className="hero__insight">
                    <p className="hero__insight-title">Energy</p>
                    <p className="hero__insight-value">Gentle</p>
                  </div>

                  <div className="hero__insight">
                    <p className="hero__insight-title">Mind</p>
                    <p className="hero__insight-value">Open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          FEATURES SECTION
          Responsible for:
          - quickly explaining what Neuro Glow stands for
          - showing three core benefits in a scannable way
        */}
        <section id="features" className="section">
          <div className="container">
            <div className="section-head section-head--center">
              <span className="badge">Core Experience</span>
              <h2 className="section-title">
                A home that feels like exhaling.
              </h2>
              <p className="section-head__text">
                Every visual decision is here to soften pressure, invite
                presence, and support a feeling of emotional safety.
              </p>
            </div>

            <div className="features">
              <article className="features__item">
                <div className="card card--glow stack">
                  <div className="card__icon" aria-hidden="true">
                    ✦
                  </div>
                  <h3 className="card__title">Calm-first interface</h3>
                  <p className="card__text">
                    Soft contrast, intentional spacing, and quiet visual rhythm
                    that never overwhelms the eye.
                  </p>
                </div>
              </article>

              <article className="features__item">
                <div className="card stack">
                  <div className="card__icon" aria-hidden="true">
                    ◌
                  </div>
                  <h3 className="card__title">Guided awareness</h3>
                  <p className="card__text">
                    The foundation is built for reflection, emotional
                    regulation, and deeper self-connection.
                  </p>
                </div>
              </article>

              <article className="features__item">
                <div className="card stack">
                  <div className="card__icon" aria-hidden="true">
                    ⟡
                  </div>
                  <h3 className="card__title">Night-safe design</h3>
                  <p className="card__text">
                    Deep green foundations and gentle glow accents create a more
                    restful experience in the evening.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 
          ABOUT / PHILOSOPHY SECTION
          Responsible for:
          - introducing the design intention
          - pairing content with a visual block
          - creating a premium mid-page rhythm
        */}
        <section id="about" className="section">
          <div className="container feature-highlight">
            <div className="feature-highlight__visual" aria-hidden="true" />

            <div className="feature-highlight__content">
              <span className="eyebrow">Designed with care</span>
              <h2 className="section-title">Technology that feels human.</h2>
              <p className="lead">
                Neuro Glow is not meant to impress through noise. It is meant to
                feel safe, intelligent, grounded, and beautifully alive.
              </p>
              <a className="button button--ghost" href="#stories">
                Read the philosophy
              </a>
            </div>
          </div>
        </section>

        {/* 
          STORIES / BRAND VOICE SECTION
          Responsible for:
          - emotional storytelling
          - holding one strong quote / belief statement
        */}
        <section id="stories" className="section">
          <div className="container story-block">
            <div className="stack stack--lg">
              <span className="eyebrow">Human experience</span>
              <h2 className="section-title">
                Made for moments when the mind needs softness.
              </h2>
              <p className="lead">
                The visual language of Neuro Glow is inspired by neural light,
                forest stillness, breath, restoration, and the quiet
                intelligence of the body.
              </p>
            </div>

            <aside className="quote-card stack">
              <p className="quote-card__text">
                “A life full of endless possibilities begins in a nervous system
                that feels safe.”
              </p>
              <p className="quote-card__meta">Neuro Glow philosophy</p>
            </aside>
          </div>
        </section>

        {/* 
          PRACTICE / CTA SECTION
          Responsible for:
          - ending the page with a clear next step
          - creating a strong closing invitation
        */}
        <section id="practice" className="section">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner__inner">
                <div className="stack">
                  <span className="eyebrow">Begin gently</span>
                  <h2 className="section-title">
                    Step into your calmest state.
                  </h2>
                  <p className="section-head__text">
                    Start with a peaceful ritual, a guided moment of stillness,
                    or a restorative experience designed to reconnect mind,
                    body, and possibility.
                  </p>
                </div>

                <a href="#top" className="button button--primary">
                  Start now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 
        FOOTER
        Responsible for:
        - gentle ending to the page
        - reinforcing the brand message
      */}
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="stack">
            <span className="brand__name">Neuro Glow</span>
            <p className="text-soft">
              A calm digital sanctuary where science, nature, and consciousness
              meet.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
