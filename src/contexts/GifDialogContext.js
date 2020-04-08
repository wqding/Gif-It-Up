import React, { createContext, useState } from "react";

const GifDialogContext = createContext();

const GifDialogProvider = (props) => {
    const [showGifDialog, setShowGifDialog] = useState(false);
    const [gifShown, setGifShown] = useState({});
    return(
        <GifDialogContext.Provider value={[gifShown, setGifShown],[showGifDialog, setShowGifDialog]}>
            {props.children}
        </GifDialogContext.Provider>
    );
}

export {GifDialogContext, GifDialogProvider};