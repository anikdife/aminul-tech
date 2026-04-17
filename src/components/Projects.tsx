import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'

type Filter = 'all' | 'web' | 'android' | 'desktop'

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all',     label: 'All Projects' },
  { key: 'web',     label: 'Web Apps' },
  { key: 'android', label: 'Android' },
  { key: 'desktop', label: 'Desktop' },
]

const CATEGORY_ICON: Record<Project['category'], string> = {
  web:     '🌐',
  android: '📱',
  desktop: '🖥️',
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.29 3.47.99.11-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <div className="section__header" data-reveal>
          <span className="section__label">02 / Projects</span>
          <h2 className="section__title">What I've Built</h2>
          <div className="section__title-line" />
        </div>

        <div className="projects__filters" data-reveal data-delay="1">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`projects__filter-btn${filter === f.key ? ' projects__filter-btn--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((project, i) => (
            <div
              key={project.id}
              className={`project-card glass-card${project.featured ? ' project-card--featured' : ''}`}
              data-reveal
              data-delay={String(Math.min(i % 3 + 1, 5))}
            >
              <div className="project-card__visual" style={{ background: project.gradient }}>
                <div className="project-card__visual-grid" />
                <div className="project-card__category-badge">
                  <span>{CATEGORY_ICON[project.category]}</span>
                  <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                </div>
                {project.featured && (
                  <div className="project-card__featured-badge">★ Featured</div>
                )}
                {project.platform && (
                  <div className="project-card__platform">{project.platform}</div>
                )}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.github && (
                    <a href={project.github} className="project-card__link" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="project-card__link project-card__link--primary" target="_blank" rel="noopener noreferrer">
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
