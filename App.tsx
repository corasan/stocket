import { useEffect, useRef, ReactNode } from 'react'
import { StatusBar, View, AppState } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import messaging from '@react-native-firebase/messaging'
import RNBootSplash from 'react-native-bootsplash'
import {
  useAuthState,
  useSetUserInfo,
  useIapProducts,
  useSubscribeMarketHours,
  useSaveApnsToken,
} from './src/hooks'
import { BACKGROUND } from './src/utils/colors'
import TradeView from './src/views/TradeView'
import MainStack from './src/navigation/AppStack'
import AuthStack from './src/navigation/AuthenticationStack'
import crashlytics from '@react-native-firebase/crashlytics'
import Shake from '@shakebugs/react-native-shake'
import { useReactiveVar } from '@apollo/client'
import { isWatchlistLoadingVar, isPortfolioLoadingVar } from './src/Cache'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage)
})

export default function App(): ReactNode {
  const { isAuth, currentUser } = useAuthState()
  const tradeViewRef = useRef()
  const { loading } = useSetUserInfo()
  useIapProducts(currentUser?.uid)
  useSaveApnsToken(currentUser?.uid)
  useSubscribeMarketHours()
  const isWatchlistLoading = useReactiveVar(isWatchlistLoadingVar)
  const isPortfolioLoading = useReactiveVar(isPortfolioLoadingVar)
  const { top: insetTop } = useSafeAreaInsets()

  useEffect(() => {
    crashlytics().log('App Mounted')
    Shake.start()
    if (
      (!loading && !isWatchlistLoading && !isPortfolioLoading && isAuth) ||
      (!isAuth && !isWatchlistLoading && !isPortfolioLoading)
    ) {
      RNBootSplash.hide({ fade: true })
    }
  }, [loading, isWatchlistLoading, isAuth, isPortfolioLoading])

  useEffect(() => {
    const requestNotificationPermission = async () => {
      await messaging().requestPermission()
    }
    requestNotificationPermission()
  }, [])

  useEffect(() => {
    const deleteCache = async (state: string) => {
      try {
        if (state === 'background') {
          await AsyncStorage.clear()
        }
      } catch (err) {
        console.log(err)
      }
    }
    AppState.addEventListener('change', deleteCache)

    return () => AppState.removeEventListener('change', deleteCache)
  }, [])

  if (!isAuth && !isWatchlistLoading) {
    return <AuthStack />
  }

  return (
    <View style={[container, { paddingTop: insetTop }]}>
      <StatusBar barStyle="light-content" />
      <MainStack />
      <TradeView ref={tradeViewRef} />
    </View>
  )
}

const container = {
  flex: 1,
  backgroundColor: BACKGROUND,
}