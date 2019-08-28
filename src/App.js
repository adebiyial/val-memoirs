import React from 'react';

// Components
import GlobalNav from './components/GlobalNav';
import GlobalHeading from './components/GlobalHeading';
import Stories from './components/Stories';

// Styles
import './styles/normalize.scss';
import './styles/index.scss';
import './styles/common.scss';
import './styles/mq.scss'; // Media Query

function App() {
  return (
    <div className="App">
      <GlobalNav />
      <GlobalHeading />
      <Stories />
    </div>
  );
}

export default App;
