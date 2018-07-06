import React, { Component } from 'react'

import * as firebase from 'firebase'

class Firebase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 0,
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val(),
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.speed}</h1>
      </div>
    )
  }
}

export default Firebase
