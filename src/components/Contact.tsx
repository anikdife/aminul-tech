interface SocialLink {
  name: string
  href: string
  color: string
  icon: React.ReactNode
}

const SOCIALS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/anikdife',
    color: '#e2e8f0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:anik.dife@gmail.com',
    color: '#00d9ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: '#',
    color: '#e2e8f0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner">
        <div className="section__header" data-reveal>
          <span className="section__label">03 / Contact</span>
          <h2 className="section__title">Let's Connect</h2>
          <div className="section__title-line" />
        </div>

        <div className="contact__content">
          <div data-reveal data-delay="1">
            <div className="contact__headline">
              <h3>
                Ready to Build Something{' '}
                <span className="contact__gradient-text">Amazing</span>?
              </h3>
              <p>
                Whether you have a project in mind, need a collaborator, or just want to say
                hello — my inbox is always open. Let's create something extraordinary together.
              </p>
            </div>

            <div className="contact__cta">
              <a href="mailto:anik.dife@gmail.com" className="btn-primary contact__email-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Send Me an Email
              </a>
            </div>
          </div>

          <div className="contact__socials" data-reveal data-delay="2">
            {SOCIALS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="contact__social-card glass-card"
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--social-color': link.color } as React.CSSProperties}
              >
                <span className="contact__social-icon">{link.icon}</span>
                <span className="contact__social-name">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="contact__availability" data-reveal data-delay="3">
            <div className="contact__availability-dot" />
            <span>Available for freelance &amp; full-time opportunities</span>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__logo">
            <span className="navbar__bracket">&lt;</span>
            MAI
            <span className="navbar__bracket">/&gt;</span>
          </span>
          <p className="footer__copy">
            © {new Date().getFullYear()} Md Aminul Islam. Crafted with passion and precision.
          </p>
          <p className="footer__stack">Built with React + TypeScript + Firebase</p>
        </div>
      </footer>
    </section>
  )
}
