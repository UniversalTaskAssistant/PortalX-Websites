import React, { useState } from 'react';
import '../styles/ClientSection.css';
import { 
  FaShoppingCart, 
  FaLaptopCode, 
  FaBriefcase, 
  FaGraduationCap 
} from 'react-icons/fa';

const ClientSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectors = [
    {
      name: 'E-commerce',
      icon: <FaShoppingCart />,
      description: 'Streamline customer service and shopping assistance',
      stats: { value: '3x', label: 'Sales Growth' }
    },
    {
      name: 'SaaS Companies',
      icon: <FaLaptopCode />,
      description: 'Enhance user onboarding and support automation',
      stats: { value: '70%', label: 'Faster Support' }
    },
    {
      name: 'Professional Services',
      icon: <FaBriefcase />,
      description: 'Automate client interactions and appointment booking',
      stats: { value: '85%', label: 'Time Saved' }
    },
    {
      name: 'Educational Institutions',
      icon: <FaGraduationCap />,
      description: 'Improve student support and resource accessibility',
      stats: { value: '95%', label: 'Satisfaction' }
    }
  ];

  return (
    <section className="section client-section">
      <div className="container">
        <h2 className="section-title">Built for Various Industries</h2>
        <p className="section-subtitle">
          Especially empowering <u>Small & Medium-sized Businesses</u> with fast & scalable solution
        </p>
        
        <div className="sectors-two-column">
          <div className="sectors-list">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className={`sector-title ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="sector-icon">{sector.icon}</div>
                <h3>{sector.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="sector-details">
            <div className="sector-card">
              <div className="sector-header">
                <div className="sector-icon">{sectors[activeIndex].icon}</div>
                <div className="sector-stat">
                  <span className="stat-value">{sectors[activeIndex].stats.value}</span>
                  <span className="stat-label">{sectors[activeIndex].stats.label}</span>
                </div>
              </div>
              <h3>{sectors[activeIndex].name}</h3>
              <p>{sectors[activeIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection; 