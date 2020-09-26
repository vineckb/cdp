import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, useTransform } from 'framer-motion'
import { Link } from 'gatsby'

const List = styled(motion.ul)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  list-style: none;
  margin: 0 ${props => props.marginLeft}px;
`

const ListItem = styled.li``

const StyledLink = styled(Link)`
  text-decoration: none;
`

export default function MenuComponent(props) {
  const { progress } = props

  const marginLeftValue = useTransform(progress, [10, 90], [50, 150])
  const [marginLeft, setMarginLeft] = useState(marginLeftValue.get())
  marginLeftValue.onChange(setMarginLeft)

  return (
    <List marginLeft={marginLeft}>
      <ListItem>
        <StyledLink href="/">Home</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="/carro-de-som">Carro de som</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="/radio-personalizada">Rádio Personalizada</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="/estudio-de-gravacao">Estudio de gravação</StyledLink>
      </ListItem>
    </List>
  )
}
