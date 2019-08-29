import React from 'react';
import { useStoryState, useStoryDispatch } from '../contexts/StoryContext';
import {
  isCharacterLimitExceeded,
  truncateCharacter,
  uuid,
} from '../utils/fx';
import { getPhotos } from '../client/calls';

function Story() {
  const stories = useStoryState();
  const dispatch = useStoryDispatch();

  React.useEffect(() => {
    async function normalizeStories() {
      const photos = await getPhotos();

      // Replace images from dummy with actual unsplash photos
      const storiesWithUnsplashImages = stories.map((story, index) => {
        story.image = photos[index];
        return story;
      });

      // Replace global stories
      dispatch({
        type: 'replaceDummyStories',
        payload: storiesWithUnsplashImages,
      });
    }

    normalizeStories();
  }, []);

  function incrementLikes(username, index) {
    dispatch({
      type: 'incrementLikes',
      payload: stories.find(story => story.username === username),
    });
  }


  return (
    <>
      {stories.map(
        ({ headline, image, username, noOfLikes, description }, index) => (
          <li className="story" key={uuid()}>
            <div className="storyContent">
              <h3 className="storyHeadline">{headline}</h3>
              <div>
                <div className="storyImgBlock">
                  <img src={image} alt={headline} className="storyImg" />
                </div>
                <div className="storyInfoBlock">
                  <header className="storyHeader">
                    <span className="username">{username}</span>
                    <div className="storyCtaBlock">
                      <div className="likeButtonBlock">
                        <button
                          type="submit"
                          className="likeButton"
                          onClick={() => incrementLikes(username, index)}
                        >
                          <svg viewBox="0 0 24 24" className="likeIcon">
                            <g>
                              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                            </g>
                          </svg>
                          <span className="noOfLikes">{noOfLikes}</span>
                        </button>
                      </div>
                    </div>
                  </header>
                  <div className="storyDescriptionBlock">
                    <span className="storyDescription">
                      {(isCharacterLimitExceeded(description, 100) &&
                        truncateCharacter(description, 0, 100)) ||
                        description}
                    </span>
                    {isCharacterLimitExceeded(description, 100) && (
                      <>
                        <span>...</span>
                        <button className="readMoreBtn">read more</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ),
      )}
    </>
  );
}

export default Story;
