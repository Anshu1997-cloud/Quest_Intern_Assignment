import React from 'react'
import './HeroSection1.css'

const HeroSection2 = () => {
  return (
    <div style={{ 
        width: '100vw', 
        position: 'relative', 
        margin: 'auto', 
        overflow: 'hidden', 
      }} className="header-background">
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
              <p style={{ 
                fontSize: '35px', 
                textAlign: 'center', 
                color: 'white', 
                lineHeight: '54px', 
                fontWeight: 'bold', 
                fontFamily: 'figtree', 
                width: '580px', 
                fontSize: '40px',
                fontFamily: 'sans-serif',
                margin: 'auto',
              }}>
                Transform Your Product with Intelligent In-App Experiences
              </p>
            </div>
            <div style={{ 
              opacity: '1', 
              transform: 'none',
            }}>
              <p style={{ 
                fontSize: '20px', 
                textAlign: 'center', 
                color: 'white', 
                lineHeight: '26px', 
                maxWidth: '618px', 
                margin: 'auto', 
                marginTop: '1.75rem',
              }}>
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
              <div style={{ 
                display: 'flex', 
                width: '405px', 
                margin: 'auto', 
                marginTop: '5rem', 
                padding: '1rem 3.4rem', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                borderRadius: '0.75rem', 
                border: '1px solid #ccc', 
                backdropFilter: 'blur(2px)',
              }}>
                <input style={{ 
                  background: 'transparent', 
                  outline: 'none', 
                  color: 'white', 
                  width: '200px',
                }} type="email" placeholder="Enter your mail address" />
                <button style={{ 
                  padding: '7px 2rem', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: '17px', 
                  lineHeight: '20px', 
                  fontFamily: 'sans-serif', 
                  borderRadius: '4px', 
                  border: '1px solid #8C43EC', 
                  cursor: 'pointer',
                }}>
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
                <p style={{ 
                  color: '#EFEFEF', 
                  textAlign: 'center', 
                  fontSize: '20px', 
                  lineHeight: '20px', 
                  fontFamily: 'sans-serif', 
                  marginTop: '4rem', 
                  margin: 'auto',
                }}>
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
            <div style={{ 
            //   minHeight: '40vh', 
            width: '80vw', 
            height: '80vh',
              margin: 'auto',
            }}>
              <img 
                src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg" 
                alt="Evolution of customer engagement" 
                style={{ 
                  marginTop: '0.75rem',
                  marginLeft:'auto' ,
                  width: '70vw', 
                  height:'40vh',
                //   maxWidth: '100%', 
                  display: 'block',
                  margin: 'auto', 
                  borderRadius: '0 0 20px 20px', 
                  color: 'white', 
                  opacity: '1', 
                  transform: 'none',
                }} 
              />
            </div>
          </div>

        </div>
      </div>
  )
}

export default HeroSection2