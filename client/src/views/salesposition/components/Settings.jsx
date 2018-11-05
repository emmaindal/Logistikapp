import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from "@material-ui/core";

const SettingsPanel = ({ isOpen, toggleSettingsAction, selectedPosition, updateSalesposition }) => {

    let newName

    return (
        <div>
            <Dialog
                open={isOpen}>
                <DialogTitle>
                    Inställningar - {}
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
                        defaultValue={selectedPosition}
                        onChange={(event) => {newName = event.target.value;}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleSettingsAction}>
                        Cancel
                    </Button>
                    <Button onClick={() => {updateSalesposition(selectedPosition, newName)}}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SettingsPanel;