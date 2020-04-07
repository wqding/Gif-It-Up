import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Search from './components/Search';
import Saved from './components/Saved'
import { SearchResultsProvider } from './contexts/SearchResultsContext'
import "./App.css"

function App() {
  return (
    <SearchResultsProvider>
      <Router>
        <Route exact path={"/"} component={Search}/>
        <Route exact path={"/saved"} component={Saved}/>
      </Router>
    </SearchResultsProvider>
  );
}

export default App;
