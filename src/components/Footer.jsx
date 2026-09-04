import { Link } from 'react-router-dom'
import { site } from '../data/projects.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Footer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href={`mailto:${site.email}`}>Contact</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
      <div className="footer-meta">
        <p>
          Tel. <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a> · London
        </p>
        <p>© {new Date().getFullYear()} by Nicole Stott</p>
      </div>
    </footer>
  )
}
