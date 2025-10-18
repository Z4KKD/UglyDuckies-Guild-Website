// src/components/Footer.jsx
import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faBattleNet, faChrome } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Ugly Duckies – World of Warcraft Guild</p>
      <p>Created with ❤️ by Z4KKD </p>
      <div className="footer-links">
        <a
          href="https://www.warcraftlogs.com/guild/us/thrall/ugly%20duckies"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faChrome} /> Warcraft Logs
        </a>
        <a
          href="https://raider.io/guilds/us/thrall/Ugly%20Duckies"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faChrome} /> Raider.io
        </a>
        <a
          href="https://worldofwarcraft.blizzard.com/en-us/guild/us/thrall/ugly-duckies"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faChrome} /> WoW Armory
        </a>
      </div>
    </footer>
  )
}

export default Footer
