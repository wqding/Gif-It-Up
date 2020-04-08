import React, {useContext} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import {GifDialogContext} from '../contexts/GifDialogContext'


const GifDialog = (props) => {
    const [showGifDialog, setShowGifDialog] = useContext(GifDialogContext);
    const [gifShown, setGifShown] = useContext(GifDialogContext);

    return(
        // the dialog component seems to use a deprecated function (likely in the transition)which is why it gives an error in the console
        // I also tried to implement the same thing with React modal and I get the same error
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
                <Button onClick={()=>{setShowGifDialog(false)}} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default GifDialog;
