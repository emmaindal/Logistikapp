import React from "react";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from "@material-ui/core";

const SettingsPanel = ({ isOpen, toggleSettingsAction, selectedPosition, updateSalespositionAction }) => {

    // finns nog ett bättre sätt än att använda denna variabel och skicka
    // till updateSalespositionAction, men vet inget atm. Kanske om man blandar in ett formulär?

    let newName   
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={toggleSettingsAction}
                maxWidth="xs"
                fullWidth>
                <DialogTitle>
                    Inställningar - {selectedPosition}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ändra inställningar för positionen.
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nytt namn"
                        type="text"
                        fullWidth
                        defaultValue={selectedPosition}

                        onChange={(event) => {newName = event.target.value;}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleSettingsAction}>
                        AVBRYT
                    </Button>
                    <Button onClick={() => {updateSalespositionAction(selectedPosition, newName)}}>
                        SPARA
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SettingsPanel;