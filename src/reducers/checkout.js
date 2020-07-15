import { SORT_ITEMS_BY_PRICE } from '../actions/checkout'

console.log('SORT_ITEMS_BY_PRICE REDUCER:', SORT_ITEMS_BY_PRICE)

const initialState = {
  items: []
}

export const productReducers = (state = initialState, action) => {
  console.log('REDUCER ACTION:', action.type)
  console.log('REDUCER STATE:', state)
  console.log('REDUCER PAYLOAD:', action.payload)
  switch (action.type) {
    case SORT_ITEMS_BY_PRICE:
      console.log('REDUCER IN SORT_ITEMS STATE:', state)
      console.log('EDUCER ON PRICE SORT VALUE', action.payload.value)
      // const sorted = [...products].sort((a,b) => b[sortItem] - a[sortItem])
      // this.setState({products: sorted})
      return {
        ...state,
        items: Object.assign({}, action.payload.items)
      }
    default:
      return state
  }
}
