import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) over the first 200px
      const progress = Math.min(window.scrollY / 200, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarStyle = {
    background: `rgba(15, 23, 42, ${scrollProgress * 0.25})`,
  }

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="logo">PortalX</div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact" className="nav-cta">Get Started</a>
      </div>
    </nav>
  )
}

export default Navbar 