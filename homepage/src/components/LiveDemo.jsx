import React, { useState } from 'react';
import '../styles/LiveDemo.css';
import '../styles/App.css';

const LiveDemo = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [stats, setStats] = useState({
    pages: 0,
    domains: 0,
    fails: 0
  });

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Reset stats
    setStats({
      pages: 0,
      domains: 0,
      fails: 0
    });

    // Simulate analysis process with updating stats
    const interval = setInterval(() => {
      setStats(prev => ({
        pages: Math.min(prev.pages + Math.floor(Math.random() * 3), 12),
        domains: Math.min(prev.domains + Math.floor(Math.random() * 2), 5),
        fails: Math.min(prev.fails + Math.floor(Math.random() * 1), 2)
      }));
    }, 500);

    // End the analysis after 3 seconds
    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
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
            placeholder="Enter your website link (e.g., www.example.com)"
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
        <div className="demo-window">
            <div className="demo-status">
                <div className="status-item">
                    <span className="status-label">Pages</span>
                    <span className="status-value">{stats.pages}</span>
                </div>
                <div className="status-item">
                    <span className="status-label">Domains</span>
                    <span className="status-value">{stats.domains}</span>
                </div>
                <div className="status-item">
                    <span className="status-label">Fails</span>
                    <span className="status-value">{stats.fails}</span>
                </div>
            </div>
            <div className="demo-site">
                {!url ? (
                    <div className="demo-initial-message">
                        <h3>How It Works</h3>
                        <div className="demo-steps">
                            <div className="step">
                                <div className="step-number">1</div>
                                <p>Input your site link</p>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <p>PortalX will analyze pages in this site</p>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <p>PortalX will deploy a Chat Portal for your site</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <iframe src={url} title="Demo Site" />
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo; 