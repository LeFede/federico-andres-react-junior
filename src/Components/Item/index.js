import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
        <figure className='Item'>
          <img src="https://cdn.camouflage.ca/images/products/medium/UF5415.jpg" />
          <figcaption className='text-thin'>{this.props.name}</figcaption>
          <p className='text-bold'>
            {this.props.symbol}
            {this.props.price}
            {` (${this.props.label})`}
          </p>
        </figure>
    )
  }
}
