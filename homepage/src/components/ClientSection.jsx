import React from 'react';
import '../styles/ClientSection.css';

const ClientSection = () => {
  const sectors = [
    {
      name: 'SaaS Companies',
      icon: '💻',
      description: 'Enhance user onboarding and support automation'
    },
    {
      name: 'E-commerce',
      icon: '🛍️',
      description: 'Streamline customer service and shopping assistance'
    },
    {
      name: 'Professional Services',
      icon: '👔',
      description: 'Automate client interactions and appointment booking'
    },
    {
      name: 'Educational Institutions',
      icon: '🎓',
      description: 'Improve student support and resource accessibility'
    }
  ];

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
    },
    {
      quote: "PortalX has revolutionized how we handle student inquiries. Response accuracy improved by 90%.",
      author: "Emily Rodriguez",
      position: "Dean, Education Plus",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section className="client-section">
      <div className="container">
        <div className="sectors-container">
          <h2 className="section-title">Built for Various Industries</h2>
          <p className="section-subtitle">
            Espcially empowering <u>Small & Medium-sized Businesses</u> with fast & scalable solution
          </p>
          
          <div className="sectors-grid">
            {sectors.map((sector, index) => (
              <div key={index} className="sector-card">
                <div className="sector-icon">{sector.icon}</div>
                <h3>{sector.name}</h3>
                <p>{sector.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-container">
          <p className="section-subtitle">
            Trusted by industry leaders
          </p>

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
        </div>
      </div>
    </section>
  );
};

export default ClientSection; 