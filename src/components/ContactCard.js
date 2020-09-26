import React, { useContext } from 'react';
import styled from 'styled-components'
import { Context } from "../store";
import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const Component = styled.div`
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 41;
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 50;
`
const CloseButton = styled(Button)`
  font-size: 30px;
  left: 50%;
  height: 100px;
  margin-left: -50px;
  position: absolute;
  top: 10vh;
  width: 100px;
  z-index: 70;
`
const Container = styled.div`
  background: #fff;
  bottom: 0;
  height: 60vh;
  left: 50%;
  margin-left: -35vw;
  position: absolute;
  width: 70vw;
  z-index: 600;
`
const Title = styled.h2``
const Text = styled.p``

export default function ContactCardComponent() {
  const { setState } = useContext(Context)

  const close = () => {
    setState({ contactOpen: false })
  }

  return (
    <Component>
      <Overlay />
      <CloseButton rounded onClick={close}>
        <FaTimes />
      </CloseButton>
      <Container>
        <Title>Contato</Title>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dicta vitae non possimus accusamus tenetur neque amet repudiandae ipsam temporibus?</Text>
      </Container>
    </Component>
  );
}
