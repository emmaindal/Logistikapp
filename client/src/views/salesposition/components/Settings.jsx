import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField} from "@material-ui/core";

const SettingsPanel = ({isOpen, toggleSettingsAction}) => {
    
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
              
            />
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleSettingsAction}>
                        Cancel
                    </Button>
                    <Button>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SettingsPanel;

{/* <Dialog
    open={this.state.open}
    onClose={this.handleClose}
    aria-labelledby="form-dialog-title"
>
    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
    <DialogContent>
        <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send
            updates occasionally.
  </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
        />
    </DialogContent>
    <DialogActions>
        <Button onClick={this.handleClose} color="primary">
            Cancel
  </Button>
        <Button onClick={this.handleClose} color="primary">
            Subscribe
  </Button>
    </DialogActions>
</Dialog> */}