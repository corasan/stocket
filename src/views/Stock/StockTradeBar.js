// @flow
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Container } from 'components'
import { GREEN, BACKGROUND, DARK_TEXT, GRAY_DARKER } from 'utils/colors'

type StockTradeBarProps = {
  status: string,
  change: number,
  openTradeView: () => void,
}

export default ({ status, change, openTradeView }: StockTradeBarProps) => (
  <Container style={styles.bottom} top={5} bottom={10}>
    <View style={{ flexDirection: 'column' }}>
      <Text color={GRAY_DARKER}>Day change </Text>
      <Text
        weight="Black"
        status={status}
        style={{ paddingTop: 2, fontSize: 15 }}
      >
        {change}
      </Text>
    </View>

    <TouchableOpacity onPress={openTradeView}>
      <View style={styles.button}>
        <Text color={DARK_TEXT} weight="BLACK" style={{ fontSize: 18 }}>
          Trade
        </Text>
      </View>
    </TouchableOpacity>
  </Container>
)

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  bottom: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: BACKGROUND,
    width: '100%',
  },
  button: {
    backgroundColor: GREEN,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 100,
  },
}
