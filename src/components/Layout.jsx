import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/impact', label: 'Impact' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img className="brand-logo" src="/images/logo.png" alt="" />
            <span className="brand-text">
              <strong>People&apos;s Mercy Foundation</strong>
              <em>Nyendo, Masaka · Uganda</em>
            </span>
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav id="site-nav" className={open ? 'nav open' : 'nav'}>
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-name">People&apos;s Mercy Foundation</p>
            <p>
              A registered community-based organisation in Nyendo, Masaka. We
              work with the most vulnerable children, women and families living
              in urban slums.
            </p>
          </div>
          <div>
            <p className="footer-label">Visit &amp; write</p>
            <p>
              Kimaanya, Masaka Municipality
              <br />
              Nyendo, Masaka, Uganda
            </p>
          </div>
          <div>
            <p className="footer-label">Get in touch</p>
            <p>
              <a href="mailto:peoplesmercyfoundationorg@gmail.com">
                peoplesmercyfoundationorg@gmail.com
              </a>
              <br />
              <a href="tel:+256789375818">+256 789 375 818</a>
            </p>
          </div>
        </div>
        <div className="container footer-base">
          <p>
            © {new Date().getFullYear()} People&apos;s Mercy Foundation. All
            rights reserved.
          </p>
          <p>Registered NGO · Chairperson Kalungi Michael</p>
        </div>
      </footer>
    </div>
  )
}
