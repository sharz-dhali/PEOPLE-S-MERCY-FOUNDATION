export default function Donate() {
  return (
    <article className="page">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Donate</p>
          <h1>Your gift keeps children in school and families standing.</h1>
          <p className="lede">
            Child sponsorship and donations are the bedrock of People&apos;s
            Mercy Foundation. Bank transfers go directly to the organisation in
            Uganda.
          </p>
          <p className="donate-trust">
            Your support helps sustain education, health care and practical
            opportunities for children and families in Nyendo.
          </p>
        </div>
      </header>

      <div className="container donation-content">
        <section className="donation-guide" aria-labelledby="donation-steps">
          <p className="eyebrow">Simple, direct support</p>
          <h2 id="donation-steps">How to make a donation</h2>
          <div className="donation-steps">
            <article className="donation-step">
              <span className="step-number">01</span>
              <div>
                <h3>Use the active account</h3>
                <p>Use the Tropical Bank details below. Contact PMF if you need another giving option.</p>
              </div>
            </article>
            <article className="donation-step">
              <span className="step-number">02</span>
              <div>
                <h3>Make your transfer</h3>
                <p>Use the account details as shown and check any transfer fees with your bank before sending.</p>
              </div>
            </article>
            <article className="donation-step">
              <span className="step-number">03</span>
              <div>
                <h3>Tell us what matters to you</h3>
                <p>For child sponsorship or a gift for a specific programme, email or call us so we can discuss the details.</p>
              </div>
            </article>
          </div>
          <div className="donation-impact">
            <h3>What your support makes possible</h3>
            <ul className="impact-list">
              <li>School fees, uniforms and two meals a day</li>
              <li>Health care through partner clinics</li>
              <li>Special needs teaching and physiotherapy</li>
              <li>Hairdressing, tailoring and crafts training</li>
              <li>Startup kits for teenage mothers</li>
              <li>Classrooms and site development in Nyendo</li>
            </ul>
            <p>
              A one-year skills programme for 30 teenage mothers needs UGX
              62,400,000 for tuition, tools, startup funds and administration.
            </p>
          </div>
          <p className="donation-contact">
            Questions about giving?{' '}
            <a href="mailto:peoplesmercyfoundationorg@gmail.com">Email the foundation</a>
            {' '}or call <a href="tel:+256789375818">+256 789 375 818</a>.
          </p>
        </section>

        <section className="bank-list" aria-labelledby="bank-details">
          <div className="bank-heading">
            <p className="eyebrow">Bank transfer</p>
            <h2 id="bank-details">Account details</h2>
            <p>People&apos;s Mercy Foundation · Uganda</p>
          </div>
          <dl className="bank">
            <dt className="bank-name">Tropical Bank — Masaka Branch</dt>
            <dt>Account name</dt>
            <dd>Peoples Mercy Foundation</dd>
            <dt>Bank</dt>
            <dd>Tropical Bank Ltd, Masaka Branch</dd>
            <dt>Account number</dt>
            <dd>2002353957</dd>
            <dt>SWIFT</dt>
            <dd>TROAUGKA</dd>
          </dl>
          <p className="bank-note">
            Please confirm the preferred account and any applicable bank fees
            with PMF before making an international transfer.
          </p>
        </section>
      </div>
    </article>
  )
}
