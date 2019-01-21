import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'
import {
  Modal,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Tooltip
} from '@material-ui/core'
import Check from '@material-ui/icons/CheckCircle'

import Slider from '@material-ui/lab/Slider'

import {
  updateActiveProductCategory,
  updateActiveProduct,
  updateActiveProductVolume
} from '../redux/actions'
import { submitOrder } from '../redux/thunks'

class OrderModal extends Component {
  state = {
    orderConfirmed: false
  }

  handleChangeProductCategory = e => {
    this.props.updateActiveProductCategory(e.target.value)
  }
  handleChangeProduct = e => {
    this.props.updateActiveProduct(e.target.value)
  }
  handleChangeVolume = (e, value) => {
    this.props.updateActiveProductVolume(value)
  }

  handleSubmitOrder = () => {
    const { activeProduct, activeProductVolume, salesposition } = this.props
    let order = {
      salesposition: salesposition.name,
      order: {
        [activeProduct]: activeProductVolume
      },
      completed: false,
      time: new Date().toLocaleTimeString()
    }
    this.props.submitOrder('http://localhost:3001/orders', order)

    this.setState(prevState => ({
      orderConfirmed: !prevState.orderConfirmed
    }))
  }

  handleNewOrder = () => {
    this.setState(prevState => ({
      orderConfirmed: !prevState.orderConfirmed
    }))
  }

  render() {
    const {
      isOpen,
      toggleModal,
      category,
      salesposition,
      activeProductCategory,
      activeProduct,
      activeProductVolume
    } = this.props
    let productsOfCategory = salesposition.products[`${category}`]
    return (
      <StyledModal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={toggleModal}
      >
        <ModalContent>
          {this.state.orderConfirmed && (
            <ConfirmContainer>
              <p>Din order är nu skickad</p>
              <StyledCheck />
              <StyledButton onClick={this.handleNewOrder}>
                Skapa ny order
              </StyledButton>
            </ConfirmContainer>
          )}
          {!this.state.orderConfirmed && (
            <ContentContainer>
              <StyledTypography
                variant="display1"
                id="simple-modal-description"
              >
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
                    value={activeProduct}
                    onChange={this.handleChangeProduct}
                  >
                    {productsOfCategory &&
                      Object.keys(
                        productsOfCategory[activeProductCategory]
                      ).map(brand => {
                        return (
                          <MenuItem key={brand} value={brand}>
                            {brand}
                          </MenuItem>
                        )
                      })}
                  </Select>
                </StyledFormControl>
              ) : (
                <p />
              )}

              {activeProduct ? (
                <SliderContainer>
                  <Tooltip title="Antal lådor av produkt" placement="top-start">
                    <p>
                      Ange Antal:{' '}
                      {activeProductVolume ? activeProductVolume : ' '}{' '}
                    </p>
                  </Tooltip>
                  <Slider
                    min={0}
                    max={20}
                    step={1}
                    value={activeProductVolume}
                    aria-labelledby="label"
                    onChange={this.handleChangeVolume}
                  />
                </SliderContainer>
              ) : (
                <p />
              )}
              {activeProductVolume ? (
                <StyledButton onClick={this.handleSubmitOrder}>
                  Skicka order
                </StyledButton>
              ) : (
                <p />
              )}
            </ContentContainer>
          )}
        </ModalContent>
      </StyledModal>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.user.category,
    salesposition: state.user.salesposition,
    activeProductCategory: state.user.activeProductCategory,
    activeProduct: state.user.activeProduct,
    activeProductVolume: state.user.activeProductVolume
  }
}

export default connect(
  mapStateToProps,
  {
    updateActiveProductCategory,
    updateActiveProduct,
    updateActiveProductVolume,
    submitOrder
  }
)(OrderModal)

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
  min-height: 300px;
  min-width: 200px;
  padding: 3%;
  border: none;
  background: white;
  @media (max-width: 700px) {
    width: 90%;
    padding: 5%;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SliderContainer = styled.div`
  margin-top: 3%;
  p {
    color: #000;
  }
`

const StyledButton = styled(Button)`
  &&& {
    margin-top: 20%;
    background-color: rgba(53, 99, 236, 0.87);
    color: white;
  }
`

const ConfirmContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const StyledCheck = styled(Check)`
  &&& {
    text-align: center;
    font-size: 105px;
    color: green;
  }
`
