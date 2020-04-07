import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Paper, InputBase, Button } from '@material-ui/core';
import {SearchResultsContext} from '../contexts/SearchResultsContext'
import {SavedGifsContext} from '../contexts/SavedGifsContext'
import  { Link } from 'react-router-dom'

import axios from 'axios';


const SEARCH_NAME_PARAM ='q';
const TRANSLATE_NAME_PARAM = 's';

const SearchBar = () => {
    const [searchText, setSearchText] = useState();
    const [results, setResults] = useContext(SearchResultsContext);
    const [savedGifs, setSavedGifs] = useContext(SavedGifsContext);

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

    const isSaved = () => {
        
    }

    const storeSearchResults = (searchResults) => {
        let condensedResults = searchResults.data.map(gif => {
            return {
                id: gif.id,
                saved: (gif.id in savedGifs)?true:false,
                title: gif.title,
                username: gif.username,
                src: gif.images.downsized.url
            }
        });
        setResults(condensedResults);
    }

    const redirectToSavedGifs = () => {
        return 
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
            <Button onClick={redirectToSavedGifs} color="primary"><Link to='/saved'> View Saved</Link></Button>
        </Paper>
    )
}

export default SearchBar;