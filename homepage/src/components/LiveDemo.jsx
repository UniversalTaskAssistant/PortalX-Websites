import React, { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import $ from 'jquery';
import '../styles/LiveDemo.css';
import '../styles/App.css';

const setStepLoading = (stepElement) => {
  stepElement.classList.add('step-loading');
  const spinner = document.createElement('span');
  spinner.className = 'spinner';
  stepElement.appendChild(spinner);
};

const removeStepLoading = (stepElement) => {
  stepElement.classList.remove('step-loading');
  const spinner = stepElement.querySelector('.spinner');
  if (spinner) {
    spinner.remove();
  }
};

const setStepSuccess = (stepElement) => {
  stepElement.classList.add('step-success');
};

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

    $.ajax({
      url: 'http://localhost:7000/crawl',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      crossDomain: true,
      xhrFields: {
        withCredentials: false
      },
      data: JSON.stringify({
        domainName: url,
        domainLimit: url
      }),
      beforeSend: function() {
        console.log('Sending request to server with data:', {
          domainName: url,
          domainLimit: url
        });
      },
      success: function(data) {
        console.log('Received response:', data);
        if (data.status === 'success') {
          const step1 = document.querySelector('.demo-steps .step:nth-child(1)');
          const step2 = document.querySelector('.demo-steps .step:nth-child(2)');
          const step3 = document.querySelector('.demo-steps .step:nth-child(3)');
          
          setStepSuccess(step1);
          setTimeout(() => {
            setStepLoading(step2);
            setStepLoading(step3);
          }, 500);

          // Start updating stats to show progress
          const interval = setInterval(() => {
            setStats(prev => ({
              pages: Math.min(prev.pages + Math.floor(Math.random() * 3), 12),
              domains: Math.min(prev.domains + Math.floor(Math.random() * 2), 5),
              fails: Math.min(prev.fails + Math.floor(Math.random() * 1), 2)
            }));
          }, 500);

          // End the analysis after 3 seconds
          setTimeout(() => {
            removeStepLoading(step2);
            removeStepLoading(step3);
            setStepSuccess(step2);
            setStepSuccess(step3);

            clearInterval(interval);
            setIsAnalyzing(false);
          }, 3000);
        } else {
          setIsAnalyzing(false);
          alert(data.message || 'Failed to start crawling');
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Request failed:', {
          status: jqXHR.status,
          textStatus: textStatus,
          errorThrown: errorThrown,
          responseText: jqXHR.responseText
        });
        setIsAnalyzing(false);
        alert('Failed to connect to the server. Check console for details.');
      }
    });
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="spinner" />
                <span>Analyzing...</span>
              </div>
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
            </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo; 