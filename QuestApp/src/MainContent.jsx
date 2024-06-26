import React from 'react';
import './MainContent.css'

const MainContent = () => {
  return (
    <div >
      <p style={{ 
        paddingLeft: "0.25rem", 
        paddingRight: "0.25rem", 
        color: "white", 
        textAlign: "center", 
        fontWeight: "500", 
        fontSize: "30px", 
        lineHeight: "40px", 
        letterSpacing: "-0.96px", 
        width: "100%", 
        maxWidth: "674px", 
        marginTop: "150px", 
        marginLeft: '33%' 
      }}>
        Let our AI find the best ways to engage & convert your users
      </p>
      <p style={{ 
        textAlign: "center", 
        fontSize: "14px", 
        lineHeight: "28px", 
        color: "#B9B9B9", 
        fontWeight: "normal", 
        fontFamily: 'sans-serif', 
        marginTop: "1rem", 
        marginLeft: "auto", 
        marginRight: "auto" 
      }}>
        Generate Personalized In-App Text, Image, UI at Scale for Millions of Users without engineering team
      </p>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "row", 
        marginTop: "4rem", 
        opacity: "1", 
        transform: "none" 
      }}>
        <div style={{ 
          width: "575px", 
          position: "relative" 
        }}>
          <img src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg" alt="website showing a segment named" style={{ 
            width: "100%" 
          }} />
        </div>
        <div style={{ 
          width: "580px", 
          display: "flex", 
          flexDirection: "column", 
          gap: "1rem", 
          paddingLeft: "85px" 
        }}>
          <p style={{ 
            color: "white", 
            fontFamily: 'sans-serif', 
            fontSize: "35px", 
            fontWeight: "medium", 
            lineHeight: "40px", 
            letterSpacing: "0.6px" 
          }}>
            AI generated mini-segments to target in active user
          </p>
          <div style={{ display: "flex" }}>
            <p style={{ 
              color: "#939393", 
              fontFamily: 'sans-serif', 
              fontSize: "19px", 
              fontWeight: "normal", 
              lineHeight: "28px" 
            }}>
              Our analytical models find common traits for users that are not active and create thousands of segments to activate them
            </p>
          </div>
        </div>
      </div>
      <div  className='header1' style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "row-reverse", 
        marginTop: "2rem", 
        opacity: "1", 
        transform: "none",
        gap: "5%" 
      }}>
        <div style={{ 
          width: "575px", 
          position: "relative" 
        }}>
          <img src="https://www.questlabs.ai/assets/AiGenerate-JqljUpyB.svg" alt="flowchart for creating marketing campaigns" style={{ 
            width: "100%" 
          }} />
        </div>
        <div style={{ 
          width: "580px", 
          display: "flex", 
          flexDirection: "column", 
          gap: "1rem", 
          paddingLeft: "85px" 
        }}>
          <p style={{ 
            color: "white", 
            fontFamily: 'sans-serif', 
            fontSize: "25px", 
            fontWeight: "medium", 
            lineHeight: "40px", 
            letterSpacing: "0.6px" 
          }}>
            Our models generate AI variants to optimize text, images, and UI layouts for each segment.
          </p>
          <div style={{ display: "flex" }}>
            <p style={{ 
              color: "#939393", 
              fontFamily: 'sans-serif', 
              fontSize: "19px", 
              fontWeight: "normal", 
              lineHeight: "28px" 
            }}>
              Easily find winning variants among millions of variants to power users across the customer journey
            </p>
          </div>
        </div>
      </div>
      <div  style={{ 
        display: "flex", 
        flexDirection: "row", 
        gap: "6px", 
        width: "100%", 
        margin: "auto", 
        maxWidth: "1200px", 
        opacity: "1", 
        transform: "none" 
      }}>
        <div style={{ 
          width: "100%", 
          maxWidth: "42%", 
          borderRadius: "24px", 
          border: "1px solid rgba(201,201,201,0.12)", 
          backgroundColor: "#202020", 
          display: "flex", 
          flexDirection: "rows", 
          justifyContent: "space-between" 
        }}>
          <div>
            <img src="https://www.questlabs.ai/assets/image1-y7VvY8jh.svg" alt="" style={{ width: "100%" }} />
          </div>
          <div style={{ padding: "8px", paddingTop: "6px" }}>
            <p style={{ 
           
            }}>
              Enterprise-Grade SDKs
            </p>
            <p style={{ 
              color: "#939393", 
              textAlign: "center", 
              fontFamily: 'sans-serif', 
              fontSize: "15px", 
              lineHeight: "20px", 
              marginTop: "2px" ,
            }}>
              Build on a solid foundation with our robust SDKs, designed for scalability and performance.
            </p>
          </div>
        </div>
        <div style={{ 
          borderRadius: "24px", 
          border: "1px solid rgba(201,201,201,0.12)", 
          backgroundColor: "#202020", 
          width: "100%", 
          maxWidth: "58%", 
          justifyContent: "space-between" 
        }}>
          <div style={{ display: "flex", position: "relative" }}>
            <img src="https://www.questlabs.ai/assets/image2-0qa_GPAl.svg" alt="" style={{ width: "100%" }} />
          </div>
          <div style={{ padding: "8px", paddingTop: "6px" }}>
            <p style={{ 
              color: "#E0E0E0", 
              textAlign: "center", 
              fontFamily: 'sans-serif', 
              fontSize: '2rem', 
              lineHeight: "30px", 
              letterSpacing: "-0.4px", 
              fontWeight: "600" 
            }}>
              Fully Customizable to your Brand
            </p>
            <p style={{ 
              color: "#939393", 
              textAlign: "center", 
              fontFamily: 'sans-serif', 
              fontSize: "12px", 
              lineHeight: "20px", 
              maxWidth: "350px", 
              margin: "auto", 
              marginTop: "2px" 
            }}>
              Your brand, your way—personalize every aspect of your platform to stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;