import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'

const BackgroundStyle = styled(motion.div)`
  align-items: center;
  color: white;
  display: flex;
  font-size: 30px;
  height: 100%;
  justify-content: center;
  position: absolute;
`

export default function Background(props) {
  const { progress } = props

  const opacityValue = useTransform(progress, [40, 70], [0.8, 1])
  const [opacity, setOpacity] = useState(opacityValue.get())
  opacityValue.onChange(setOpacity)

  const widthValue = useTransform(progress, [10, 90], [110, 100])
  const [width, setWidth] = useState(widthValue.get())
  widthValue.onChange(setWidth)

  const rotateValue = useTransform(progress, [10, 90], [-11, 0])
  const [rotate, setRotate] = useState(rotateValue.get())
  rotateValue.onChange(setRotate)

  const leftValue = useTransform(progress, [10, 90], [-7, 0])
  const [left, setLeft] = useState(leftValue.get())
  leftValue.onChange(setLeft)

  return (
    <BackgroundStyle className="HeaderBackground" animate={{
      backgroundColor: `rgba(25, 34, 49, ${opacity})`,
      transform: `rotate(${rotate}deg)`,
      width: `${width}vw`,
      left: `${left}%`
    }} />
  )
}
