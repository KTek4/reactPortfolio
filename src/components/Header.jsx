import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>Kalana Rantunga</h1>

        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 10px' }}>
              <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a href="#portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>Portfolio</a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a href="#resume" style={{ textDecoration: 'none', color: 'inherit' }}>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;