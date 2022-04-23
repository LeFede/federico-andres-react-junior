import React, { Component } from 'react'
import Item from '../Item'

import { Field, client, Query } from '@tilework/opus';

client.setEndpoint('http://localhost:4000/');

const query = new Query('categories', true)
  .addFieldList(['name'])
  .addField(new Field('products', true)
    .addFieldList(['name'])
    .addField(new Field('prices', true)
      .addFieldList(['amount'])
      .addField(new Field('currency', true) 
        .addFieldList(['label', 'symbol'])
      )
    )
  )

export default class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    client.post(query)
      .then(res => {
        this.setState((state) => ({
          ...state,
          categories: res.categories
        }));
      });
  }

  render() {
    const cat = this.state.categories ? this.state.categories : []
    const selected = cat
      .find(e => e.name === 'all')

    const currencies = ['USD', 'GBP', 'AUD', 'JPY', 'RUB']
    const selectedCurrency = currencies[0]
    console.log(selected)

    if (selected !== undefined) {
      return (
        <div>
          <h1>{selected.name}</h1>
          <div className='items'>
            {
              selected.products.map(e => {
                const {name} = e

                const amount = e.prices.map(e => e.currency.label === selectedCurrency ? e.amount : '')
                const symbol = e.prices.map(e => e.currency.label === selectedCurrency ? e.currency.symbol : '')
                const label = e.prices.map(e => e.currency.label === selectedCurrency ? e.currency.label : '')
                  .filter(e => e !== '')

                  
                return <Item 
                  key={name} 
                  name={name} 
                  price={amount}
                  symbol={symbol}
                  label={label}
                />
              })
            }
          </div>
        </div>
      )
    }
  }
}
