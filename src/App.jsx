import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import GuildCard from './components/GuildCard'
import guilds from './data/guilds'
import FlyingDucksBackground from './components/FlyingDucksBackground';
import AnimatedBackground from './components/AnimatedBackground';
import './index.css'

const App = () => {
  const recruiters = guilds[0]?.recruiters || []
  const logoUrl = guilds[0]?.logoUrl || '/logo.png'

  // Copy to clipboard helper
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    alert(`Copied: ${text}`)
  }

  return (
    <div>
      <AnimatedBackground />
      <FlyingDucksBackground />
      <Header />

      <main className="main-container" tabIndex={-1}>
        {/* Welcome Banner */}
        <section id="home" className="fade-in">
          <div className="main-banner">
            <img src={logoUrl} alt="Ugly Duckies Logo" className="main-logo" />
            <h2 className="main-title">Welcome to Ugly Duckies</h2>
            <img
              src="/screenshot.png"
              alt="Ugly Duckies in action"
              className="screenshot-banner"
            />
          </div>
        </section>

        {/* About / Guild Info */}
        <section id="about" className="fade-in">
          {guilds.map((guild, index) => (
            <GuildCard key={index} guild={guild} />
          ))}
        </section>

        {/* Join / Recruiter Info */}
        <section id="join" className="fade-in">
          <h2>How to Join</h2>
          <p>
            Interested in joining our chaotic band of ducklings? Reach out to a recruiter below via Discord or Battle.net!
          </p>

          <div className="recruiters-list">
            {recruiters.map((r, idx) => (
              <div key={idx} className="recruiter-card">
                <h3>{r.name}</h3>
                <p>
                  <strong>Discord:</strong> {r.discord}{' '}
                </p>
                {r.bnet && (
                  <p>
                    <strong>BNet:</strong> {r.bnet}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
