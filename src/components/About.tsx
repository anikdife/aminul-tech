const TECH_STACK: { name: string; color: string }[] = [
  { name: 'React',           color: '#61DAFB' },
  { name: 'TypeScript',      color: '#3178C6' },
  { name: 'Node.js',         color: '#339933' },
  { name: 'Firebase',        color: '#FFCA28' },
  { name: 'Next.js',         color: '#FFFFFF' },
  { name: 'PostgreSQL',      color: '#336791' },
  { name: 'Kotlin',          color: '#7F52FF' },
  { name: 'Jetpack Compose', color: '#4285F4' },
  { name: 'Electron',        color: '#47848F' },
  { name: 'Python',          color: '#3776AB' },
  { name: 'Docker',          color: '#2496ED' },
  { name: 'Git',             color: '#F05032' },
]

const STATS = [
  { num: '8+',  label: 'Projects Shipped' },
  { num: '3+',  label: 'Years Exp.' },
  { num: '15+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <div className="section__header" data-reveal>
          <span className="section__label">01 / About</span>
          <h2 className="section__title">Who I Am</h2>
          <div className="section__title-line" />
        </div>

        <div className="about__grid">
          <div>
            <div className="about__bio-card glass-card" data-reveal data-delay="1">
              <div className="about__avatar">
                <div className="about__avatar-inner">
                  <span className="about__avatar-initials">MAI</span>
                </div>
                <div className="about__avatar-ring" />
              </div>

              <h3 className="about__name">Md Aminul Islam</h3>
              <span className="about__role-badge">Full-Stack Developer</span>

              <p className="about__bio-text">
                I'm a passionate developer who builds end-to-end digital products — from sleek web
                apps and polished Android applications to powerful cross-platform desktop tools. I
                thrive at the intersection of great engineering and outstanding user experience.
              </p>
              <p className="about__bio-text">
                With expertise spanning the full stack — React frontends, Firebase backends, Kotlin
                Android, and Electron desktop apps — I bring ideas to life with clean code,
                thoughtful design, and relentless attention to performance.
              </p>

              <div className="about__tags">
                {['Web Apps', 'Android', 'Desktop', 'Firebase', 'Open Source'].map((t) => (
                  <span key={t} className="about__tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="about__stats-row" data-reveal data-delay="2">
              {STATS.map((s) => (
                <div key={s.label} className="about__stat-card glass-card">
                  <span className="about__stat-num">{s.num}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal data-delay="2">
            <p className="about__stack-title">Tech Arsenal</p>
            <div className="about__stack-grid">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="about__tech-card glass-card"
                  style={{ '--tech-color': tech.color } as React.CSSProperties}
                >
                  <div className="about__tech-dot" />
                  <span className="about__tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
