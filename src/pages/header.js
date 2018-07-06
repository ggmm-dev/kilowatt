import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const Header = ({ siteTitle }) => (
  <div className="flex-container">
    <div className="left">
      <img src={logo} alt=""/>
    </div>
  </div>
)

export default Header
