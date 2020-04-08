import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Paper, InputBase, Button } from '@material-ui/core';
import {SearchResultsContext} from '../contexts/SearchResultsContext'
import  { Link } from 'react-router-dom'

import axios from 'axios';


const SEARCH_NAME_PARAM ='q';
const TRANSLATE_NAME_PARAM = 's';

const SearchBar = () => {
    const [searchText, setSearchText] = useState();
    const [results, setResults] = useContext(SearchResultsContext);

    const searchGifs = () =>{
        let url = `https://knowhow-react-challenge.prod.with-datafire.io/gif/search?${SEARCH_NAME_PARAM}=${searchText}`;
        axios.get(url)
        .then(res => {
            storeSearchResults(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    }

    const storeSearchResults = (searchResults) => {
        let condensedResults = searchResults.data.map(gif => {
            return {
                id: gif.id,
                saved: false,
                title: gif.title,
                username: gif.username,
                src: gif.images.downsized.url
            }
        });
        setResults(condensedResults);
    }

    const showRandomGif = () => {
        
    }
    
    return(
        <Paper>
            <InputBase
                autoFocus
                className='search-input'
                placeholder="Search"
                onChange={(e) => {setSearchText(e.target.value)}}
            />
            <IconButton color="primary" aria-label="search" onClick={searchGifs}>
                <SearchIcon />
            </IconButton>
            <Link to='/saved'><Button color="primary">View Saved</Button></Link>
            <Button onClick={showRandomGif} color="primary">Random</Button>
        </Paper>
    )
}

export default SearchBar;