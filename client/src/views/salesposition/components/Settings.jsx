import React from "react";
import styled from "styled-components";


import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField,
    Select,
    MenuItem,
    Input,
    FormControl,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    InputLabel,
} from "@material-ui/core";

import { DeleteForever } from "@material-ui/icons"


const SettingsPanel = ({
    isOpen,
    selectedPosition,
    products,
    toggleSettingsAction,
    updateSalesposition,
    setMainProductAction,
    setSecondProductAction,
    selectedMainProduct,
    selectedSecondProduct,
    removeSalesposition,
    updateSalespositionProductAction,
    removeProductAction
}) => {


    const renderMainProducts = products.map(product => {
        return (
            Object.keys(product).map(name =>
                <MenuItem key={name} value={name}> {name}</MenuItem>
            )
        )
    });

    const renderSecondProducts = products.map(mainProduct => {
        if (!selectedMainProduct) {
            return ''
        }
        let mainProductDetails = mainProduct[selectedMainProduct]
        return (
            Object.keys(mainProductDetails).map(product =>
                <MenuItem key={product} value={product}> {product}</MenuItem>

            )
        )
    })

    // Borde kanske vara state
    let newName;

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
                    <DialogContentText>
                        Ändra inställningar för positionen.
                    </DialogContentText>
                    <form>
                        <FormControl fullWidth>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Nytt namn"
                                type="text"
                                defaultValue={selectedPosition.name}
                                onChange={(event) => { newName = event.target.value; }}
                            />
                        </FormControl>
                        
                        <FormControl fullWidth>
                            <InputLabel htmlFor="main-prod-cat">Produktkategori</InputLabel>
                            <Select
                                value={selectedMainProduct ? selectedMainProduct : ''}
                                onChange={(event) => setMainProductAction(event.target.value)}
                                input={<Input id="main-prod-cat" />}
                            >
                                {renderMainProducts}
                            </Select>
                        </FormControl>


                        {selectedMainProduct !== undefined && (

                            <FormControl fullWidth>
                                <InputLabel htmlFor="second-prod-cat">Produktnamn</InputLabel>
                                <Select
                                    value={selectedSecondProduct ? selectedSecondProduct : ''}
                                    onChange={(event) => { setSecondProductAction(event.target.value); }}
                                    input={<Input id="second-prod-cat" />}
                                >
                                    {renderSecondProducts}
                                </Select>

                            </FormControl>
                        )}

                        {selectedSecondProduct !== undefined && (
                            <FormControl fullWidth>
                                <Button onClick={() => { updateSalespositionProductAction(selectedMainProduct, selectedSecondProduct); }}>
                                    LÄGG TILL
                                </Button>
                            </FormControl>
                        )}
                        {selectedPosition.products && (
                            <FormControl fullWidth >
                                <List>
                                    {Object.keys(selectedPosition.products).map(product => {
                                        return (
                                            <StyledListItem key={product} divider >
                                                <ListItemText primary={product} />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="DeleteForever" id={product} onClick={(event) => {removeProductAction(event.target.id);}}>
                                                        <DeleteForever />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </StyledListItem>
                                        )
                                    })}
                                </List>
                            </FormControl>
                        )}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => removeSalesposition('http://localhost:3001/salespositions', selectedPosition)}>
                        TA BORT
                    </Button>
                    <Button onClick={toggleSettingsAction}>
                        AVBRYT
                    </Button>
                    <Button onClick={() => { updateSalesposition(selectedPosition, newName); toggleSettingsAction(); }}>
                        SPARA
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const StyledListItem = styled(ListItem)`
  background-color: #eee;
  margin: 10px 0px;
`;



export default SettingsPanel;