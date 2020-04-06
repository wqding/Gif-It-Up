import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Search from './components/Search';
import Saved from './components/Saved'

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={Search}/>
      <Route exact path={"/saved"} component={Saved}/>
    </Router>
  );
}

export default App;
