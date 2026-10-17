import { publicAsset } from '../publicAsset.js'

export default function Impact() {
  return (
    <article className="page">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Impact</p>
          <h1>What 2024 and 2025 looked like on the ground.</h1>
          <p className="lede">
            The school moved onto our own land. Health outreach reached the
            wider community. Skills training placed young women in local work.
          </p>
        </div>
      </header>

      <div className="container impact-page">
        <section className="impact-overview" aria-labelledby="impact-overview-title">
          <div className="impact-overview-copy">
            <p className="eyebrow">A year of progress</p>
            <h2 id="impact-overview-title">Community-led work, made possible together.</h2>
            <p>
              In 2025, PMF moved all operations to its own land in Nyendo,
              supporting children and families through education, social work
              and practical care.
            </p>
          </div>
          <div className="impact-highlights">
            <article className="impact-highlight">
              <span>350+</span>
              <p>children and families supported</p>
            </article>
            <article className="impact-highlight">
              <span>292</span>
              <p>children reached through sponsorship</p>
            </article>
            <article className="impact-highlight">
              <span>20</span>
              <p>local staff employed</p>
            </article>
            <article className="impact-highlight">
              <span>5</span>
              <p>new classrooms in the Nyendo block</p>
            </article>
          </div>
        </section>

        <img
          className="photo wide impact-photo"
          src={publicAsset('images/community-2.png')}
          alt="Children in PMF school uniform outside the classrooms in Nyendo"
        />

        <section className="programme">
          <div className="programme-heading">
            <div>
              <p className="eyebrow">Transparency</p>
              <h2>How funds were spent in 2025</h2>
            </div>
            <p>Reported programme and operating costs: UGX 476,715,108</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Spend (UGX)</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Social work and outreach</td>
                  <td>197,846,231</td>
                  <td>41%</td>
                </tr>
                <tr>
                  <td>Nursery and primary school</td>
                  <td>129,238,981</td>
                  <td>27%</td>
                </tr>
                <tr>
                  <td>Site development and renovations</td>
                  <td>94,553,650</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>Operating and utility costs</td>
                  <td>55,076,246</td>
                  <td>12%</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>476,715,108</strong>
                  </td>
                  <td>
                    <strong>100%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Further spending included payroll (UGX 95,489,779), school fees
            (UGX 78,095,800), food (UGX 36,692,500), children with disabilities
            (UGX 20,644,729), medical fees (UGX 12,406,147) and the Nyendo
            programme (UGX 27,654,300).
          </p>
        </section>

        <section className="programme">
          <h2>Highlights</h2>
          <ul>
            <li>
              All operations moved to our own land in Nyendo, still within
              walking distance of Masaka town.
            </li>
            <li>
              A new block of five classrooms, plus renovations of the existing
              building.
            </li>
            <li>
              More children in school, two warm meals a day, and basic health
              care.
            </li>
            <li>
              Women reached through small loans; young people through vocational
              training and the afternoon programme.
            </li>
            <li>
              Christmas 2025 celebrated with families in the new building.
            </li>
          </ul>
        </section>

        <section className="programme">
          <h2>2024 skills review</h2>
          <p>
            The hairdressing unit had 25 students — the largest class since it
            opened. Thirteen completed the course and were placed in salons in
            and around Masaka. A new dryer replaced worn equipment. Prime
            operating support came from AWDF Canada, with additional backing
            from Aveda and modest income from services and membership.
          </p>
          <img
            className="photo"
            src={publicAsset('images/livelihoods.png')}
            alt="Hairdressing students practising braiding at People's Mercy Foundation"
          />
        </section>

        <section className="programme">
          <h2>Looking ahead</h2>
          <p>
            We intend to stay close to the community even as we grow. Plans
            include more classrooms, vocational training on site, local income
            generation, and exit pathways for young people finishing secondary
            school. The hairdressing school still needs a boundary wall and
            startup tools for new students.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={publicAsset('docs/annual-report-2025.pdf')}>
              Download 2025 annual report
            </a>
            <a className="btn btn-ghost dark" href={publicAsset('docs/annual-review-2024.pdf')}>
              Download 2024 review
            </a>
            <a className="btn btn-ghost dark" href={publicAsset('docs/teenage-mothers-project.pdf')}>
              Teenage mothers proposal
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
