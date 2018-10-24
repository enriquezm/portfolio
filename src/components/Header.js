import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavBar = styled.header`
  color: #333;

  display: flex;
  justify-content: space-between;
  background-color: goldenrod;
`
const Logo = styled.div`
  font-size: 2em;
`

const Header = () => {
  return (
    <NavBar>
      <Logo>
        <Link to="/">Super mES</Link>
      </Logo>
      <div>
        <Link to="/about/">About</Link>
      </div>
      <div><a href="https://twitter.com/designthrottle">Twitter</a></div>
    </NavBar>
  )
}

export default Header;
