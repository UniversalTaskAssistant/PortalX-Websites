import React from 'react';
import '../styles/ClientSection.css';

const ClientSection = () => {
  const sectors = [
    {
      name: 'E-commerce',
      icon: '🛍️',
      description: 'Streamline customer service and shopping assistance',
      stats: { value: '3x', label: 'Sales Growth' }
    },
    {
      name: 'SaaS Companies',
      icon: '💻',
      description: 'Enhance user onboarding and support automation',
      stats: { value: '70%', label: 'Faster Support' }
    },
    {
      name: 'Professional Services',
      icon: '👔',
      description: 'Automate client interactions and appointment booking',
      stats: { value: '85%', label: 'Time Saved' }
    },
    {
      name: 'Educational Institutions',
      icon: '🎓',
      description: 'Improve student support and resource accessibility',
      stats: { value: '95%', label: 'Satisfaction' }
    }
  ];

  const testimonials = [
    {
      quote: "PortalX transformed our customer service workflow completely. We've seen a 70% reduction in response time.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      image: "https://i.pravatar.cc/150?img=1",
      featured: true,
      metrics: {
        responseTime: "70%",
        satisfaction: "95%"
      }
    },
    {
      quote: "The integration was seamless, and the results were immediate. Our user engagement increased by 300%.",
      author: "Michael Chen",
      position: "CEO, StartupX",
      image: "https://i.pravatar.cc/150?img=2",
      metrics: {
        engagement: "300%"
      }
    },
    {
      quote: "PortalX has revolutionized how we handle student inquiries. Response accuracy improved by 90%.",
      author: "Emily Rodriguez",
      position: "Dean, Education Plus",
      image: "https://i.pravatar.cc/150?img=3",
      metrics: {
        accuracy: "90%"
      }
    }
  ];

  return (
    <section className="section client-section">
      <div className="container">
        <div className="sectors-container">
          <h2 className="section-title">Built for Various Industries</h2>
          <p className="section-subtitle">
            Especially empowering <u>Small & Medium-sized Businesses</u> with fast & scalable solution
          </p>
          
          <div className="sectors-grid">
            {sectors.map((sector, index) => (
              <div key={index} className={`sector-card ${index === 0 ? 'featured' : ''}`}>
                <div className="sector-header">
                  <div className="sector-icon">{sector.icon}</div>
                  <div className="sector-stat">
                    <span className="stat-value">{sector.stats.value}</span>
                    <span className="stat-label">{sector.stats.label}</span>
                  </div>
                </div>
                <h3>{sector.name}</h3>
                <p>{sector.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="testimonials-container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-layout">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${testimonial.featured ? 'featured' : ''}`}
              >
                <div className="testimonial-content">
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-metrics">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="metric">
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </div>
                    ))}
                  </div>
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
        </div> */}
      </div>
    </section>
  );
};

export default ClientSection; 