import React, { useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import {Jumbotron} from 'react-bootstrap'
import SearchBar from './SearchBar'
import TileList from './TileList';
import GifDialog from './GifDialog'

import {SearchResultsContext} from '../contexts/SearchResultsContext'


const SearchGifs = () => {
    const [results, setResults] = useContext(SearchResultsContext);

    return(
        <div>
            <Jumbotron fluid>
                <Container>
                    <SearchBar/>
                </Container>
            </Jumbotron>
            <TileList gifs={results}/>
            <GifDialog/>
        </div>
    )
}

export default SearchGifs;