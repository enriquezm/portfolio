import React from 'react';
import AExternal from '../atoms/AExternal';

import { FiGithub as GithubIcon, FiTwitter as TwitterIcon, FiCodepen as CodepenIcon } from 'react-icons/fi';

const SocialLinks = () => {
  return (
    <div>
      <AExternal href="https://github.com/enriquezm"><GithubIcon /></AExternal>
      <AExternal href="https://codepen.io/mylesenri/"><CodepenIcon /></AExternal>
      <AExternal href="https://twitter.com/designthrottle"><TwitterIcon /></AExternal>
    </div>
  );
}

export default SocialLinks;
