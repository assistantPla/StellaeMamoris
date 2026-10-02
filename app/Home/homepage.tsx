import { useState } from 'react'

export default function Homepage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(email ? "You’re on the list — we’ll be in touch." : 'Please enter your email address.')
  }

  return (
    <main>
      <section className="join shell" id="join">
        <div>
          <p className="eyebrow">Now accepting early teams</p>
          <h2>
            A little more
            <br />
            <em>breathing room.</em>
          </h2>
        </div>
        <form onSubmit={submit}>
          <label htmlFor="email">YOUR WORK EMAIL</label>
          <div className="email-row">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
            />
          </div>
          <button type="submit">Join the waitlist</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </main>
  )
}