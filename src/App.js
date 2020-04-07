import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SearchGifs from './components/SearchGifs';
import SavedGifs from './components/SavedGifs'
import {SearchResultsProvider} from './contexts/SearchResultsContext'
import {SavedGifsProvider} from './contexts/SavedGifsContext'
import "./App.css"

function App() {
  return (
    <SearchResultsProvider>
      <SavedGifsProvider>
        <Router>
          <Route exact path={"/"} component={SearchGifs}/>
          <Route exact path={"/saved"} component={SavedGifs}/>
        </Router>
      </SavedGifsProvider>
    </SearchResultsProvider>
  );
}

export default App;
