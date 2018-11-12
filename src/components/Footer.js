import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  margin: 50px 0;
`


const Footer = () => {
  return (
    <Wrapper>
      <p>Created by Myles with Gatsby and Love.</p>
    </Wrapper>
  )
}

export default Footer;
