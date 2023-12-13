import React from 'react';
import './Header.css';

function Header() {
  return (
      <div className='container'>
      <div className='logo'>GitProjeto</div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Descrição</a></li>
        <li><a href="">Contato</a></li>
      </ul>
    </div>
  );
}
export default Header