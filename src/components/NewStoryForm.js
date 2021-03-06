import React from 'react';
import Modal from './Modal';
import { useStoryDispatch } from '../contexts/StoryContext';
import '../styles/newstoryform.scss';
import {getPhoto} from '../client/calls';

function NewStoryForm({ isModalActive, showModal, hideModal }) {
  const [story, setStory] = React.useState({
    firstname: '',
    lastname: '',
    username: '',
    gender: '',
    headline: '',
    description: '',
    noOfLikes: 0,
    image: '',
  });
  const dispatch = useStoryDispatch();

  function handleChange(e) {
    setStory({ ...story, [e.target.name]: e.target.value });
  }

  async function addNewStory() {
    const photo = await getPhoto();
    console.log(photo[0])
    dispatch({ type: 'addStory', payload: { ...story, image: photo[0]} });
    hideModal();
  }

  return (
    isModalActive && (
      <Modal isModalActive={isModalActive} hideModal={hideModal}>
        <form className="newStoryForm">
          <fieldset>
            <legend>Create your awesome valentine story.</legend>
            <div className="formRow">
              <label className="formField">
                <label className="formFieldLabel">First name</label>
                <div className="inputBlock">
                  <input
                    className="formFieldInput"
                    type="text"
                    label="First name"
                    name="firstname"
                    onChange={handleChange}
                    placeholder="john"
                  />
                </div>
              </label>
              <label className="formField">
                <label className="formFieldLabel">Last name</label>
                <div className="inputBlock">
                  <input
                    className="formFieldInput"
                    type="text"
                    label="Last name"
                    name="lastname"
                    onChange={handleChange}
                    placeholder="doe"
                  />
                </div>
              </label>
            </div>
            <div className="formRow">
              <label className="formField">
                <label className="formFieldLabel">Username</label>
                <div className="inputBlock">
                  <input
                    className="formFieldInput"
                    type="text"
                    label="Username"
                    name="username"
                    onChange={handleChange}
                    placeholder="john_doe"
                  />
                </div>
              </label>
              <label className="formField">
                <label className="formFieldLabel">Gender</label>
                <div className="inputBlock">
                  <select
                    className="formFieldInput"
                    name="gender"
                    onChange={handleChange}
                  >
                    <option value="">Select a gender</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                  </select>
                </div>
              </label>
            </div>
          </fieldset>
          <fieldset>
            <label className="formField">
              <label className="formFieldLabel">
                Headline (Give your story a title)
              </label>
              <div className="inputBlock">
                <input
                  className="formFieldInput"
                  type="text"
                  label="Headline"
                  name="headline"
                  onChange={handleChange}
                  placeholder="from russia with love"
                />
              </div>
            </label>
            <label className="formField">
              <label className="formFieldLabel">
                Story (Tell your story,{' '}
                <span role="img" aria-label="love-emoji">
                  💓
                </span>
                )
              </label>
              <div className="inputBlock">
                <textarea
                  className="formFieldInput"
                  id=""
                  name="description"
                  rows="5"
                  cols="33"
                  placeholder="It's not much of a life filled event"
                  onChange={handleChange}
                />
              </div>
            </label>
          </fieldset>
          <div className="formActionsBlock">
            <button type="button" onClick={hideModal}>
              Cancel
            </button>
            <button type="button" onClick={addNewStory}>
              Save story
            </button>
          </div>
        </form>
      </Modal>
    )
  );
}

export default NewStoryForm;
