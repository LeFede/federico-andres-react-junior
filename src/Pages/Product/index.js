import React, { Component } from 'react'

import { useParams } from 'react-router-dom'

const withProduct = Component => props => {
  const {product} = useParams()
  return <Component {...props} product={product} />
}

class Product extends Component {
  render() {
    //console.log(this.state.product)
    return (
      <div>
        <h1>{this.props.product}</h1>
      </div>
    )
  }
}

export default withProduct(Product)