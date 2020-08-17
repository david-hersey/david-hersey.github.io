import React, { Component } from 'react'
import { Cart, AddCartButton, CartReducers } from 'react-purchase-cart'
import { connect, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Redirect } from 'react-router-dom'
import { sortItemsByPrice } from '../actions/checkout'
import { productReducers } from '../reducers/checkout'

// https://www.npmjs.com/package/react-purchase-cart

const store = createStore(
  combineReducers({
    cart: CartReducers,
    productReducers
  })
)

console.log('STORE STATE', store.getState())
console.log('STORE REDUCERS:', productReducers)

// PRODUCTS WILL MOVE TO AND BE PULLED FROM DB
const products = [
  {
    id: 1,
    name: 'Item 1',
    sku: '11111111',
    price: 20,
    rating: 10,
    thumb: {
      type: 'icon',
      classes: 'fa fa-2x fa-cogs',
      src: 'https://via.placeholder.com/500?text=Item+One'
    }
  },
  {
    id: 2,
    name: 'Item 2',
    sku: '11111112',
    price: 30,
    rating: 9,
    thumb: {
      type: 'image',
      src: 'https://via.placeholder.com/500?text=Item+Two'
    }
  },
  {
    id: 3,
    name: 'Item 3',
    sku: '11111113',
    price: 50,
    rating: 1,
    thumb: {
      type: 'image',
      src: 'https://via.placeholder.com/500?text=Item+Three'
    }
  },
  {
    id: 4,
    name: 'Item 4',
    sku: '11111114',
    price: 100,
    rating: 7,
    thumb: {
      type: 'image',
      src: 'https://via.placeholder.com/500?text=Item+Four'
    }
  }
]

class Checkout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products
    }
  }

  sortItems (type) {
    //  PLAYING WITH USING REDUX STORE FIR SORTING
    this.props.dispatch(sortItemsByPrice({ value: type, items: this.state.products }))

    // JUST ON PRICE FOR NOW
    const types = {
      asc: 'price',
      desc: 'price',
      name: 'id',
      item: 'rating'
    }
    const sortItem = types[type]
    console.log('SORT ITEM', sortItem)

    let sorted = [...products].sort((a, b) => b[sortItem] - a[sortItem])

    if (type === 'asc') {
      sorted = [...products].sort((a, b) => b[sortItem] < a[sortItem])
    }

    if (type === 'name') {
      sorted = [...products].sort()
    }

    this.setState({ products: sorted })
  }

  handleCheckout (data) {
    // PUT REQUIRED DATA INTO SESSION STORAGE AND MOVE TO /PAYMENT ENDPOINT
    // WOULD USE FORM ACTION BUT AT THIS POINT UNSURE OF THIS USE IN MODULE
    window.sessionStorage.setItem('data', JSON.stringify(data))
    window.location.href = '/payment'
    // NEED TO PROGRAMITICALLY MOVE TO NEW ENDPOINT:
    // return <Redirect to='/payment' />
  }

  render () {
    return (
      <Provider store={store}>
        <div className='mt-5'>
          <div className='row'>
            Sort By:
            <select onChange={(e) => this.sortItems(e.target.value)}>
              <option>Select</option>
              <option value='desc'>Price - High to Low</option>
              <option value='asc'>Price - Low to High</option>
              <option value='name'>Name</option>
              <option value='item'>Customer Rating</option>
            </select>
          </div>
          <Cart
            currencySymbol='GBP'
            language='en'
            handleCheckout={this.handleCheckout}
            cartEmptyLabel='Cart is empty'
            cartTextLabel='Cart'
            checkoutTextLabel='Checkout'
            subTotalTextLabel='Total'
            quantityTextLabel='Quantity'
          />
          <div className='row'>
            {this.state.products.map((product, key) => {
              // console.log('PRODUCT', product)
              return (
                <div className='col-md-3' key={key} data-price={product.price}>
                  <div className='product-item'>
                    <div className='pi-pic'>
                      <img src={product.thumb.src} className='img-fluid' alt={product.name} />
                      <div className='pi-links btn add-btn'>
                        <AddCartButton product={product} />
                      </div>
                    </div>
                    <div className='pi-text'>
                      <p>{product.name}</p>
                      <h6>&pound;{product.price}</h6>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Provider>
    )
  }
}

function mapStateToProps (state) {
  return { state }
}

export default connect(mapStateToProps)(Checkout)
