import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDDTTC8viUOEAefhBrqQnI3ztbQi--hD2M',
  authDomain: 'ggmm-995ab.firebaseapp.com',
  databaseURL: 'https://ggmm-995ab.firebaseio.com',
  projectId: 'ggmm-995ab',
  storageBucket: 'ggmm-995ab.appspot.com',
  messagingSenderId: '858204440932',
}

firebase.initializeApp(config)

import NavBar from '../components/NavBar'
import './scss/index.scss'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#111',
    },
    secondary: {
      light: '#0066ff',
      main: '#fab420',
      contrastText: '#ffcc00',
    },
  },
})

const Layout = ({ children, data }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content="Sample" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-87DrmpqHRiY8hPLIr7ByqhPIywuSsjuQAfMXAE0sMUpY3BM7nXjf+mLIUSvhDArs"
          crossorigin="anonymous"
        />
      </Helmet>

      <NavBar siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1300,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 50,
        }}
      >
        {children()}
      </div>
    </div>
  </MuiThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
