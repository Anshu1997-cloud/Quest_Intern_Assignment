import React from 'react';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#0D0D0D', color: 'white', padding: '30px' }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
        <img
          src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%20578'%3e%3cg%20id='Vector'%3e%3cpath%20d='M19.3503%200.666016V6.88824L13.128%2013.1105V6.88824H6.90582V10.9962C6.90582%2012.1642%207.85211%2013.1105%209.02008%2013.1105H13.128L6.90582%2019.3327C3.46933%2019.3327%200.683594%2016.5469%200.683594%2013.1105V0.666016H19.3503Z'%20fill='white'/%3e%3cpath%20d='M19.3503%2013.1105L13.128%2013.1105L13.128%2019.3327H19.3503V13.1105Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
          alt="Quest Labs logo"
          style={{ marginRight: '4px', alignSelf: 'center', width: '20px', height: '20px', cursor: 'pointer' }}
        />
       <p style={{ color: 'white', textAlign: 'center', fontFamily: 'gilroy', fontWeight: 'bold', fontSize: '25px', lineHeight: '24px' }}>Quest</p>
      </a>
      
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'space-between', fontSize:'19px' , fontFamily:'sans-serif', gap: '30px'}}>
        <p style={{ cursor: 'pointer' }}>Playbook</p>
        <p style={{ cursor: 'pointer' }}>Resources</p>
        <p style={{ cursor: 'pointer' }}>Blogs</p>
      </div>
      
      <div style={{ display: 'flex', gap: '16px' }}>
        <button style={{ color: 'white', fontWeight: 'bold' ,   border: '1px solid #8C43EC', lineHeight: '20px'}}>Get Started</button>
        <button style={{ color: 'white', fontWeight: 'bold' ,  background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843)) border-box border-box', border: '1px solid rgba(0, 0, 0, 0)'}}>Book Demo</button>
      </div>
    </div>
  );
};

export default Navbar;