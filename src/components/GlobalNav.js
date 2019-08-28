import React from 'react';

// Styles
import '../styles/globalnav.scss';

function GlobalNav() {
  return (
    <div className="globalNav">
      <div className="container">
        <nav>
          <div className="logoBlock">
            <h1 className="siteName">Val Memoirs</h1>
          </div>
          <div className="userInfoBlock">
            <p className="username">username</p>
            <div className="userAvatar"></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default GlobalNav;
