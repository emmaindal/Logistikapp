import React from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Input,
    FormControl
} from "@material-ui/core";

const SettingsPanel = ({ isOpen,
    toggleSettingsAction,
    selectedPosition,
    updateSalespositionAction,
    removeSalespositionAction, }) => {

    // finns nog ett bättre sätt än att använda denna variabel och skicka
    // till updateSalespositionAction, men vet inget atm. Kanske om man blandar in ett formulär?
        let testList = ['one']
    let newName
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={toggleSettingsAction}
                maxWidth="xs"
                fullWidth>
                <DialogTitle>
                    Inställningar - {selectedPosition.name}
                </DialogTitle>
                <DialogContent>
                    <form>
                        <FormControl>
                            <DialogContentText>
                                Ändra inställningar för positionen.
                </DialogContentText>
                            <InputLabel htmlFor="age-simple">Age</InputLabel>
                            <Select
                                value
                                onChange
                                input={<Input id="age-simple" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {testList.map(item => {return (<MenuItem value={item}> {item} </MenuItem>)})}
                            </Select>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Nytt namn"
                                type="text"
                                fullWidth
                                defaultValue={selectedPosition.name}
                                onChange={(event) => { newName = event.target.value; }}
                            />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => removeSalespositionAction(selectedPosition)}>
                        TA BORT
                    </Button>
                    <Button onClick={toggleSettingsAction}>
                        AVBRYT
                    </Button>
                    <Button onClick={() => { updateSalespositionAction(selectedPosition, newName) }}>
                        SPARA
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SettingsPanel;