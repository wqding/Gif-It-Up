import React, {useContext} from 'react';
import {SavedGifsContext} from '../contexts/SavedGifsContext'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

import {GifDialogContext} from '../contexts/GifDialogContext'


const GifDialog = (props) => {
    const [showGifDialog, setShowGifDialog] = useContext(GifDialogContext);
    const [gifShown, setGifShown] = useContext(GifDialogContext);

    return(
        <Dialog open={showGifDialog}>
            <DialogContent>
                <DialogContentText>
                    <p>
                        Title: {gifShown.title}
                    </p>
                    <p>
                        Username: {gifShown.username}
                    </p>
                </DialogContentText>
                
                <img src={gifShown.src} alt="" />
            </DialogContent>
            <DialogActions>
                <Button color="primary">Save</Button>
                <Button onClick={()=>{setShowGifDialog(false)}} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default GifDialog;
