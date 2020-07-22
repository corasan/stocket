/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import { useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { useDispatch } from 'react-redux'
import IapHub from 'react-native-iaphub'
import useUser from './useUser'

export default function useAuthState() {
  const dispatch = useDispatch()
  const { isAuth, currentUser } = useUser()

  useEffect(() => {
    const authSubscription = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          currentUser: user,
        })
        dispatch({
          type: 'IS_AUTHENTICATED',
          isAuth: true,
        })
      } else {
        dispatch({
          type: 'USER_LOGOUT',
          isAuth: false,
        })
        IapHub.logout()
      }
    })

    return () => authSubscription()
  }, [])

  return { isAuth, currentUser }
}
