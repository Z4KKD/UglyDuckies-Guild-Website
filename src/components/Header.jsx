// src/components/Header.jsx
import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🦆 Ugly Duckies</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#join">How to Join</a>
      </nav>
    </header>
  )
}

export default Header
