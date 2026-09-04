import { Link } from 'react-router-dom'
import { site } from '../data/projects.js'
import './Home.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-name">
          <svg viewBox="0 0 1000 110" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
            <text x="0" y="107" textLength="1000" lengthAdjust="spacing">NICOLE STOTT</text>
          </svg>
          <span className="visually-hidden">Nicole Stott</span>
        </h1>
        <p className="hero-tagline">
          <span>Researching behaviour.</span>
          <span>Designing systems.</span>
          <span>Building what comes next.</span>
        </p>
        {site.intro.map((line) => (
          <p className="hero-intro" key={line}>{line}</p>
        ))}
        <p className="hero-location">{site.location}</p>
        <Link className="hero-cta" to="/projects">Portfolio</Link>
      </section>
      <section className="home-image">
        <img src={site.homeImage} alt="Selected work by Nicole Stott" loading="lazy" />
      </section>
    </>
  )
}
