import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SearchGifs from './components/SearchGifs';
import SavedGifs from './components/SavedGifs'
import {SearchResultsProvider} from './contexts/SearchResultsContext'
import {SavedGifsProvider} from './contexts/SavedGifsContext'
import {GifDialogProvider} from './contexts/GifDialogContext'
import "./App.css"

function App() {
  return (
    //Not that familiar with react contexts, is there a cleaner way to write this??
    <GifDialogProvider>
      <SearchResultsProvider>
        <SavedGifsProvider>

          <Router>
            <Route exact path={"/"} component={SearchGifs}/>
            <Route exact path={"/saved"} component={SavedGifs}/>
          </Router>

        </SavedGifsProvider>
      </SearchResultsProvider>
    </GifDialogProvider>
    
  );
}

export default App;
