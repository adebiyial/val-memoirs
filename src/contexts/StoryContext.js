import React from 'react';
import STORIES from '../utils/_dummydata';

// Create new context
const StoryStateContext = React.createContext();
const StoryDispatchContext = React.createContext();

// Create custom reducer
function storyReducer(state, action) {
  switch (action.type) {
    case 'addStory': {
      return [...state, action.payload];
    }
    case 'incrementLikes': {
      const d = { ...action.payload, noOfLikes: action.payload.noOfLikes + 1 };
      const indexToOverride = state.findIndex(
        s => s.username === action.payload.username,
      );
      state[indexToOverride] = d;
      return [...state];
    }
    case 'replaceDummyStories': {
      return [...action.payload]
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Create provider
function StoryProvider({ children }) {
  const [state, dispatch] = React.useReducer(storyReducer, STORIES);

  return (
    <StoryStateContext.Provider value={state}>
      <StoryDispatchContext.Provider value={dispatch}>
        {children}
      </StoryDispatchContext.Provider>
    </StoryStateContext.Provider>
  );
}

// Create custom hooks
function useStoryState() {
  const context = React.useContext(StoryStateContext);

  if (context === undefined) {
    throw new Error('useStoryState must be used within a StoryProvider');
  }

  return context;
}

function useStoryDispatch() {
  const context = React.useContext(StoryDispatchContext);

  if (context === undefined) {
    throw new Error('useStoryDispatch must be used within a StoryProvider');
  }

  return context;
}

export { StoryProvider, useStoryState, useStoryDispatch };
