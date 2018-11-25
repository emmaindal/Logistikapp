import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserView from './UserView'

import { setCategory } from './redux/actions'
import { fetchSalespositions } from './redux/thunks'

class UserViewContainer extends Component {
  state = {
    isOpen: false,
    activeSalesposition: ''
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
    this.toggleModal()
    setCategory(item)
  }

  handleChange = event => {
    this.setState({ activeSalesposition: event.target.value })
  }

  render() {
    const {
      props: { category, salespositions },
      state: { isOpen, activeSalesposition },
      toggleModal,
      handleChange
    } = this

    return (
      <UserView
        handleChange={handleChange}
        activeSalesposition={activeSalesposition}
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
    salespositions: state.user.salespositions
  }
}

export default connect(
  mapStateToProps,
  { setCategory, fetchSalespositions }
)(UserViewContainer)
