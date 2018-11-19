import React from "react";

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
    updateSalespositionAction,
    removeSalespositionAction,
    setMainProductAction,
    selectedMainProduct,
    selectedSecondProduct
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
            return
        }
        let mainProductDetails = mainProduct[selectedMainProduct]
        return (
            Object.keys(mainProductDetails).map(product =>
                <MenuItem key={product} value={product}> {product}</MenuItem>

            )
        )
    })
    // finns nog ett bättre sätt än att använda denna variabel och skicka
    // till updateSalespositionAction, men vet inget atm. Kanske om man blandar in ett formulär?

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
                                value={selectedMainProduct}
                                onChange={(event) => setMainProductAction(event.target.value, null)}
                                input={<Input id="main-prod-cat" />}
                            >
                                {renderMainProducts}
                            </Select>
                        </FormControl>


                        {selectedMainProduct !== undefined && (
                            
                            <FormControl fullWidth>
                            <InputLabel htmlFor="second-prod-cat">Produktnamn</InputLabel>
                                <Select
                                    // TODO; update a state to rerender select. otherwise it wont show which you selected
                                    value={selectedSecondProduct}
                                    onChange={(event) => {setMainProductAction(null, event.target.value); }}
                                    input={<Input id="second-prod-cat" />}
                                >
                                    {renderSecondProducts}
                                </Select>
                            </FormControl>
                        )}

                        {selectedPosition.products && (
                            <FormControl fullWidth>
                                <List>
                                    {Object.keys(selectedPosition.products).map(product => {
                                        return (
                                            <ListItem key={product} >
                                                <ListItemText primary={product} />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="DeleteForever">
                                                        <DeleteForever />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </FormControl>
                        )}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => removeSalespositionAction(selectedPosition)}>
                        TA BORT
                    </Button>
                    <Button onClick={toggleSettingsAction}>
                        AVBRYT
                    </Button>
                    <Button onClick={() => { updateSalespositionAction(selectedPosition, newName, selectedMainProduct, selectedSecondProduct, products); }}>
                        SPARA
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SettingsPanel;