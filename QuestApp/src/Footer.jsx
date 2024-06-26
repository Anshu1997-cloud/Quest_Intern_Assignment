import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src="/assets/brandLogo-_2OygUFf.png" alt="Quest Labs Logo" />
        <div className="company-name">Quest Labs INC</div>
      </div>
      <div className="grid-container">
        <div className="text-sm">
          <p className="section-header">Resources</p>
          <div className="section-links">
            <a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href="https://questlabs.substack.com/" target="_blank" rel="noopener noreferrer">Newsletter</a>
            <a href="/playbook" target="_blank" rel="noopener noreferrer">Playbook</a>
            <a href="https://docs.questlabs.ai/getting-started/welcome-to-quest" target="_blank" rel="noopener noreferrer">Docs</a>
          </div>
        </div>
        <div className="text-sm">
          <p className="section-header">Support</p>
          <div className="section-links">
            <a href="mailto:deb@questapp.xyz">Contact</a>
            <a href="https://tinyurl.com/questfoundersclub" target="_blank" rel="noopener noreferrer">Join Quest Club</a>
            <a href="https://www.questlabs.ai/sales-partner" target="_blank" rel="noopener noreferrer">Sales Partner</a>
          </div>
        </div>
        <div className="text-sm">
          <p className="section-header">Legal</p>
          <div className="section-links">
            <a href="https://fantasy-straw-747.notion.site/Privacy-Policy-35181181657242afbdd2a9af69e37dfe" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://fantasy-straw-747.notion.site/Terms-and-Conditions-8c70d24a63a6419781475ca8325f2c60" target="_blank" rel="noopener noreferrer">Terms of Use</a>
            <a href="https://fantasy-straw-747.notion.site/Cookie-Policy-403ac2547a7543a8812f64387d69798f" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;