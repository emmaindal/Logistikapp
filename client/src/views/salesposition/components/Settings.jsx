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
    removeProductAction,
    setProductCategory,
    selectedProductCategory
}) => {


    const renderProdCat = () => {
        return (
        <FormControl fullWidth>
            <InputLabel htmlFor="main-prod-cat">Produktkategori</InputLabel>
            <Select
                value={selectedProductCategory ? selectedProductCategory : ""}
                onChange={(event) => setProductCategory(event.target.value)}
                input={<Input id="main-prod-cat" />}
            >
                {Object.keys(products).map(product => {
                    return (
                        <MenuItem key={product} value={product}> {product}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
        )
    }

    const renderMainCat = () => {
        return (
            <FormControl fullWidth>
            <InputLabel htmlFor="main-prod-cat">Överkategori</InputLabel>
            <Select
                value={selectedMainProduct ? selectedMainProduct : ''}
                onChange={(event) => setMainProductAction(event.target.value)}
                input={<Input id="main-prod-cat" />}
            >
                {Object.keys(products[selectedProductCategory]).map(product => {
                    return (
                        <MenuItem key={product} value={product}> {product}</MenuItem>
                    )
                })}

            </Select>
        </FormControl>
        )
    }

    const renderSecCat = () => {
        return (
            <FormControl fullWidth>
            <InputLabel htmlFor="second-prod-cat">Produktnamn</InputLabel>
            <Select
                value={selectedSecondProduct ? selectedSecondProduct : ''}
                onChange={(event) => { setSecondProductAction(event.target.value); }}
                input={<Input id="second-prod-cat" />}
            >
                {Object.keys(products[selectedProductCategory][selectedMainProduct]).map(product => {
                    return (<MenuItem key={product} value={product}> {product}</MenuItem>)
                })}
            </Select>

        </FormControl>
        )
    }

    const renderAddBtn = () => {
        return (
            <FormControl fullWidth>
                <Button onClick={() => { updateSalespositionProductAction(selectedProductCategory, selectedMainProduct, selectedSecondProduct); }}>
                    LÄGG TILL
                </Button>
            </FormControl>
        )
    }

    

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

                        {renderProdCat()}
                        
                        {selectedProductCategory ? renderMainCat() : ""}

                        {selectedMainProduct ? renderSecCat() : ""}

                        {selectedSecondProduct ? renderAddBtn() : "" }

                        {selectedPosition.products && (
                            <FormControl fullWidth >
                                <List>
                                    {Object.keys(selectedPosition.products).map(productCategory => {
                                        let renderProducts = Object.keys(selectedPosition.products[productCategory]).map(product => {
                                            return Object.keys(selectedPosition.products[productCategory][product]).map(productName => {
                                                return (
                                                    <StyledListItem key={productName} divider >
                                                        <ListItemText primary={productName} />
                                                        <ListItemSecondaryAction>
                                                            <IconButton aria-label="DeleteForever" id={productName} category={productCategory} product={product} onClick={(event) => { removeProductAction(event.target.attributes.category, event.target.attributes.product, event.target.id); }}>
                                                                <DeleteForever />
                                                            </IconButton>
                                                        </ListItemSecondaryAction>
                                                    </StyledListItem>
                                                )
                                            })
                                        })

                                        return (
                                            <div key={productCategory}>
                                                <ListItem key={productCategory} divider >
                                                    <ListItemText primary={productCategory} />
                                                </ListItem>
                                                <div>{renderProducts}</div>
                                            </div>
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