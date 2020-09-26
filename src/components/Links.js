import React, { useState } from 'react';
import { motion, useTransform } from 'framer-motion'

export default function LinksComponent(props) {
  const { progress } = props

  const opacityValue = useTransform(progress, [10, 90], [1, 0])
  const [opacity, setOpacity] = useState(opacityValue.get())
  opacityValue.onChange(setOpacity)

  const fontValue = useTransform(progress, [10, 90], [16, 10])
  const [font, setFont] = useState(fontValue.get())
  fontValue.onChange(setFont)

  return (
    <ul>
      <li>
        <a href="http://facebook.com/carrodepropaganda" target="_blank" rel="noopener noreferrer">
          <motion.span animate={{ opacity, fontSize: `${font}px` }}>/carrodepropaganda</motion.span>
        </a>
      </li>
      <li>
        <a href="http://api.whatsapp.com/..." target="_blank" rel="noopener noreferrer">
          <motion.span animate={{ opacity, fontSize: `${font}px` }}>41 99631-7707</motion.span>
        </a>
      </li>
    </ul>
  );
}
