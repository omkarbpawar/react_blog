import React from 'react';
import { BrowserRouter as Router }
    from 'react-router-dom';

import Routing from './Routes';
import Topbar from './components/topbar/Topbar'

const App = () => {
  return (
    <div>
        <Topbar/>
        <article>
        <Router>
            <Routing />
        </Router>
        </article>
    </div>
  );
};

export default App