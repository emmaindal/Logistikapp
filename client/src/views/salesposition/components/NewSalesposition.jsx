import React from "react";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from "@material-ui/core";

const NewPositionPanel = ({ isOpen, toggleNewPositionAction, addSalesposition }) => {

    // finns nog ett bättre sätt än att använda denna variabel och skicka
    // till addSalespositionAction, men vet inget atm. Kanske om man blandar in ett formulär?
    let newPositionName 
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={toggleNewPositionAction}
                maxWidth='xs'
                fullWidth>
                <DialogTitle>
                    Lägg till ny position
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Namn"
                        type="text"
                        fullWidth
                        onChange={(event) => {newPositionName = event.target.value;}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleNewPositionAction}>
                        AVBRYT
                    </Button>
                    <Button onClick={() => {addSalesposition('http://localhost:3001/salespositions', newPositionName)}}>
                        SKAPA
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default NewPositionPanel;