import { gql } from '@apollo/client'

export const GET_WATCHLIST_QUERY = gql`
  query {
    watchlist {
      quotes {
        symbol
        change
        changePercent
        companyName
        latestPrice
        id
      }
      symbols
    }
  }
`
