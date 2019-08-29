import React from 'react';

import '../styles/newstory.scss';
import NewStoryForm from './NewStoryForm';

function NewStory() {
  const [isModalActive, setIsModalActive] = React.useState(false);

  function showModal() {
    setIsModalActive(true);
    document.body.classList.add('fixed-body');
  }

  function hideModal() {
    setIsModalActive(false);
    document.body.classList.remove('fixed-body');
  }

  return (
    <div className="newStoryBlock">
      <NewStoryForm
        isModalActive={isModalActive}
        showModal={showModal}
        hideModal={hideModal}
      />
      <div className="newStoryCTABlock">
        <button className="newStoryBtn floatingBtn" onClick={showModal}>
          +
        </button>
      </div>
    </div>
  );
}

export default NewStory;
