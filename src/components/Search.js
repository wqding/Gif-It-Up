import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import {Jumbotron} from 'react-bootstrap'
import SearchBar from './SearchBar'
const Search = () => {
    return(
        <Jumbotron fluid>
            <Container>
                <SearchBar/>
            </Container>
        </Jumbotron>
    )
}

export default Search;