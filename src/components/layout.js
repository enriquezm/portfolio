import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  height: 100vh;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 10%;
  background-color: #190C1D;

  display: flex;
  align-items: center;
`


const Layout = ({children}) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  )
}


export default Layout;
