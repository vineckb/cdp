import React from 'react'
import styled from 'styled-components'

const Button = styled.button.attrs(props => ({
  borderRadius: props.rounded ? '50%' : '4px',
  width: props.rounded ? '50px' : 'auto',
  height: props.rounded ? '50px' : 'auto',
}))`
  align-items: center;
  background: #fff;
  border: none;
  border-radius: ${props => props.borderRadius};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  display: flex;
  height: ${props => props.height};
  justify-content: center;
  outline: none;
  padding: 10px;
  width: ${props => props.width};
`

export default function ButtonComponent(props) {
  return (
    <Button
      {...props}
      type="button">

      {props.children}
    </Button>
  )
}
