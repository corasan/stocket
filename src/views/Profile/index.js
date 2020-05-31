// @flow
import React from 'react'
import { View } from 'react-native'
import { Container, Text } from 'components'
import { SUB_BACKGROUND, LABEL } from 'utils/colors'
import { useSelector } from 'react-redux'
import { formatCurrency } from 'utils/functions'
import ProfileItem from './ProfileItem'
import AddCash from './AddCash'
import LogoutButton from './LogoutButton'

export default function Profile() {
  const { userInfo } = useSelector(({ user }) => user)
  return (
    <Container fullView ph style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={{ flex: 1 }}>
        <Container style={styles.topBlock} ph safeAreaTop bottom={26}>
          <View>
            <Text
              type="title"
              style={styles.name}
              weight="Medium"
              color={LABEL}
            >
              {userInfo?.name}
            </Text>
            <Text type="subtext" color={LABEL}>
              {userInfo?.email}
            </Text>
          </View>

          <View style={styles.cashContainer}>
            <View>
              <Text style={styles.value}>Cash</Text>
              <Text style={styles.cash} weight="Black">
                {formatCurrency(userInfo?.cash)}
              </Text>
            </View>

            <View>
              <AddCash />
            </View>
          </View>
        </Container>

        <Container top={40}>
          <ProfileItem
            label="Portfolio Value"
            value={userInfo?.portfolioValue}
          />
        </Container>
      </View>

      <View style={{ width: '100%', alignItems: 'center', paddingBottom: 20 }}>
        <LogoutButton />
      </View>
    </Container>
  )
}

const styles = {
  topBlock: {
    width: '100%',
    height: '29%',
    backgroundColor: SUB_BACKGROUND,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  name: {
    paddingTop: 10,
  },
  value: {
    fontSize: 15,
    color: LABEL,
  },
  cash: {
    fontSize: 16,
    paddingTop: 5,
  },
  cashContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
}
