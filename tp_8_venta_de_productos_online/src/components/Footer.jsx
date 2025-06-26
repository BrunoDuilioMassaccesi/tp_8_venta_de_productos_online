import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
