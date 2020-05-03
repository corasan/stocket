export default {
  user: {
    isAuth: false,
    currentUser: null,
    userInfo: null,
  },
  portfolio: {
    positions: [],
    loading: true,
  },
  trade: {
    selectedTradeAction: 'BUY',
    stockQuantity: null,
    stockPrice: null,
    maxShares: null,
    sharesOwned: null,
    tradeViewIsOpen: false,
  },
  stock: {
    selectedStock: {},
    stockData: {},
    positionsMktData: {},
  },
}
