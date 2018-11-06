import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 10%;
`


const Layout = ({children}) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  )
}


export default Layout;
