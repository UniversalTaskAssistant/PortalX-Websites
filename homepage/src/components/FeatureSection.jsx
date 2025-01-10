import React from 'react';
import '../styles/FeatureSection.css';
import { FaRocket, FaChartLine, FaPalette, FaChartBar, FaTools, FaCog } from 'react-icons/fa';
import { MdAutoAwesome, MdSync, MdDashboard, MdAnalytics, MdSettings } from 'react-icons/md';
import { BiUserVoice } from 'react-icons/bi';
import chatPortalImg from '../assets/photo-chatportal.jpg';
import dashboardImg from '../assets/photo-dashboard.avif';

const FeatureSection = () => {
  const majorFeatures = [
    {
      icon: <FaRocket />,
      title: "1-Minute Deployment Chat Portal",
      description: "Transform your website instantly with our simple integration. Just add a few lines of code and your AI-powered chat portal is ready to go.",
      highlight: "Quick Setup",
      image: chatPortalImg,
      minorFeatures: [
        {
          icon: <FaPalette />,
          title: "Generative Multi-modal UI",
          description: "Dynamic interfaces that adapt to user queries and your website content."
        },
        {
          icon: <MdAutoAwesome />,
          title: "Intelligent Automation",
          description: "Streamline user interactions with automated task completion."
        },
        {
          icon: <MdSync />,
          title: "Real-time Sync",
          description: "Automatic content synchronization keeps your portal up-to-date."
        },
        {
          icon: <FaChartLine />,
          title: "Brand Integration",
          description: "Seamlessly matches your website's look and feel."
        }
      ]
    },
    {
      icon: <MdDashboard />,
      title: "Client Dashboard",
      description: "Comprehensive analytics, documentation management, and customization settings all in one intuitive dashboard.",
      highlight: "Full Control",
      image: dashboardImg,
      minorFeatures: [
        {
          icon: <FaChartBar />,
          title: "User Engagement Insight",
          description: "Track and analyze user interactions and satisfaction metrics."
        },
        {
          icon: <MdAnalytics />,
          title: "Query Analysis",
          description: "Deep insights into user queries and conversation patterns."
        },
        {
          icon: <FaCog />,
          title: "Custom Configuration",
          description: "Tailor your docs and AI agent settings to your needs."
        },
        {
          icon: <FaTools />,
          title: "Integration Tools",
          description: "Easy-to-use tools for content and API management."
        }
      ]
    }
  ];

  return (
    <section className="feature-section">
      <div className="feature-content">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">Everything you need to transform your website's user experience</p>
        
        {majorFeatures.map((majorFeature, index) => (
          <React.Fragment key={index}>
            <div className="major-feature-block">
              <div className="main-feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{majorFeature.icon}</div>
                </div>
                <div className="feature-highlight">{majorFeature.highlight}</div>
                <h3 className="feature-title">{majorFeature.title}</h3>
                <p className="feature-description">{majorFeature.description}</p>
                <div className="feature-image-wrapper">
                  <img 
                    src={majorFeature.image} 
                    alt={`${majorFeature.title} Demo`}
                    className="feature-demo-image"
                  />
                </div>
              </div>

              <div className="minor-features-grid">
                {majorFeature.minorFeatures.map((feature, featureIndex) => (
                  <div key={featureIndex} className="portal-feature-card">
                    <div className="feature-icon-wrapper">
                      <div className="feature-icon">{feature.icon}</div>
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {index < majorFeatures.length - 1 && (
              <div className="features-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection; 