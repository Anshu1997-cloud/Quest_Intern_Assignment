import React from 'react';
import './HeroSection3.css';

const HeroSection3 = () => {
  return (
<div className="bg-[#0D0D0D] min-h-screen" style = {{position : "relative"}}>
    <p style={{
        color: 'white', 
        marginTop : '6vh',
        textAlign: 'center', 
        fontWeight: '500', 
        fontSize: '60px', 
        lineHeight: '40px', 
        letterSpacing: '0.96px', 
        fontFamily: 'sans-serif', 
        margin: 'auto', 
        maxWidth: '100%'
    }}>
        AI-Driven Personalized UI
    </p>

    <p style={{
        textAlign: 'center', 
        marginTop: '7rem',
        fontSize: '30px', 
        lineHeight: '28px', 
        color: '#B9B9B9', 
        fontFamily: 'sans-serif', 
        margin: 'auto',
        '@media (minWidth: 768px)': {
          fontSize: '18px',
          lineHeight: '36px'
        }
    }}>
        Enhance your app with AI-driven personalized UI, seamlessly integrated with your data stack for a tailored user experience
    </p>

    <div style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '7rem', 
        border: '2px solid #ccc', 
        maxWidth: '40vw', 
        marginLeft: '30%', 
        padding: '15px', 
        borderRadius: '10px'
    }}>
        <div className='app-card'>
            <img src="https://www.questlabs.ai/assets/snowflack-X_nYrDCM.svg" />
        </div>
        <div className='app-card'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 49" style={{ width: "100px", height: "100px" }}>
                <g clipPath="url(#clip0_4514_7702)">
                    <path d="M22.2822 36.9547L40.8903 41.3309V6.9043L22.2822 11.2804V36.9547Z" style={{ fill: "#205B97" }}></path>
                    <path d="M40.8881 6.9043L44.4325 8.65475V39.5804L40.8881 41.3309V6.9043ZM22.28 36.9547L3.67188 41.3309V6.9043L22.28 11.2804V36.9547Z" style={{ fill: "#5193CE" }}></path>
                    <path d="M3.6733 6.9043L0.128906 8.65475V39.5804L3.6733 41.3309V6.9043Z" style={{ fill: "#205B97" }}></path>
                    <path d="M27.0061 48.3327L34.0949 44.8318V3.50092L27.0061 0L24.8389 22.9511L27.0061 48.3327Z" style={{ fill: "#5193CE" }}></path>
                    <path d="M17.5536 48.3327L10.4648 44.8318V3.50092L17.5536 0L19.7209 22.9511L17.5536 48.3327Z" style={{ fill: "#205B97" }}></path>
                    <path d="M17.5547 0H27.1043V48.2351H17.5547V0Z" style={{ fill: "#2E73B7" }}></path>
                </g>
            </svg>
        </div>
          <div className = 'app-card'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 58 43" style={{fill:"none"}}>
            <path d="M16.1535 13.0617C16.1535 13.8021 16.2316 14.4011 16.3682 14.8413C16.5243 15.2816 16.7182 15.7615 16.9914 16.2812C17.089 16.4411 17.128 16.6011 17.128 16.7413C17.128 16.9409 17.011 17.1406 16.7585 17.3415L15.5315 18.1811C15.3559 18.3014 15.1815 18.3609 15.0253 18.3609C14.8302 18.3609 14.6363 18.2605 14.4411 18.0807C14.1679 17.7805 13.935 17.4606 13.7398 17.1406C13.5447 16.8008 13.3507 16.4213 13.1361 15.9612C11.6176 17.8004 9.70883 18.7206 7.41098 18.7206C5.77541 18.7206 4.47037 18.2406 3.51659 17.2807C2.56282 16.3209 2.07617 15.041 2.07617 13.4412C2.07617 11.7421 2.66039 10.3618 3.84834 9.32256C5.0363 8.2833 6.61332 7.76242 8.61845 7.76242C9.28072 7.76242 9.96252 7.82195 10.6821 7.92241C11.4017 8.02286 12.1421 8.18284 12.9214 8.36267V6.90298C12.9214 5.38377 12.6104 4.32343 12.0067 3.70334C11.3834 3.08325 10.3321 2.78313 8.83311 2.78313C8.15132 2.78313 7.45123 2.8625 6.73041 3.04357C6.00959 3.22339 5.3095 3.4429 4.62771 3.72318C4.31669 3.86332 4.08252 3.94269 3.94592 3.98362C3.80931 4.0233 3.71174 4.04315 3.6349 4.04315C3.3617 4.04315 3.22631 3.84348 3.22631 3.42306V2.44332C3.22631 2.12336 3.26534 1.88401 3.36292 1.74387C3.46049 1.60373 3.63612 1.46359 3.90811 1.32345C4.5899 0.9638 5.40707 0.663678 6.36207 0.423085C7.31585 0.162649 8.32817 0.0435912 9.39903 0.0435912C11.7164 0.0435912 13.4105 0.583067 14.5009 1.66326C15.5717 2.74345 16.1169 4.38296 16.1169 6.58178V13.0604L16.1535 13.0617ZM8.24767 16.1001C8.89043 16.1001 9.55271 15.9798 10.2528 15.7404C10.9541 15.5011 11.5774 15.0608 12.103 14.4606C12.414 14.0811 12.6482 13.6607 12.7653 13.1807C12.8824 12.7008 12.9605 12.1204 12.9605 11.4408V10.6012C12.3957 10.461 11.792 10.3407 11.1688 10.2614C10.5455 10.182 9.94178 10.1411 9.33805 10.1411C8.03301 10.1411 7.07923 10.4015 6.43647 10.941C5.79371 11.4805 5.48269 12.2407 5.48269 13.2403C5.48269 14.1803 5.71687 14.8798 6.20351 15.3597C6.67064 15.8607 7.35244 16.1001 8.24767 16.1001ZM23.8838 18.2605C23.5337 18.2605 23.2995 18.201 23.1434 18.0608C22.9873 17.9405 22.8519 17.6615 22.7348 17.2807L18.1587 1.82448C18.0416 1.42514 17.983 1.16471 17.983 1.02457C17.983 0.704603 18.1391 0.524779 18.4502 0.524779H20.3589C20.7285 0.524779 20.9822 0.584307 21.1188 0.724447C21.2749 0.844743 21.3908 1.12378 21.5079 1.50451L24.779 14.7421L27.816 1.50451C27.9135 1.10518 28.0306 0.844743 28.1855 0.724447C28.3416 0.60415 28.6136 0.524779 28.9649 0.524779H30.5224C30.8919 0.524779 31.1456 0.584307 31.3017 0.724447C31.4579 0.844743 31.5932 1.12378 31.6713 1.50451L34.7473 14.9021L38.116 1.50451C38.2331 1.10518 38.3697 0.844743 38.5051 0.724447C38.6612 0.60415 38.9137 0.524779 39.2649 0.524779H41.0761C41.3871 0.524779 41.5628 0.684761 41.5628 1.02457C41.5628 1.12502 41.5433 1.22424 41.5237 1.34453C41.5042 1.46483 41.4652 1.62481 41.3871 1.84432L36.6951 17.3006C36.578 17.6999 36.4414 17.9604 36.2865 18.0807C36.1316 18.201 35.8779 18.2803 35.5462 18.2803H33.8716C33.502 18.2803 33.2483 18.2208 33.0922 18.0807C32.9361 17.9405 32.8007 17.6813 32.7227 17.2807L29.7052 4.38295L26.7073 17.2609C26.6097 17.6602 26.4926 17.9207 26.3377 18.0608C26.1816 18.201 25.9096 18.2605 25.5584 18.2605H23.8838ZM48.9039 18.8C47.8916 18.8 46.8793 18.6797 45.906 18.4403C44.9327 18.201 44.1729 17.9405 43.6667 17.6404C43.3557 17.4606 43.141 17.2609 43.063 17.0811C42.9849 16.9013 42.9459 16.7016 42.9459 16.5218V15.5023C42.9459 15.0819 43.102 14.8823 43.3935 14.8823C43.5106 14.8823 43.6277 14.9021 43.7435 14.9418C43.8606 14.9815 44.035 15.0621 44.2302 15.1414C44.8925 15.4416 45.6121 15.6809 46.3719 15.8409C47.1513 16.0009 47.9099 16.0803 48.6893 16.0803C49.9163 16.0803 50.87 15.8607 51.5323 15.4205C52.1946 14.9802 52.5446 14.3403 52.5446 13.5205C52.5446 12.9612 52.369 12.5011 52.019 12.1204C51.6689 11.7409 51.0066 11.4011 50.0529 11.0811L47.2293 10.1808C45.8084 9.72065 44.7571 9.04104 44.1143 8.14068C43.4715 7.26139 43.141 6.28166 43.141 5.24115C43.141 4.40156 43.3167 3.66117 43.6667 3.02124C44.0167 2.38132 44.4851 1.822 45.0681 1.38174C45.6523 0.921634 46.3146 0.581826 47.0927 0.342473C47.8721 0.10436 48.6893 0.00390625 49.5467 0.00390625C49.9748 0.00390625 50.4224 0.0237492 50.8517 0.0832774C51.2994 0.142806 51.7079 0.223417 52.1177 0.302788C52.5068 0.403242 52.8776 0.502455 53.2276 0.622752C53.5777 0.743048 53.8509 0.862105 54.046 0.982402C54.3192 1.14238 54.5132 1.30237 54.6303 1.48219C54.7473 1.64217 54.8059 1.86168 54.8059 2.14196V3.08201C54.8059 3.50243 54.6498 3.72194 54.3583 3.72194C54.2022 3.72194 53.9497 3.64257 53.6179 3.48259C52.508 2.96296 51.2615 2.70252 49.8797 2.70252C48.7698 2.70252 47.8941 2.88235 47.2903 3.26184C46.6866 3.64133 46.3756 4.22173 46.3756 5.04149C46.3756 5.6008 46.5707 6.08075 46.9598 6.46148C47.3489 6.84098 48.0697 7.22171 49.1015 7.56152L51.8665 8.46188C53.2679 8.92198 54.2814 9.56191 54.8839 10.3817C55.4865 11.2014 55.7792 12.1415 55.7792 13.1807C55.7792 14.0402 55.6035 14.8202 55.273 15.4999C54.923 16.1795 54.4546 16.7797 53.8521 17.2597C53.2484 17.7595 52.5276 18.1191 51.6909 18.3795C50.8115 18.6598 49.8967 18.8 48.9039 18.8Z" style={{fill:"white"}}>
                </path>
                <path d="M52.258 35.5908C45.9414 40.4089 36.7635 42.9668 28.8714 42.9668C17.8125 42.9668 7.84683 38.7438 0.32028 31.7244C-0.275061 31.1698 0.26255 30.416 0.97335 30.8525C9.11448 35.7297 19.1559 38.6848 29.5437 38.6848C36.5519 38.6848 44.2516 37.1784 51.3356 34.0843C52.3927 33.5887 53.2948 34.7976 52.258 35.5908ZM54.8884 32.4979C54.0813 31.4268 49.5507 31.9827 47.4965 32.2397C46.8819 32.3184 46.7857 31.7638 47.3426 31.3469C50.9519 28.73 56.8848 29.4826 57.5764 30.3557C58.268 31.2485 57.384 37.3751 54.0056 40.3093C53.4872 40.7655 52.9881 40.5269 53.2178 39.933C53.9863 37.9703 55.6954 33.5481 54.8884 32.4979Z" style={{fill:"#FF9900"}}>
                    </path>
                    </svg>
          </div>
          <div className = 'app-card'>
            <img src="https://www.questlabs.ai/assets/AMPL-MScmEe7Q.svg"/>
          </div>
          <div className = 'app-card'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 57 57" style= {{fill:"none"}}>
            <g clip-path="url(#clip0_4514_7715)"><path d="M13.0254 51.4142L0.759212 30.1682C0.1037 29.0334 0.1037 27.6342 0.759212 26.4994L13.0254 5.2543C13.68 4.12037 14.8888 3.42168 16.1972 3.41992H40.7411C42.045 3.42609 43.2477 4.12477 43.8997 5.2543L56.1641 26.4994C56.8196 27.6342 56.8196 29.0334 56.1641 30.1682L43.8979 51.4142C43.2433 52.5481 42.0345 53.2468 40.7261 53.2485H16.1884C14.8818 53.2441 13.6774 52.5455 13.0228 51.4142H13.0254Z" fill="#4386FA"></path><path opacity="0.1" d="M36.1251 21.4922C36.1251 21.4922 39.5348 29.6711 34.8863 34.3073C30.2378 38.9434 21.7734 35.976 21.7734 35.976L38.9912 53.2414H40.7392C42.0485 53.2396 43.2573 52.54 43.9111 51.407L52.031 37.3469L36.1251 21.4922Z" style= {{fill:"black"}}>
                </path>
                <path d="M40.1515 38.2268L36.392 34.4585C36.3511 34.4165 36.3042 34.3809 36.2528 34.3528C37.852 32.293 38.6056 29.7009 38.3602 27.1048C38.1148 24.5087 36.8889 22.1038 34.9321 20.3801C32.9753 18.6564 30.435 17.7436 27.8287 17.8276C25.2223 17.9116 22.7461 18.9862 20.9044 20.8324C19.0628 22.6786 17.9943 25.1575 17.9167 27.764C17.839 30.3705 18.7581 32.9086 20.4866 34.8611C22.2151 36.8137 24.623 38.0337 27.2197 38.2727C29.8165 38.5117 32.4066 37.7517 34.4625 36.1475C34.4893 36.196 34.5228 36.2405 34.562 36.2797L38.3304 40.048C38.4411 40.1585 38.5911 40.2206 38.7475 40.2206C38.904 40.2206 39.054 40.1585 39.1647 40.048L40.1515 39.0612C40.2621 38.9505 40.3242 38.8004 40.3242 38.644C40.3242 38.4876 40.2621 38.3375 40.1515 38.2268ZM28.1453 35.7898C26.6204 35.79 25.1298 35.3379 23.8619 34.4909C22.5939 33.6439 21.6057 32.4398 21.0221 31.0311C20.4385 29.6224 20.2857 28.0722 20.5831 26.5767C20.8806 25.0811 21.6148 23.7074 22.6931 22.6292C23.7713 21.5509 25.145 20.8167 26.6406 20.5192C28.1361 20.2218 29.6863 20.3746 31.095 20.9582C32.5037 21.5418 33.7078 22.53 34.5548 23.798C35.4018 25.0659 35.8539 26.5565 35.8537 28.0814C35.8535 30.1257 35.0412 32.0862 33.5957 33.5318C32.1501 34.9773 30.1896 35.7896 28.1453 35.7898ZM23.2175 27.6699V30.8558C23.7082 31.7219 24.4184 32.4444 25.2774 32.9484V27.6505L23.2175 27.6699ZM27.0721 25.0285V33.6382C27.753 33.7637 28.4511 33.7637 29.132 33.6382V25.0285H27.0721ZM33.0316 30.8488V28.9615H30.9735V32.9263C31.8313 32.4237 32.5417 31.7041 33.0334 30.84L33.0316 30.8488Z" style={{fill:"white"}}>
                    </path>
                    </g>
                    <defs>
                        <clipPath id="clip0_4514_7715"><rect width="56.3881" height="56.3881" fill="white" transform="translate(0.267578 0.138672)"></rect>
                        </clipPath>
                        </defs>
                        </svg>
          </div>
          <div className = 'app-card'>
            <img src="https://www.questlabs.ai/assets/segmentIcon-18JVZ7QZ.svg"/>
          </div>
          <div className = 'app-card'>
            <img src="https://www.questlabs.ai/assets/firebase-gDRaRdGY.svg"/>
          </div>
          <div className = 'app-card'>
            <img src="https://www.questlabs.ai/assets/stack-MxdB7c0M.svg"/>
          </div>
      </div>
      <div style={{  display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <img  src="https://www.questlabs.ai/assets/logoWithLines-L5NiNPgQ.svg"/>
      </div >
      <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center' }} >
  <img src="data:image/svg+xml,%3csvg%20width='984'%20height='174'%20viewBox='0%200%20984%20174'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M491.49%200V94.2075C491.49%20102.492%20484.774%20109.207%20476.49%20109.207H16C7.71573%20109.207%201%20115.923%201%20124.207V174'%20stroke='url(%23paint0_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M492.51%200V94.2075C492.51%20102.492%20499.226%20109.207%20507.51%20109.207H968C976.284%20109.207%20983%20115.923%20983%20124.207V174'%20stroke='url(%23paint1_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M330.371%20110.295V171.147'%20stroke='url(%23paint2_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M654.646%20110.295V171.147'%20stroke='url(%23paint3_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(-211.104%20182.557)%20rotate(-15.2854)%20scale(985.777%205132.35)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint1_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(1195.1%20182.557)%20rotate(-164.715)%20scale(985.777%205132.35)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint2_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(330.205%20171.147)%20rotate(-89.1183)%20scale(108.692%2031.165)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint3_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(654.48%20171.147)%20rotate(-89.1183)%20scale(108.692%2031.165)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e" alt=""/>

</div>
<p style={{textAlign: "center", fontSize: "30px", lineHeight: "28px", color: "#B9B9B9", fontFamily: 'sans-serif', fontWeight: "normal", marginLeft: "auto", marginRight: "auto"}}>Dynamic &amp; Intelligent experiences</p>
<p style={{paddingLeft: "1rem", paddingRight: "1rem", color: "#ffffff", textAlign: "center", fontWeight: "500", fontSize: "40px", lineHeight: "40px", letterSpacing: "-0.96px", fontFamily: 'sans-serif', maxWidth: "1100px", marginLeft: "auto", marginRight: "auto", marginTop: "auto"}}>
    Deliver Delightful In-App Experiences that drive Adoption, Engagement &amp; Retention
</p>
<p style={{textAlign: "center", fontSize: "20px", lineHeight: "28px", color: "#B9B9B9", fontWeight: "normal", fontFamily: 'sans-serif', marginTop: "1rem", marginBottom: "3rem"}}>
    50+ Pre-Built In-app Components to get started within minutes
</p>
<div style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'flex-start', 
  width: "100%", 
  maxWidth: "1200px", 
  padding: "2px", 
  gap: "1rem", 
  borderRadius: "16px", 
  backgroundColor: "rgba(255, 255, 255, 0.08)", 
  border: "1px solid rgba(201, 201, 201, 0.12)", 
  margin: "auto", 
  transition: "all 300ms", 
  background: "rgba(201, 201, 201, 0.12)", 
  opacity: "1", 
  transform: "none"
}}>
  <div style={{ 
    display: "flex", 
    justifyContent: "space-between", 
    width: "100%" 
  }}>
    <div style={{ 
      width: "15%", 
      padding: "1rem", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      gap: "1rem", 
      cursor: "pointer", 
      transition: "all 200ms ease-in-out", 
      borderBottom: "1px solid #2C2C2C" 
    }}>
      <div style={{ 
        width: "28px", 
        height: "28px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: "50%", 
        transition: "all 200ms ease-in-out", 
        backgroundColor: "rgb(62, 62, 62)" 
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.332 2H2.66536C1.93203 2 1.33203 2.6 1.33203 3.33333V10.6667C1.33203 11.4 1.93203 12 2.66536 12H6.66536L5.33203 13.3333V14H10.6654V13.3333L9.33203 12H13.332C14.0654 12 14.6654 11.4 14.6654 10.6667V3.33333C14.6654 2.6 14.0654 2 13.332 2Z" fill="#979797" fill-opacity="0.95"></path>
          <path d="M7.01892 12.3536L7.87247 11.5H6.66536H2.66536C2.20817 11.5 1.83203 11.1239 1.83203 10.6667V3.33333C1.83203 2.87614 2.20817 2.5 2.66536 2.5H13.332C13.7892 2.5 14.1654 2.87614 14.1654 3.33333V10.6667C14.1654 11.1239 13.7892 11.5 13.332 11.5H9.33203H8.12492L8.97848 12.3536L10.1249 13.5H5.87247L7.01892 12.3536Z" stroke="#979797" stroke-opacity="0.95"></path>
        </svg>
      </div>
      <p style={{ textAlign: "center", lineHeight: "20px", overflow: "hidden", whiteSpace: "nowrap", color: "white", fontWeight: "medium", fontFamily: 'Arial' }}>Onboarding</p>
    </div>

    <div style={{ 
      width: "15%", 
      padding: "1rem", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      gap: "1rem", 
      cursor: "pointer", 
      transition: "all 200ms ease-in-out", 
      borderBottom: "1px solid #2C2C2C" 
    }}>
      <div style={{ 
        width: "28px", 
        height: "28px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: "50%", 
        transition: "all 200ms ease-in-out", 
        backgroundColor: "rgb(62, 62, 62)" 
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.332 2H2.66536C1.93203 2 1.33203 2.6 1.33203 3.33333V10.6667C1.33203 11.4 1.93203 12 2.66536 12H6.66536L5.33203 13.3333V14H10.6654V13.3333L9.33203 12H13.332C14.0654 12 14.6654 11.4 14.6654 10.6667V3.33333C14.6654 2.6 14.0654 2 13.332 2Z" style={{fill:"#979797" ,fillOpacity:"0.95"}}></path>
          <path d="M7.01892 12.3536L7.87247 11.5H6.66536H2.66536C2.20817 11.5 1.83203 11.1239 1.83203 10.6667V3.33333C1.83203 2.87614 2.20817 2.5 2.66536 2.5H13.332C13.7892 2.5 14.1654 2.87614 14.1654 3.33333V10.6667C14.1654 11.1239 13.7892 11.5 13.332 11.5H9.33203H8.12492L8.97848 12.3536L10.1249 13.5H5.87247L7.01892 12.3536Z" stroke="#979797" stroke-opacity="0.95"></path>
        </svg>
      </div>
      <p style={{ textAlign: "center", lineHeight: "20px", overflow: "hidden", whiteSpace: "nowrap", color: "white", fontWeight: "medium", fontFamily: 'Arial' }}>Quizzes</p>
    </div>

    <div style={{ 
      width: "15%", 
      padding: "1rem", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      gap: "1rem", 
      cursor: "pointer", 
      transition: "all 200ms ease-in-out", 
      borderBottom: "1px solid #2C2C2C" 
    }}>
      <div style={{ 
        width: "28px", 
        height: "28px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: "50%", 
        transition: "all 200ms ease-in-out", 
        backgroundColor: "rgb(62, 62, 62)" 
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.332 2H2.66536C1.93203 2 1.33203 2.6 1.33203 3.33333V10.6667C1.33203 11.4 1.93203 12 2.66536 12H6.66536L5.33203 13.3333V14H10.6654V13.3333L9.33203 12H13.332C14.0654 12 14.6654 11.4 14.6654 10.6667V3.33333C14.6654 2.6 14.0654 2 13.332 2Z" fill="#979797" fill-opacity="0.95"></path>
          <path d="M7.01892 12.3536L7.87247 11.5H6.66536H2.66536C2.20817 11.5 1.83203 11.1239 1.83203 10.6667V3.33333C1.83203 2.87614 2.20817 2.5 2.66536 2.5H13.332C13.7892 2.5 14.1654 2.87614 14.1654 3.33333V10.6667C14.1654 11.1239 13.7892 11.5 13.332 11.5H9.33203H8.12492L8.97848 12.3536L10.1249 13.5H5.87247L7.01892 12.3536Z" stroke="#979797" stroke-opacity="0.95"></path>
        </svg>
      </div>
      <p style={{ textAlign: "center", lineHeight: "20px", overflow: "hidden", whiteSpace: "nowrap", color: "white", fontWeight: "medium", fontFamily: 'Arial' }}>Surveys</p>
    </div>

    <div style={{ 
      width: "15%", 
      padding: "1rem", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      gap: "1rem", 
      cursor: "pointer", 
      transition: "all 200ms ease-in-out", 
      borderBottom: "1px solid #2C2C2C" 
    }}>
      <div style={{ 
        width: "28px", 
        height: "28px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: "50%", 
        transition: "all 200ms ease-in-out", 
        backgroundColor: "rgb(62, 62, 62)" 
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.332 2H2.66536C1.93203 2 1.33203 2.6 1.33203 3.33333V10.6667C1.33203 11.4 1.93203 12 2.66536 12H6.66536L5.33203 13.3333V14H10.6654V13.3333L9.33203 12H13.332C14.0654 12 14.6654 11.4 14.6654 10.6667V3.33333C14.6654 2.6 14.0654 2 13.332 2Z" fill="#979797" fill-opacity="0.95"></path>
          <path d="M7.01892 12.3536L7.87247 11.5H6.66536H2.66536C2.20817 11.5 1.83203 11.1239 1.83203 10.6667V3.33333C1.83203 2.87614 2.20817 2.5 2.66536 2.5H13.332C13.7892 2.5 14.1654 2.87614 14.1654 3.33333V10.6667C14.1654 11.1239 13.7892 11.5 13.332 11.5H9.33203H8.12492L8.97848 12.3536L10.1249 13.5H5.87247L7.01892 12.3536Z" stroke="#979797" stroke-opacity="0.95"></path>
        </svg>
      </div>
      <p style={{ textAlign: "center", lineHeight: "20px", overflow: "hidden", whiteSpace: "nowrap", color: "white", fontWeight: "medium", fontFamily: 'Arial' }}>Assignments</p>
    </div>

    <div style={{ 
      width: "15%", 
      padding: "1rem", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      gap: "1rem", 
      cursor: "pointer", 
      transition: "all 200ms ease-in-out", 
      borderBottom: "1px solid #2C2C2C" 
    }}>
      <div style={{ 
        width: "28px", 
        height: "28px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: "50%", 
        transition: "all 200ms ease-in-out", 
        backgroundColor: "rgb(62, 62, 62)" 
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.332 2H2.66536C1.93203 2 1.33203 2.6 1.33203 3.33333V10.6667C1.33203 11.4 1.93203 12 2.66536 12H6.66536L5.33203 13.3333V14H10.6654V13.3333L9.33203 12H13.332C14.0654 12 14.6654 11.4 14.6654 10.6667V3.33333C14.6654 2.6 14.0654 2 13.332 2Z" fill="#979797" fill-opacity="0.95"></path>
          <path d="M7.01892 12.3536L7.87247 11.5H6.66536H2.66536C2.20817 11.5 1.83203 11.1239 1.83203 10.6667V3.33333C1.83203 2.87614 2.20817 2.5 2.66536 2.5H13.332C13.7892 2.5 14.1654 2.87614 14.1654 3.33333V10.6667C14.1654 11.1239 13.7892 11.5 13.332 11.5H9.33203H8.12492L8.97848 12.3536L10.1249 13.5H5.87247L7.01892 12.3536Z" stroke="#979797" stroke-opacity="0.95"></path>
        </svg>
      </div>
      <p style={{ textAlign: "center", lineHeight: "20px", overflow: "hidden", whiteSpace: "nowrap", color: "white", fontWeight: "medium", fontFamily: 'Arial' }}>Personalized UI</p>
      <div class="container">
  <div class="content">
    <div class = "min">
    <p class="heading">Personalized Quizzes</p>
    <p class="description">Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.</p>
    <p class="description">By tailoring quiz questions to user preferences, interests, and goals, we can gather valuable insights into their needs and preferences.</p>
    </div>
    <div class="container1" >
   <img src="https://www.questlabs.ai/assets/useCaseoffers-ONbw6XxL.svg"/>
</div>
  </div>
</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default HeroSection3