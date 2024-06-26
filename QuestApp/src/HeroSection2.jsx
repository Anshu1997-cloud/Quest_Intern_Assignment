import React from 'react'
import './HeroSection1.css'

const HeroSection2 = () => {
  return (
    <div className="header-background" style={{ 
        width: '100vw', 
        position: 'relative', 
        margin: 'auto', 
        overflow: 'hidden', 
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.75rem', 
          marginTop: '136px',
        }}>
          <div style={{ 
            opacity: '1', 
            transform: 'none',
          }}>
            <div style={{ 
              lineHeight: '72px', 
              opacity: '1', 
              transform: 'none',
            }}>
              <p className="hero-text">
                Transform Your Product with Intelligent In-App Experiences
              </p>
            </div>
            <div style={{ 
              opacity: '1', 
              transform: 'none',
            }}>
              <p className="hero-subtext">
                Empower growth & Marketing Teams to Boost Engagement and Conversion 10x faster without data or engineering team
              </p>
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem', 
              alignItems: 'center', 
              justifyContent: 'center', 
              opacity: '1', 
              transform: 'none',
            }}>
              <div className="hero-input-container">
                <input className="hero-input" type="email" placeholder="Enter your mail address" />
                <button className="hero-button">
                  Book Demo
                </button>
              </div>
            </div>
            <div style={{ 
              opacity: '1', 
              transform: 'none',
            }}>
              <div style={{ 
                width: '290px', 
                margin: 'auto',
              }}>
                <p className="no-credit-card-text">
                  No credit card required
                </p>
              </div>
            </div>
          </div>
          <div style={{ 
            minHeight: '28px', 
            marginTop: '60px',
          }}>
            <div style={{ 
              width: 'fit-content', 
              height: 'fit-content', 
              margin: 'auto',
            }}></div>
            <div className="hero-image-container">
              <img 
                src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg" 
                alt="Evolution of customer engagement" 
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>
  )
}

export default HeroSection2;