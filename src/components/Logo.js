import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'

const Logo = styled(motion.div)`
  align-items: center;
  background: #ccc;
  color: #666;
  display: flex;
  justify-content: center;
  padding: 30px 50px;
  position: absolute;
`

export default function LogoComponent(props) {
  const { progress } = props

  const topValue = useTransform(progress, [10, 90], [370, 10])
  const [top, setTop] = useState(topValue.get())
  topValue.onChange(setTop)

  const leftValue = useTransform(progress, [10, 90], [20, 130])
  const [left, setLeft] = useState(leftValue.get())
  leftValue.onChange(setLeft)

  return <Logo animate={{ top, left }}>Logo</Logo>
}
