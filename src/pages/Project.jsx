import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects.js'
import './Project.css'

export default function Project() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/projects" replace />

  const project = projects[index]
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <article>
      <header className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <img
          className="project-hero-image"
          src={project.image}
          alt={`${project.title} — project overview`}
          loading="lazy"
        />
      </header>
      <div className="project-body">
        {project.body.map((block, i) =>
          typeof block === 'string' ? (
            <p key={i}>{block}</p>
          ) : (
            <h3 key={i}>{block.heading}</h3>
          )
        )}
      </div>
      <nav className="project-pager" aria-label="Project navigation">
        <Link to={`/projects/${prev.slug}`}>
          <span>Previous</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link className="pager-next" to={`/projects/${next.slug}`}>
          <span>Next</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </article>
  )
}
