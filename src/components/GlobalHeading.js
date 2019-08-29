import React from 'react';
import '../styles/globalheading.scss';

function GlobalHeading() {
  return (
    <div className="globalHeading">
      <div className="container">
        <div className="globalHeadingContent">
          <h1 className="headline">Awesome Valentine Memories</h1>
          <p className="headlineInfo">
            Create, share, and view awesome memories from last Valentine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GlobalHeading;
