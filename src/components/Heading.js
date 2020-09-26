import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/background.jpg'

const Heading = styled.div`
  background: url(${backgroundImage}) top center no-repeat;
  background-size: cover;
  height: 100vh;
  left: 0;
  padding-top: 40vh;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
`

export default function HeadingComponent(props) {
  return (
    <Heading className="Heading" {...props} />
  )
}
