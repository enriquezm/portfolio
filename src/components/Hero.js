import React from 'react';
import styled from 'styled-components';

import BigHeading from './atoms/BigHeading';
import P from './atoms/P';
import B from './atoms/B';
import SocialLinks from './molecules/SocialLinks';


const HeroWrapper = styled.div`
  display: flex;
  height: 100vh;
`
const FlexColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100vw;
    border: 1px solid red;
  }
`

const Hero = () => {
  return (
    <HeroWrapper>
      <FlexColumn>
        <BigHeading>I'm Myles, a <B>UI Engineer</B>.</BigHeading>
        <P>I'm hijacking the human's visual system.</P>
        <SocialLinks />
      </FlexColumn>

    </HeroWrapper>
  )
}

export default Hero
