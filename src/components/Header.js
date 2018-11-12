import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px 0;
`
const H1 = styled.h1`
  margin: 0;
`
const P = styled.p`
  margin-top: 10px;
`

const Header = () => {
  return (
    <Wrapper>
      <H1>Myles Enriquez</H1>
      <P>UI Engineer</P>
    </Wrapper>
  )
}

export default Header;
