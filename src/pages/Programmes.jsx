import { Link } from 'react-router-dom'

export default function Programmes() {
  return (
    <article className="page">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Programmes</p>
          <h1>Education, health, livelihoods and care for children with disabilities.</h1>
          <p className="lede">
            Last year we supported about 350 children and their families. 292
            of them were reached through child sponsorship.
          </p>
        </div>
      </header>

      <div className="container stack">
        <section className="programme">
          <h2>Education</h2>
          <p>
            In 2025 every class moved onto one site at our new building: six
            classes from Baby class in nursery through P3 in primary. Child
            sponsorship covered 66 children in nursery, 197 in primary and 29
            in secondary — 292 in total. Afternoon programmes and special
            needs classes continue alongside the school day.
          </p>
          <ul>
            <li>End-of-term exam marks now compare favourably with other local schools, with closer tracking supported by a long-term volunteer who is a former UK head teacher.</li>
            <li>A library lending scheme has increased reading among children at our school.</li>
            <li>In May 2025 we hosted child protection training with Crane, the local network of organisations working with children in Masaka.</li>
            <li>Two warm meals a day sit alongside the school programme.</li>
          </ul>
        </section>

        <section className="programme">
          <h2>Health</h2>
          <p>
            With our social work team we launched the Masaka Community Health
            Club. The opening event was attended by over 100 people, with the
            local Member of Parliament as Guest of Honour. The club now runs
            regular trainings on malaria, HIV, hygiene and sanitation.
          </p>
          <ul>
            <li>Two local clinics in Masaka act as health partners for children on the programme.</li>
            <li>Cases treated have included burns, malaria, fever and diarrhoea.</li>
            <li>Our annual Health Awareness Day offers checks, information and activities for the whole community.</li>
          </ul>
        </section>

        <section className="programme">
          <h2>Livelihoods</h2>
          <p>
            Young people train in a trade they can live on. In 2025 several
            completed vocational training and graduated in hairdressing. Our
            2024 annual review recorded 25 students in the hairdressing unit —
            the largest class since it began — with 13 graduating into salons
            around Masaka.
          </p>
          <ul>
            <li>Small loans for mothers of children on the programme, with a guarantor from the parents&apos; council after repayment challenges.</li>
            <li>Afternoon candle-making sold in local Masaka shops to raise extra funds.</li>
            <li>The HELP Project donates survival items to the neediest people in the community.</li>
          </ul>
        </section>

        <section className="programme">
          <h2>Children with special needs</h2>
          <p>
            Generous fundraising now supports a daily special needs class of 12
            children — six in the morning and six in the afternoon — with a
            special needs teacher, assistant teacher and carer. A qualified
            Ugandan physiotherapist runs sessions twice a month for children in
            class and others identified in the community.
          </p>
        </section>

        <section className="programme featured">
          <p className="eyebrow">Current project</p>
          <h2>Skill training for teenage mothers</h2>
          <p>
            Teenage pregnancy in rural Uganda is rising. One in three teenage
            girls becomes pregnant, often followed by school dropout and a
            search for survival. This one-year programme will train 30
            disadvantaged teenage mothers in Nyendo, Kimanya, Kinooni,
            Kyabakuza and Kijjabwemi.
          </p>
          <div className="card-grid three">
            <article className="card">
              <h3>Tailoring</h3>
              <p>10 mothers, with sewing machines loaned on a revolving basis after graduation.</p>
            </article>
            <article className="card">
              <h3>Hairdressing</h3>
              <p>10 mothers, building on a unit that already places graduates in local salons.</p>
            </article>
            <article className="card">
              <h3>Crafts</h3>
              <p>10 mothers learning jewellery, bags, doormats, toys, sandals and related skills.</p>
            </article>
          </div>
          <p>
            Training stays in community centres so mothers can take part with
            their children. Each group also learns business, savings (VSLA) and
            digital literacy. Graduates receive tools and startup funds, then
            each is expected to train ten more teenage mothers so the cycle
            continues.
          </p>
          <p>
            Programme budget: UGX 62,400,000 (about US$16,848 / £13,728) for
            30 participants, including tuition, tools, startup funds and
            administration.
          </p>
          <Link className="btn btn-primary" to="/donate">
            Fund this project
          </Link>
        </section>
      </div>
    </article>
  )
}
