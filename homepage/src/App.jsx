import { useState, useEffect } from 'react'
import './styles/App.css'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeatureSection from './components/FeatureSection'
import ClientSection from './components/ClientSection'
import LiveDemo from './components/LiveDemo'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "99%", label: "Customer Satisfaction" },
    { number: "500+", label: "Active Users" },
    { number: "50K+", label: "Queries Handled" },
    { number: "24/7", label: "Support Available" }
  ]

  return (
    <div className="app-container">
      <Navbar />

      <div className="hero-section">
        <div className="hero-background">
          <AnimatedBackground />
        </div>
        <h1 className="hero-title">Transform Your Interface with PortalX</h1>
        <p className="hero-subtitle">
          The next-generation AI-powered solution that revolutionizes how businesses connect with their users. Deploy in minutes, engage forever.
        </p>
        <div className="hero-cta-group">
          <a href="#contact" className="cta-button">Get Started Free</a>
          <a href="#demo" className="cta-button secondary">Watch Demo</a>
        </div>
      </div>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <LiveDemo />
      
      <FeatureSection />

      <ClientSection />


      <section className="section cta-section">
        <h2 className="section-title">Ready to Transform Your Interface?</h2>
        <p className="section-subtitle">Join thousands of businesses already using PortalX</p>
        <div className="cta-group">
          <a href="#contact" className="cta-button">Start Free Trial</a>
          <a href="#demo" className="cta-button secondary">Schedule Demo</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App