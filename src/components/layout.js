import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  min-width: 320px;
  padding: 10px;
  width: 768px;
`



const Layout = ({children}) => {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </LayoutWrapper>
  )
}

export default Layout;
