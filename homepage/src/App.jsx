import { useState, useEffect } from 'react'
import './styles/App.css'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeatureSection from './components/FeatureSection'

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

  const testimonials = [
    {
      quote: "PortalX transformed our customer service workflow completely. We've seen a 70% reduction in response time.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The integration was seamless, and the results were immediate. Our user engagement increased by 300%.",
      author: "Michael Chen",
      position: "CEO, StartupX",
      image: "https://i.pravatar.cc/150?img=2"
    }
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

      <FeatureSection />

      <section id="testimonials" className="section testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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