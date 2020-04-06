import React, { createContext, useState } from "react";

const SearchResultsContext = createContext({});

const SearchResultsContextProvider = (props) => {
    const [results, setResults] = useState();
    return(
        <SearchResultsContext.Provider value={[results, setResults]}>
            {props.children}
        </SearchResultsContext.Provider>
    );
}

export {SearchResultsContext, SearchResultsContextProvider};