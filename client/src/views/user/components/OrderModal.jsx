import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Modal,
  Typography,
  Card,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core'

class OrderModal extends Component {
  state = {
    activeProductCategory: ''
  }

  handleChangeProductCategory = e => {
    this.setState({ activeProductCategory: e.target.value })
  }
  render() {
    const { isOpen, toggleModal, category, salesposition } = this.props
    const { activeProductCategory } = this.state
    let productsOfCategory = salesposition.products[`${category}`]

    return (
      <StyledModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={toggleModal}
      >
        <ModalContent>
          <StyledTypography variant="display1" id="simple-modal-description">
            Beställ {category.toLowerCase()}
          </StyledTypography>
          <StyledFormControl fullWidth>
            <InputLabel htmlFor="main-prod-cat">
              Välj produktkategori
            </InputLabel>
            <Select
              value={activeProductCategory}
              onChange={this.handleChangeProductCategory}
            >
              {productsOfCategory &&
                Object.keys(productsOfCategory).map(product => {
                  return (
                    <MenuItem key={product} value={product}>
                      {product}
                    </MenuItem>
                  )
                })}
            </Select>
          </StyledFormControl>
          {activeProductCategory ? (
            <StyledFormControl fullWidth>
              <InputLabel htmlFor="main-prod-cat">Välj produkt</InputLabel>
              <Select
                value={this.state.activeProductCategory}
                onChange={this.handleChangeProductCategory}
              >
                {productsOfCategory &&
                  Object.keys(productsOfCategory).filter(product => {
                    if (product === activeProductCategory) {
                      console.log(product)
                    }
                  })}
              </Select>
            </StyledFormControl>
          ) : (
            <p />
          )}
        </ModalContent>
      </StyledModal>
    )
  }
}

export default OrderModal

const StyledFormControl = styled(FormControl)`
  &&& {
    margin: 2% 0 2% 0;
    @media (max-width: 700px) {
      margin: 5% 0 5% 0;
    }
  }
`
const StyledTypography = styled(Typography)`
  &&& {
    margin-bottom: 2%;
    letter-spacing: 2px;
    font-weight: 200;
  }
`

const StyledModal = styled(Modal)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  min-width: 200px;
  padding: 3%;
  border: none;
  background: white;
  @media (max-width: 700px) {
    width: 90%;
    padding: 5%;
  }
`
