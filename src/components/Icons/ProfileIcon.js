import React from 'react'
import Icon from './Icon'
import { Path } from 'react-native-svg'
import type { IconProps } from '../Types'

const ProfileIcon = ({ size, color = '#fff' }: IconProps) => (
  <Icon size={size} color={color}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.0005 12.1302C16.3528 11.1808 17.2432 9.61566 17.2432 7.84131C17.2432 4.94971 14.8916 2.59814 12 2.59814C9.1084 2.59814 6.75684 4.94971 6.75684 7.84131C6.75684 9.61566 7.64722 11.1808 8.99951 12.1302C5.55298 13.0823 2.40039 16.7125 2.40039 20.1792C2.40039 20.854 2.94824 21.4019 3.62305 21.4019H20.377C21.0518 21.4019 21.5996 20.854 21.5996 20.1792C21.5996 16.7125 18.447 13.0823 15.0005 12.1302ZM7.95605 7.84131C7.95605 5.61182 9.77051 3.79736 12 3.79736C14.2295 3.79736 16.0439 5.61182 16.0439 7.84131C16.0439 10.0618 14.2449 11.8673 12.0289 11.8833H11.9711C9.75513 11.8673 7.95605 10.0618 7.95605 7.84131ZM20.377 20.2026L3.59961 20.1792C3.59961 16.7964 7.31348 13.0825 10.6963 13.0825H11.9709C11.981 13.0826 11.99 13.0854 12 13.0854C12.01 13.0854 12.019 13.0826 12.0291 13.0825H13.3037C16.6865 13.0825 20.4004 16.7964 20.4004 20.1792C20.4004 20.1919 20.3896 20.2026 20.377 20.2026Z"
      fill={color}
    />
  </Icon>
)

export default ProfileIcon