import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#6D9075', color: 'white', padding: '20px', textAlign: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Adresse :</h5>
            <p>123 Rue Principale, Nantes</p>
          </div>
          <div className="col-md-6">
            <h5>Contact :</h5>
            <p>Service client : +33636363621</p>
            <p>Support : support@meubl&co.com</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <button className="btn btn-primary">S'inscrire</button>
          </div>
        </div>
        <hr />
        <span className="text-muted">© 2024 Meubl&Co. Tous droits réservés.</span>
      </div>
    </footer>
  );
};

export default Footer;