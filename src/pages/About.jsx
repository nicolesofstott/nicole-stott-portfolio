import { site } from '../data/projects.js'
import './About.css'

export default function About() {
  return (
    <section className="page">
      <h1 className="page-title">About Me</h1>
      <div className="about-grid">
        <div>
          <div className="about-education">
            <p>
              <strong>MSc Design with Behaviour Science</strong>
              <br />
              Imperial College London, Dyson School of Design Engineering
              <br />
              Research methods, statistics, behavioural science and design; understanding
              behaviour and turning evidence into interventions.
            </p>
            <p>
              <strong>BSc (Hons) Creative Computing</strong>
              <br />
              University of the Arts London, Creative Computing Institute
              <br />
              Human-computer interaction, UX/UI, creative technology and building
              interactive digital products.
            </p>
          </div>
          <div className="about-body">
            <p>I&rsquo;ve never really fitted on one side of the creative/analytical divide.</p>
            <p>
              At school, I was taking maths, biology and chemistry while also choosing
              photography and drama. I ended up studying Creative Computing because it let
              me design and build things without giving up the technical side, and then
              moved into Behaviour Science because I wanted a more rigorous way of
              understanding the people using them.
            </p>
            <p>
              I&rsquo;m interested in why people behave the way they do, particularly when
              behaviour is shaped by systems, environments, incentives, identity or other
              people. But I&rsquo;m not especially interested in research that stops at
              explaining something. I like the point where understanding turns into a
              decision: what should we change, design, build or test because of what we
              now know?
            </p>
            <p>
              For my MSc thesis at Imperial, I studied psychological ownership during
              mergers and acquisitions; why people can feel that a company, team, role or
              way of working is theirs even when legal ownership changes overnight. I
              conducted ethics-approved interviews in English and Spanish with senior
              M&amp;A practitioners, mapped how those feelings shift throughout
              integration and translated the research into a practical framework for
              identifying where ownership is likely to be created, threatened or lost.
              Ten practitioners appraised the final framework, with 90% agreement across
              its assessments.
            </p>
            <p>
              My wider behavioural design work has included developing evidence-based
              interventions, mapping behavioural systems and specifying a full randomised
              controlled trial to test whether an intervention would actually change
              behaviour rather than simply sound persuasive.
            </p>
            <p>
              Before Imperial, I independently designed and built Antro, a full-stack VR
              platform for exhibiting art. I took it from user research with artists and
              curators through product architecture, interface design and prototyping to
              front-end and back-end development. I&rsquo;ve also designed and shipped
              client work that remains live in use today, including a website for a riad
              in Essaouira.
            </p>
            <p>
              What ties those projects together is how I like to work: start with the
              behaviour or problem, find the evidence, make sense of the system around
              it, and then decide what should actually be designed, changed or built.
            </p>
            <p>
              I think that way outside work too. I&rsquo;m constantly collecting
              references &mdash; books, records, photographs, interiors, objects,
              websites, films, conversations &mdash; and noticing why certain things feel
              compelling while others don&rsquo;t.
            </p>
            <p>
              I also grew up moving between countries and cultures, which made me aware
              quite early that behaviour that feels completely normal in one place can
              look strange from somewhere else. Being bilingual in English and Spanish
              has reinforced that: the same idea can land differently depending on the
              language, context and person receiving it. I think a lot of my interest in
              behaviour, culture and design comes from that.
            </p>
          </div>
          <div className="about-facts">
            <p>Native English and Spanish</p>
            <p>UK and EU nationality</p>
          </div>
        </div>
        <img src={site.aboutImage} alt="Nicole Stott" loading="lazy" />
      </div>
    </section>
  )
}
