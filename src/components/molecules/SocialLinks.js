import React from 'react';
import AExternal from '../atoms/AExternal';

import { FiGithub as GithubIcon, FiTwitter as TwitterIcon, FiCodepen as CodepenIcon } from 'react-icons/fi';

const SocialLinks = () => {
  return (
    <div>
      <AExternal href="https://github.com/enriquezm"><GithubIcon size={20} /></AExternal>
      <AExternal href="https://codepen.io/mylesenri/"><CodepenIcon size={20} /></AExternal>
      <AExternal href="https://twitter.com/designthrottle"><TwitterIcon size={20} /></AExternal>
    </div>
  );
}

export default SocialLinks;
