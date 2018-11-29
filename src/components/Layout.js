import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import '../global-styles.css';

const LayoutWrapper = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  max-width: 600px;
  padding: 10px;
`



const Layout = (props) => {
  return (
    <LayoutWrapper>
      <Container>
        {props.children}
      </Container>
    </LayoutWrapper>
  )
}

export default Layout;
