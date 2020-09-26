import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Context } from "../store";
import { FaPhone } from 'react-icons/fa'
import { motion, useTransform } from 'framer-motion'
import Button from './Button'
import ContactCard from './ContactCard'

const Wrapper = styled(motion.div)`
  position: fixed;
  z-index: 40;
  right: 0;
  margin-right: 60px;
`

export default function ContactButtonComponent(props) {
  const { progress } = props

  const marginTopValue = useTransform(progress, [10, 90], [-70, 33])
  const [marginTop, setMarginTop] = useState(marginTopValue.get())
  marginTopValue.onChange(setMarginTop)

  const topValue = useTransform(progress, [10, 70], [100, 0])
  const [top, setTop] = useState(topValue.get())
  topValue.onChange(setTop)

  const { state, setState } = useContext(Context);
  const handleClick = () => {
    setState({ contactOpen: true })
  }

  return (
    <>
      <Wrapper className="ContactButton" animate={{ top: `${top}%`, marginTop: `${marginTop}px` }}>
        <Button rounded onClick={handleClick}>
          <FaPhone />
        </Button>
      </Wrapper>

      { state.contactOpen && <ContactCard />}
    </>
  )
}
