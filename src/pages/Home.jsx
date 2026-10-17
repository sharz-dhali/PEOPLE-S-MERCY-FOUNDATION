import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="kicker">Community-based organisation · Masaka</span>
          <h1>Lasting change for the most vulnerable in Nyendo.</h1>
          <p>
            People&apos;s Mercy Foundation supports children, highly vulnerable
            women and families living in urban slums through education, health,
            livelihoods and care for children with special needs.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/donate">
              Support our work
            </Link>
            <Link className="btn btn-ghost" to="/programmes">
              See programmes
            </Link>
          </div>
        </div>
      </section>

      <div className="container stats">
        <article className="stat">
          <p className="stat-value">350+</p>
          <p>Children and families supported through PMF programmes</p>
        </article>
        <article className="stat">
          <p className="stat-value">292</p>
          <p>Children reached through child sponsorship in 2025</p>
        </article>
        <article className="stat">
          <p className="stat-value">20</p>
          <p>Local staff employed through donor and fundraising support</p>
        </article>
        <article className="stat">
          <p className="stat-value">Since 2002</p>
          <p>Serving orphans, children with disabilities and families in Masaka</p>
        </article>
      </div>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2 className="section-title">A personal, community-rooted response to poverty</h2>
            <p className="lede">
              Nyendo slum is the second largest in Masaka. Around 15,000 people
              live on a floodplain with no sanitation. About 90% of residents
              earn less than one US dollar a day, and more than half are
              children.
            </p>
            <p>
              We keep our selection process close to the community so we can
              reach children who are the poorest of the poor. From eight children
              in a single room to a school on our own land, the work has grown
              without losing the personal involvement that defines PMF.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/about">
                Our story
              </Link>
            </div>
          </div>
          <div className="photo-grid">
            <img className="photo" src="/images/community-1.png" alt="People's Mercy Foundation community work in Masaka" />
            <img className="photo" src="/images/community-2.png" alt="Children and families supported by PMF" />
            <img className="photo" src="/images/community-3.png" alt="Classroom and training activities" />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--sand)' }}>
        <div className="container">
          <h2 className="section-title">How we help</h2>
          <p className="lede">
            Support is practical and long-term: school, meals, health care,
            skills and a pathway out of poverty.
          </p>
          <div className="cards" style={{ marginTop: 28 }}>
            <article className="card">
              <img src="/images/education.png" alt="Nursery and primary classes at PMF" />
              <div className="card-body">
                <span className="tag">Education</span>
                <h3>School, meals and sponsorship</h3>
                <p>
                  Nursery, primary, secondary and afternoon programmes. In 2025
                  we taught Baby class through P3 on our own site and supported
                  197 children in primary, 66 in nursery and 29 in secondary.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/health.png" alt="Health outreach in Masaka" />
              <div className="card-body">
                <span className="tag">Health</span>
                <h3>Clinics, clubs and awareness</h3>
                <p>
                  Partner clinics treat burns, malaria, fever and diarrhoea. The
                  Masaka Community Health Club trains neighbours on HIV,
                  hygiene and sanitation.
                </p>
              </div>
            </article>
            <article className="card">
              <img src="/images/livelihoods.png" alt="Vocational skills training" />
              <div className="card-body">
                <span className="tag">Livelihoods</span>
                <h3>Skills that restore hope</h3>
                <p>
                  Hairdressing, tailoring, crafts, small loans for mothers and a
                  new project to train 30 teenage mothers as job creators, not
                  job seekers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <blockquote className="panel">
            <p className="quote">
              “Empowering young mothers is transforming the future generation.”
            </p>
            <p>
              From the Skills Training for Teenage Mothers project in Nyendo,
              Kimanya, Kinooni, Kyabakuza and Kijjabwemi.
            </p>
          </blockquote>
          <div>
            <h2 className="section-title">A word from the director</h2>
            <p>
              Kalungi Michael, chairperson and director, has led PMF as a
              teacher, youth counsellor and social worker. Workaid in the UK
              has supported the training programme with tools and equipment for
              orphans, disabled people and those living with HIV/AIDS.
            </p>
            <p>
              In 2025 the organisation moved fully onto its own land in Nyendo,
              with a new block of five classrooms and a Christmas celebration
              for families in the new building.
            </p>
            <Link className="btn btn-primary" to="/impact">
              Read the 2025 report
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
