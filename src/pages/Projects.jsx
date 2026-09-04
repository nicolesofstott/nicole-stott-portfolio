import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  return (
    <section className="page page-centered">
      <h1 className="page-title">Projects</h1>
      <p className="page-lede">Mix of behaviour science, design and strategy.</p>
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link className="project-card" to={`/projects/${p.slug}`}>
              <img src={p.image} alt="" loading="lazy" />
              <h2>{p.title}</h2>
              <p>{p.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
