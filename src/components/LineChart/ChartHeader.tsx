import { View, useWindowDimensions } from 'react-native'
import Animated, {
  useDerivedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { ReText, round, Vector } from 'react-native-redash'
import { css } from '@emotion/native'
import theme from '@theme'

export default function ChartHeader({ data, translation }: ChartHeaderProps) {
  const { width } = useWindowDimensions()
  const price = useDerivedValue(() => {
    return `$${round(
      interpolate(translation.y.value, [width, 0], [data.domainY[0], data.domainY[1]]),
      3,
    ).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })}`
  })
  const change = useDerivedValue(() => {
    const value = round(
      interpolate(translation.y.value, [width, 0], [data.domainY2[0], data.domainY2[1]]),
      2,
    )
    const plus = value > 0 ? '+' : ''
    return `${plus}${value}%`
  })
  const color = useDerivedValue(() => {
    const num = Number(change.value.replace(/[+%]/g, ''))
    return num > 0 ? theme.colors.GREEN : num < 0 ? theme.colors.RED : theme.colors.GRAY
  })

  const style = useAnimatedStyle(() => ({
    fontFamily: 'SFProText-Medium',
    fontSize: 20,
    color: color.value,
  }))

  return (
    <View style={{ paddingHorizontal: theme.spacing.screen }}>
      <ReText text={price} style={priceStyles} />
      <ReText text={change} style={style} />
    </View>
  )
}

const priceStyles = css({
  fontFamily: 'SFProText-Black',
  fontSize: 40,
  color: '#fff',
})

interface ChartHeaderProps {
  data: {
    domainX: number[]
    domainY: number[]
    domainY2: number[]
  }
  translation: Vector<Animated.SharedValue<number>>
}
