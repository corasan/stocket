import React from 'react'
import Icon from './Icon'
import { Path } from 'react-native-svg'
import type { IconProps } from '../Types'

const RefreshIcon = ({ size, color = '#fff' }: IconProps) => (
  <Icon size={size} color={color}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.1983 8.46979H19.4383C19.7683 8.46979 20.0383 8.19979 20.0383 7.86979V3.62979C20.0383 3.29979 19.7683 3.02979 19.4383 3.02979C19.1083 3.02979 18.8383 3.29979 18.8383 3.62979V6.23173C17.2426 4.67055 15.0879 3.77002 12.8183 3.77002C10.4383 3.77002 8.21826 4.72002 6.55826 6.46002C5.04826 8.06002 4.21826 10.16 4.21826 12.37C4.21826 17.11 8.07826 20.97 12.8183 20.97C15.0283 20.97 17.1283 20.14 18.7383 18.62C18.9783 18.39 18.9883 18.01 18.7583 17.77C18.5283 17.53 18.1483 17.52 17.9083 17.75C16.5283 19.05 14.7183 19.77 12.8183 19.77C8.73826 19.77 5.41826 16.45 5.41826 12.37C5.41826 10.46 6.13826 8.66002 7.42826 7.28002C8.85826 5.79002 10.7683 4.97002 12.8183 4.97002C14.8621 4.97002 16.7946 5.81208 18.1861 7.26978H15.1983C14.8683 7.26978 14.5983 7.53979 14.5983 7.86979C14.5983 8.19979 14.8683 8.46979 15.1983 8.46979Z"
      fill="#a2a2a2"
    />
  </Icon>
)

export default RefreshIcon
