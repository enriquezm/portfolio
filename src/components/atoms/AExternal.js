import styled from 'styled-components';
import posed from 'react-pose';

const AniLink = posed.a({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.5
  }
})

const AExternal = styled(AniLink)`
  color: #4163ED;
  margin-right: 15px;
  text-decoration: none;

  &:link {
    color: #4163ED;
  }
  &:hover {
    color: #d82186;
  }
`

export default AExternal;
