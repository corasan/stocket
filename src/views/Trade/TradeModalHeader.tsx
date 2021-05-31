import {
  StockLogo,
  TradeModalTitleContainer,
  TradeModalTop,
  TradeModalNameAndPrice,
} from './styles'
import { Text } from '@components'

const TradeModalHeader = ({ name, price, logo }: CompanyProps) => (
  <TradeModalTitleContainer>
    <TradeModalTop>
      <TradeModalNameAndPrice>
        <Text type="label" weight="Bold" pb={5}>
          {name}
        </Text>
        <Text type="label" weight="Medium" color="GRAY" pb={8}>
          ${price}
        </Text>
      </TradeModalNameAndPrice>
    </TradeModalTop>
    <StockLogo source={{ uri: logo }} />
  </TradeModalTitleContainer>
)

interface CompanyProps {
  name: string
  price: number
  logo: string
}

export default TradeModalHeader