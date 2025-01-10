import React, { useState } from 'react';
import '../styles/LiveDemo.css';
import '../styles/App.css';

const LiveDemo = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      // Add actual analysis logic here
    }, 3000);
  };

  return (
    <section className="live-demo">
      <div className="live-demo-container">
        <h2 className="section-title">Try PortalX in Your Site Now!</h2>
        <p className="section-subtitle"><u>One minute</u> to have a chat portal for your site</p>
        
        <div className="demo-input-container">
          <input
            type="url"
            placeholder="Enter your website URL (e.g., www.example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="url-input"
          />
          <button 
            className={`cta-button ${isAnalyzing ? 'analyzing' : ''}`}
            onClick={handleAnalyze}
            disabled={isAnalyzing || !url}
          >
            {isAnalyzing ? (
              <>
                <span className="spinner"></span>
                Analyzing ...
              </>
            ) : (
              'Get Your Chat Portal'
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo; 