import React from 'react';
import Story from './Story';

import '../styles/stories.scss';


function Stories() {
  return (
    <div className="stories">
      <div className="container">
        <div className="storiesContent">
          <header className="storiesHeader">
            <h1 className="headline">Stories</h1>
          </header>
          <section className="storiesGallery">
            <ul className="listOfStories">
              <Story />
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Stories;
