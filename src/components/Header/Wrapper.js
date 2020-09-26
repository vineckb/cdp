import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'

const WrapperStyle = styled(motion.div)`
  color: #fff;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
  min-height: 110px;
`

export default function Wrapper(props) {
  const { progress } = props

  const heightValue = useTransform(progress, [10, 90], [60, 10])
  const [height, setHeight] = useState(heightValue.get())
  heightValue.onChange(setHeight)

  const topValue = useTransform(progress, [10, 90], [-15, 0])
  const [top, setTop] = useState(topValue.get())
  topValue.onChange(setTop)

  return (
    <WrapperStyle className="HeaderWrapper" animate={{
      height: `${height}vh`,
      top: `${top}vh`
    }}>
      {props.children}
    </WrapperStyle>
  )
}
