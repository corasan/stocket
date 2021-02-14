import React from 'react'
import { Path } from 'react-native-svg'
import type { IconProps } from 'types'
import Icon from './Icon'

interface Props extends IconProps {
  filled: boolean
}

export default ({ size, color = '#fff', filled }: Props) => (
  <Icon size={size} color={color}>
    <Path
      fillRule={filled ? 'nonzero' : 'evenodd'}
      clipRule="evenodd"
      d="M19.7454 5.17819C17.5975 3.0303 14.1151 3.0303 11.9672 5.17819C9.81935 3.0303 6.33695 3.0303 4.18906 5.17819C2.04118 7.32607 2.04118 10.8085 4.18906 12.9564L11.2188 20.8899C11.6167 21.3389 12.3178 21.3389 12.7157 20.8899L19.7454 12.9564C21.8933 10.8085 21.8933 7.32607 19.7454 5.17819ZM5.11245 6.37612C3.605 7.88356 3.5447 10.3084 4.97534 11.8889L11.5965 19.2037C11.795 19.423 12.1394 19.423 12.3379 19.2037L18.9591 11.8889C20.3898 10.3084 20.3295 7.88356 18.822 6.37612L18.6848 6.23885C17.1227 4.67675 14.59 4.67675 13.0279 6.23885L11.9672 7.29951L10.9066 6.23885C9.34448 4.67675 6.81182 4.67675 5.24972 6.23885L5.11245 6.37612Z"
      fill={color}
    />
  </Icon>
)
