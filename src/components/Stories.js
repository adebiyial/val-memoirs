import React from 'react';

import '../styles/stories.scss';

// image - dummy
import imgBlob from '../blob.png';

function Stories() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="stories">
      <div className="container">
        <div className="storiesContent">
          <header className="storiesHeader">
            <h1 className="headline">Stories</h1>
          </header>
          <section className="storiesGallery">
            <ul className="listOfStories">
              {arr.map((nonsense, index) => (
                <li className="story" key={index}>
                  <div className="storyContent">
                    <h3 className="storyTitle">
                      Summitech Frontend Developer Test
                    </h3>
                    <div>
                      <img src={imgBlob} alt="blob" className="storyImg" />
                      <div className="storyInfoBlock">
                        <header className="storyHeader">
                          <span>adebiyial</span>
                          <div className="storyCtaBlock">
                            <div className="likeButtonBlock">
                              <button type="submit" className="likeButton">
                                +
                              </button>
                            </div>
                            <span className="noOfLikes">300</span>
                          </div>
                        </header>
                        <div className="story">
                          <p>
                            A friendly community, books, webinars, conferences
                            and fancy cats. Starting from $3 a month (or yearly
                            payments). You can cancel any time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Stories;
