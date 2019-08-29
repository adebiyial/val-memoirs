import React from 'react';
import { StoryProvider } from './StoryContext';

function AppProviders({ children }) {
  return <StoryProvider>{children}</StoryProvider>;
}

export default AppProviders;
