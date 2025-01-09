import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PortalX</h3>
          <p>Next-generation interface solution for modern businesses.</p>
        </div>
        <div className="footer-section">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#documentation">Documentation</a>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <a href="#contact">Contact</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PortalX. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 