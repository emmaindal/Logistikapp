import React from 'react'
import styled from 'styled-components'

import MenuCard from './components/MenuCard'
import OrderModal from './components/OrderModal'
import { MenuItem, Select, FormControl, InputLabel } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const UserView = ({
  activeSalesposition,
  salespositions,
  isOpen,
  category,
  categories,
  handleClickCategory,
  toggleModal,
  handleChange
}) => {
  let categoryNames = []
  Object.values(categories).forEach(function(value) {
    if (value.name) {
      categoryNames.push(value.name)
    }
  })

  return (
    <Container>
      <CardContainer>
        <Heading variant="title">Välj en säljposition</Heading>
        <FormControl style={{ width: '100%' }}>
          <InputLabel htmlFor="age-simple">Sales Positions</InputLabel>
          <Select value={activeSalesposition} onChange={handleChange}>
            {Object.values(salespositions).map(value => {
              if (value.name) {
                return (
                  <MenuItem key={value.name} value={value.name}>
                    {value.name}
                  </MenuItem>
                )
              }
            })}
          </Select>
        </FormControl>
        {activeSalesposition && (
          <Categories>
            <Heading variant="title">Välj en kategori</Heading>
            <Grid container s={6} m={6} l={6} spacing={16}>
              {Object.values(categories).map(value => {
                if (value.name) {
                  return (
                    <MenuCard
                      handleClickCategory={() =>
                        handleClickCategory(value.name)
                      }
                      key={value.name}
                      item={value.name}
                      cardIcon={`../../icons/${value.name.toLowerCase()}.svg`}
                    />
                  )
                }
              })}
            </Grid>
          </Categories>
        )}
      </CardContainer>
      <OrderModal
        category={category}
        toggleModal={toggleModal}
        isOpen={isOpen}
      />
    </Container>
  )
}

const Categories = styled.div`
  transition: opacity 2s;
`

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 200;
  letter-spacing: 3px;
  color: rgb(71, 71, 71);
  text-align: center;
  @media (max-width: 700px) {
    margin-top: 15%;
    font-size: 30px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 2% 2% 0% 2%;
`

const CardContainer = styled.div`
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`

export default UserView
