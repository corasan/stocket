import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import * as format from 'd3-format'
import * as axis from 'd3-axis'
import { scaleLinear, scaleTime } from 'd3-scale'
import Cursor from './Cursor'
import { GREEN } from 'utils/colors'
import maxBy from 'lodash.maxby'
import minBy from 'lodash.minby'

const d3 = {
  scale,
  shape,
  format,
  axis,
}
const height = 300
const { width } = Dimensions.get('window')
const verticalPadding = 30

const arr = [
  { at: new Date(2020, 1, 1), value: 2100 },
  { at: new Date(2020, 2, 1), value: 3100 },
  { at: new Date(2020, 3, 1), value: 5100 },
  { at: new Date(2020, 4, 1), value: 6100 },
  { at: new Date(2020, 5, 1), value: 9100 },
  { at: new Date(2020, 6, 1), value: 21000 },
  { at: new Date(2020, 7, 1), value: 14000 },
  { at: new Date(2020, 8, 1), value: 21000 },
  { at: new Date(2020, 9, 1), value: 31000 },
  { at: new Date(2020, 10, 1), value: 50100 },
  { at: new Date(2020, 11, 1), value: 70100 },
  { at: new Date(2020, 12, 1), value: 90100 },
]

export default function LineChart({ data = arr }) {
  const minX = minBy(data, el => el.at)
  const maxX = maxBy(data, el => el.at)
  const minY = minBy(data, el => el.value)
  const maxY = maxBy(data, el => el.value)
  const scaleX = scaleTime()
    .domain([minX.at, maxX.at])
    .range([0, width])
  const scaleY = scaleLinear()
    .domain([minY.value, maxY.value])
    .range([height - verticalPadding, verticalPadding])
  const line = d3.shape
    .line()
    .x(d => scaleX(d.at))
    .y(d => scaleY(d.value))
    .curve(d3.shape.curveBasis)(arr)

  return (
    <View style={styles.container}>
      <Svg {...{ width, height }}>
        <Path d={line} fill="transparent" stroke={GREEN} strokeWidth="2" />
      </Svg>
      <View style={{ ...StyleSheet.absoluteFill, width }}>
        <Cursor d={line} scaleY={scaleY} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  cursor: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
})
