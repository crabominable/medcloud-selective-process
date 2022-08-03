import React from 'react';

import Form from './components/Form';
import medcloud from '../../images/medcloud.svg';

import './index.css';

function Header() {
  return (
    <div className="header-main-container">
      <img className="header-image-logo-content" src={medcloud} alt="Medcloud logo" />
      <h3 className="header-title-content">Dashboard de pacientes Medcloud</h3>
      <Form />
    </div>
  );
}

export default Header;
