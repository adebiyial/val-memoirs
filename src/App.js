import React from 'react';
import GlobalHeading from './components/GlobalHeading';
import GlobalNav from './components/GlobalNav';
import NewStory from './components/NewStory';
import Stories from './components/Stories';
import AppProviders from './contexts/index';
import './styles/common.scss';
import './styles/index.scss';
import './styles/mq.scss';
import './styles/normalize.scss';

function App() {
  return (
    <div className="App">
      <AppProviders>
        <GlobalNav />
        <GlobalHeading />
        <Stories />
        <NewStory />
      </AppProviders>
    </div>
  );
}

export default App;
