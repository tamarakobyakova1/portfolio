import React from 'react'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Tamara Kobiakova</h1>
        <p className="subtitle">Software Developer &amp; Analyst</p>
      </header>

      <main>
        <section className="card">
          <h2>My Contacts</h2>
          <p>
            <a href="mailto:tamarakobiakova@protonmail.com">tamarakobiakova@protonmail.com</a>
          </p>
          <p>+372 5808 3765</p>
        </section>

        <section className="card">
          <h2>Residence</h2>
          <p>Pärnu, Estonia (Permanent)</p>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Tamara Kobiakova</footer>
    </div>
  )
}
