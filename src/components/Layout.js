import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import '../global-styles.css';

const LayoutWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  min-width: 320px;
  padding: 10px;
  width: 600px;
`



const Layout = (props) => {
  return (
    <LayoutWrapper>
      <Container>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </LayoutWrapper>
  )
}

export default Layout;
