import React from 'react';
import '../styles/stories.scss';
import Story from './Story';

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
