import { useState } from 'react'
import { publicAsset } from '../publicAsset.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(data.get('subject') || 'Message from the PMF website')
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
    )
    window.location.href = `mailto:peoplesmercyfoundationorg@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <article className="page">
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Visit us in Masaka or write from wherever you are.</h1>
        </div>
      </header>

      <div className="container grid-2">
        <div>
          <h2>People&apos;s Mercy Foundation</h2>
          <p>
            Kimaanya, Masaka Municipality
            <br />
            Nyendo, Masaka, Uganda
          </p>
          <p>
            <a href="mailto:peoplesmercyfoundationorg@gmail.com">
              peoplesmercyfoundationorg@gmail.com
            </a>
            <br />
            <a href="tel:+256789375818">+256 789 375 818</a>
          </p>
          <p>
            Ask for Kalungi Michael, Chairperson. We welcome partners,
            volunteers, child sponsors and visitors who want to see the work.
          </p>
          <img
            className="photo"
            src={publicAsset('images/community-1.png')}
            alt="Nyendo, Masaka — the community People's Mercy Foundation serves"
          />
        </div>

        <form className="form donate-box" onSubmit={onSubmit}>
          <h2>Send a message</h2>
          {sent ? (
            <p className="success">
              Your email app should open with the message ready to send. If it
              does not, write to us directly at
              peoplesmercyfoundationorg@gmail.com.
            </p>
          ) : null}
          <label>
            Name
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Subject
            <input name="subject" type="text" placeholder="Sponsorship, visit, partnership…" />
          </label>
          <label>
            Message
            <textarea name="message" required />
          </label>
          <button className="btn btn-primary" type="submit">
            Open email
          </button>
        </form>
      </div>
    </article>
  )
}
