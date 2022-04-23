import React, { Component } from 'react'
import logo1 from '../../Assets/logo-1.svg'
import logo2 from '../../Assets/logo-2.svg'
import logo3 from '../../Assets/logo-3.svg'
import logo4 from '../../Assets/logo-4.svg'


import { Field, client, Query } from '@tilework/opus';
import { Link } from 'react-router-dom';

client.setEndpoint('http://localhost:4000/');

const query = new Query('categories', true)
  .addFieldList(['name'])
  .addField(new Field('products', true)
    .addFieldList(['name'])
  )

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    client.post(query)
      .then(res => {
        this.setState((state) => ({
          categories: res.categories
        }));
      })
  }

  render() {
    const cat = this.state.categories

    return (
      <div className='navbar'>

        <div className='flex group-left'>
          {
            cat.map(e => <Link key={e.name} to={`/product/${e.name}`}>{e.name}</Link>)
          }

        </div>

        <div className="logo">
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
        </div>

        <div className='flex group-right'>
          <div className="currency">$</div>
          <div>CART</div>  
        </div>

      </div>
    )
  }
}

