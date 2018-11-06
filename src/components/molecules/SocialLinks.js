import React from 'react';
import ExternalLink from '../atoms/LinkWrapper';
import styled from 'styled-components';

import { FiGithub as GithubIcon, FiCodepen as CodepenIcon } from 'react-icons/fi';

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <ExternalLink path="https://github.com/enriquezm">
        <GithubIcon size={24} />
      </ExternalLink>
      <ExternalLink path="https://codepen.io/mylesenri">
        <CodepenIcon size={24} />
      </ExternalLink>
    </SocialLinksWrapper>
  );
}

export default SocialLinks;
