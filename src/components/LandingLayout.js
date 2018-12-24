import React from 'react';
import styled from 'styled-components';
import '../global-styles.css';

const LayoutWrapper = styled.article`
  height: 100vh;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 720px;
  padding: 10px;
`



const LandingLayout = ( {children} ) => {
  return (
    <LayoutWrapper>
      <Container>
        {children}
      </Container>
    </LayoutWrapper>
  )
}

export default LandingLayout;
