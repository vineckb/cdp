import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { useViewportScroll, useTransform } from 'framer-motion'

import Wrapper from './Wrapper'
import Background from './Background'
import Links from '../Links'
import Logo from '../Logo'
import Menu from '../Menu'
import ContactButton from '../ContactButton'

const HeaderLayer = styled.div`
  align-items: center;
  display: flex;
  left: 0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`
export default function HeaderComponent() {
  const { scrollY } = useViewportScroll()
  const [windowHeight, setWindowHeight] = useState(0)
  const progress = useTransform(scrollY, [0, windowHeight], [0, 200])

  useLayoutEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Wrapper className="Header" progress={progress}>
      <Background progress={progress} />

      <HeaderLayer>
        <Links progress={progress} />
        <Logo progress={progress} />
        <Menu progress={progress} />
      </HeaderLayer>

      <ContactButton progress={progress} />
    </Wrapper>
  )
}
