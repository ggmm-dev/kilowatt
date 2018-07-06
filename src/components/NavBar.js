import React, { Component } from 'react'
import Logo from '../img/logo.svg'
import Link from 'gatsby-link'

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="flex-container">
          <div className="left">
            <div className="logo">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
            <nav>
              <Link to="/gatsby-docs">Gatsby</Link>
              <Link to="/react">React</Link>
              <Link to="/deployment">Deployment</Link>
              <Link to="/process">Process</Link>
              <Link to="/checklist">Checklist</Link>
            </nav>
          </div>
          <div className="right" />
        </div>
      </header>
    )
  }
}
