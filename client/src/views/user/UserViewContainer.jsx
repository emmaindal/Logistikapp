import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserView from './UserView'

import { setCategory } from './redux/actions'
import { fetchSalespositions, fetchSpecificSalesposition } from './redux/thunks'

class UserViewContainer extends Component {
  state = {
    isOpen: false
  }

  componentDidMount = () => {
    const { fetchSalespositions } = this.props
    fetchSalespositions('http://localhost:3001/salespositions')
  }

  toggleModal = () => {
    const { category, setCategory } = this.props
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))

    if (category !== '') {
      setCategory('')
    }
  }

  handleClickCategory = item => {
    const { setCategory } = this.props
    setCategory(item)
    this.toggleModal()
  }

  handleChange = event => {
    const { fetchSpecificSalesposition } = this.props
    fetchSpecificSalesposition(
      `http://localhost:3001/salespositions/${event.target.value}`
    )
  }

  render() {
    const {
      props: { category, salespositions, salesposition },
      state: { isOpen },
      toggleModal,
      handleChange
    } = this
    return (
      <UserView
        handleChange={handleChange}
        salesposition={salesposition}
        salespositions={salespositions}
        toggleModal={toggleModal}
        isOpen={isOpen}
        category={category}
        handleClickCategory={this.handleClickCategory}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.user.category,
    salespositions: state.user.salespositions,
    salesposition: state.user.salesposition
  }
}

export default connect(
  mapStateToProps,
  { setCategory, fetchSalespositions, fetchSpecificSalesposition }
)(UserViewContainer)
