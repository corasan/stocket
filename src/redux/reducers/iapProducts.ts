import initialState from '../initialState'

interface Action {
  products: Array<any>
  type: string
}
export default function (state = initialState.iapProducts, action: Action) {
  switch (action.type) {
    case 'SET_IAP_PRODUCTS':
      return { ...state, products: action.products }
    default:
      return state
  }
}