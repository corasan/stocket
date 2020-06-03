// @flow
import React from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import functions from '@react-native-firebase/functions'
import { Text, Container, Loader } from 'components'
import { RefreshIcon } from 'icons'
import StockItem from './StockItem'
import StockEmpty from './StockEmpty'

type StockHorizontalListProps = {
  data: Array<any>,
  loading: boolean,
}

export default function StockHorizontalList(props: StockHorizontalListProps) {
  const { data, loading } = props
  const renderItem = ({ item }) => <StockItem item={item} />
  const onUpdateGainsCall = functions().httpsCallable('onUpdateGainsCall')

  const refreshGains = () => {
    onUpdateGainsCall()
  }

  return (
    <Container style={styles.container} ph>
      <Container horizontal separate>
        <Text type="title" style={styles.title} weight="Bold">
          Stocks
        </Text>

        <TouchableOpacity onPress={() => refreshGains()}>
          <RefreshIcon />
        </TouchableOpacity>
      </Container>

      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(index, key) => key.toString()}
          style={styles.list}
          horizontal
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.listLoader}>
              <StockEmpty />
            </View>
          )}
        />
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    paddingBottom: 10,
  },
  list: {
    minHeight: 100,
  },
  listContent: {
    paddingVertical: 10,
  },
  listLoader: {
    width: '100%',
    alignItems: 'center',
  },
})
