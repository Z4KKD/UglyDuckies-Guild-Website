import React from 'react'
import '../styles/guildcard.css'

const GuildCard = ({ guild }) => {
  return (
    <div className="guild-card">
      <img src={guild.logoUrl} alt={`${guild.name} logo`} className="guild-logo" />
      <h2>{guild.name}</h2>
      <p><strong>About:</strong> {guild.about}</p>
      <p><strong>Raid Schedule:</strong> {guild.raidSchedule}</p>
      <p><strong>What We Offer:</strong></p>
      <ul>
        {guild.offerings.map((offer, idx) => <li key={idx}>{offer}</li>)}
      </ul>
    </div>
  )
}

export default GuildCard
