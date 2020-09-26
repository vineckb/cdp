import React from 'react'
import { StoreProvider } from "../store";
import styled from 'styled-components'
import Header from './Header'

const Content = styled.div`
  background: red;
  height: 200vh;
  margin: 0 10%;
  width: 80%;
`

export default function Layout(props) {
  return (
    <div className="LayoutComponent">
      <StoreProvider>
        <>
          <Header />
          <Content className="Content" >
            {props.children}
          </Content>
        </>
      </StoreProvider>
    </div>
  )
}
