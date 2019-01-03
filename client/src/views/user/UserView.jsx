import React from 'react'
import styled from 'styled-components'

import MenuCard from './components/MenuCard'
import OrderModal from './components/OrderModal'
import { MenuItem, Select, FormControl, InputLabel } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const UserView = ({
  salesposition,
  salespositions,
  isOpen,
  category,
  handleClickCategory,
  toggleModal,
  handleChange
}) => {
  return (
    <Container>
      <CardContainer>
        <Heading variant="title">Välj en säljposition</Heading>
        <FormControl style={{ width: '100%' }}>
          <InputLabel htmlFor="age-simple">Säljpositioner</InputLabel>
          <Select value={salesposition.id} onChange={handleChange}>
            {Object.values(salespositions).map(value => {
              if (value.name) {
                return (
                  <MenuItem key={value.name} value={value.id}>
                    {value.name}
                  </MenuItem>
                )
              }
            })}
          </Select>
        </FormControl>
        {salesposition.id && (
          <Categories>
            <Heading variant="title">Välj en kategori</Heading>
            <Grid container s={6} m={6} l={6} spacing={16}>
              {Object.keys(salesposition.products).map(category =>
                category ? (
                  <MenuCard
                    handleClickCategory={() => handleClickCategory(category)}
                    key={category}
                    item={category}
                    cardIcon={`../../icons/${category.toLowerCase()}.svg`}
                  />
                ) : (
                  <p>no categories</p>
                )
              )}
            </Grid>
          </Categories>
        )}
      </CardContainer>
      <OrderModal
        salesposition={salesposition}
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
