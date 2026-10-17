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
        </div>
      </header>

      <div className="container grid-2">
        <div className="donate-box">
          <h2>Where money goes</h2>
          <ul>
            <li>School fees, uniforms and two meals a day</li>
            <li>Health care through partner clinics</li>
            <li>Special needs teaching and physiotherapy</li>
            <li>Hairdressing, tailoring and crafts training</li>
            <li>Startup kits for teenage mothers</li>
            <li>Classrooms and site development in Nyendo</li>
          </ul>
          <p>
            A one-year skills programme for 30 teenage mothers needs UGX
            62,400,000. Even a share of that cost buys tuition, tools and a
            chance to earn.
          </p>
          <p>
            For child sponsorship or a named gift, email{' '}
            <a href="mailto:peoplesmercyfoundationorg@gmail.com">
              peoplesmercyfoundationorg@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:+256789375818">+256 789 375 818</a>.
          </p>
        </div>

        <div>
          <dl className="bank">
            <dt>Account name</dt>
            <dd>People&apos;s Mercy Foundation</dd>
            <dt>Bank</dt>
            <dd>Bank of Africa — Uganda</dd>
            <dt>Account number</dt>
            <dd>02352440002</dd>
            <dt>SWIFT / BIC</dt>
            <dd>AFRIUGKA</dd>
            <dt>Address</dt>
            <dd>P.O. Box 2750, Kampala, Uganda</dd>
          </dl>
          <dl className="bank">
            <dt>Account name</dt>
            <dd>Peoples Mercy Foundation</dd>
            <dt>Bank</dt>
            <dd>Tropical Bank Ltd, Masaka Branch</dd>
            <dt>Account number</dt>
            <dd>2002353957</dd>
            <dt>SWIFT</dt>
            <dd>TROAUGKA</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}
