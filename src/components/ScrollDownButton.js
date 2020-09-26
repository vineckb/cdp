import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import Button from './Button'

export default function ScrollDownButtonComponent() {
  const handleClick = () => null

  return (
    <Button rounded onClick={handleClick}>
      <FaArrowDown />
    </Button>
  )
}
