import React from 'react';
import styled from 'styled-components';
import { FiHeart as Heart } from 'react-icons/fi';

const Wrapper = styled.footer`
  margin: 50px 0;
`
const HeartIcon = styled(Heart)`
  color: #FB3640;
`


const Footer = () => {
  return (
    <Wrapper>
      <p>Created by Myles with <a href="https://www.gatsbyjs.org/">Gatsby</a> and <HeartIcon />.</p>
    </Wrapper>
  )
}

export default Footer;
