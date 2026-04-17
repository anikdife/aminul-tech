import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

const ROLES = [
  'Full-Stack Developer',
  'Android App Developer',
  'Desktop App Engineer',
  'Firebase & Cloud Expert',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -999, y: -999 })
  const rafRef = useRef(0)

  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  // Typewriter
  useEffect(() => {
    const role = ROLES[roleIndex]
    let t: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (text.length < role.length) {
        t = setTimeout(() => setText(role.slice(0, text.length + 1)), 75)
      } else {
        t = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 38)
      } else {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(t)
  }, [text, deleting, roleIndex])

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = Array.from({ length: 88 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      size: Math.random() * 1.8 + 0.5,
    }))

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouse)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,217,255,${0.14 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }

        const mx = mouseRef.current.x - particles[i].x
        const my = mouseRef.current.y - particles[i].y
        const md = Math.sqrt(mx * mx + my * my)
        if (md < 160) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(0,217,255,${0.28 * (1 - md / 160)})`
          ctx.lineWidth = 0.8
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,217,255,${0.45 + particles[i].size * 0.1})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__grid" />

      <div className="hero__content">
        <p className="hero__pre-title">
          <span className="hero__bracket">&lt;</span>
          Hello World
          <span className="hero__bracket"> /&gt;</span>
        </p>

        <h1 className="hero__name">
          <span className="hero__name-line1">Md Aminul</span>
          <span className="hero__name-line2">Islam</span>
        </h1>

        <div className="hero__role">
          <span className="hero__role-prefix">// </span>
          <span>{text}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className="hero__tagline">
          Building digital experiences that merge{' '}
          <span className="hero__highlight">performance</span>,{' '}
          <span className="hero__highlight">elegance</span>, and real-world impact.
        </p>

        <div className="hero__actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            <span>View My Work</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Hire Me
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">8+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">3+</span>
            <span className="hero__stat-label">Years Exp.</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">15+</span>
            <span className="hero__stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>SCROLL</span>
        <div className="hero__scroll-line" />
      </div>

      <div className="hero__float hero__float--left">
        <pre>
          <code>{`const dev = {\n  name: "Aminul",\n  passion: "coding",\n  coffee: Infinity\n}`}</code>
        </pre>
      </div>
      <div className="hero__float hero__float--right">
        <pre>
          <code>{`function build() {\n  return ideas\n    .map(transform)\n    .filter(isAmazing)\n}`}</code>
        </pre>
      </div>
    </section>
  )
}
