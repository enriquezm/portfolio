import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import '../global-styles.css';

const LayoutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  max-width: 720px;
  padding: 10px;
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
