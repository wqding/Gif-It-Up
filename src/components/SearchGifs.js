import React, { useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import {Jumbotron} from 'react-bootstrap'
import SearchBar from './SearchBar'
import TileList from './TileList';
import GifDialog from './GifDialog'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import {SearchResultsContext} from '../contexts/SearchResultsContext'

const SearchGifs = () => {
    const [results, setResults] = useContext(SearchResultsContext);
    const [openLoading, setOpenLoading] = useState(false);

    return(
        <div>
            <Jumbotron fluid>
                <Container>
                    <SearchBar setOpenLoading={setOpenLoading}/>
                </Container>
            </Jumbotron>
            <TileList gifs={results}/>
            <GifDialog/>
            <Backdrop open={openLoading} style={{zIndex: 2}}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default SearchGifs;