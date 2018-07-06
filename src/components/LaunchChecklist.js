import React, { Component } from 'react'

import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import * as firebase from 'firebase'
import flamelink from 'flamelink'
import _ from 'lodash'

const app = flamelink({
  apiKey: 'AIzaSyDDTTC8viUOEAefhBrqQnI3ztbQi--hD2M',
  authDomain: 'ggmm-995ab.firebaseapp.com',
  databaseURL: 'https://ggmm-995ab.firebaseio.com',
  projectId: 'ggmm-995ab',
  storageBucket: 'ggmm-995ab.appspot.com',
  messagingSenderId: '858204440932',
})

const event = typeof window !== 'undefined' && window
const isNode = typeof module !== 'undefined'

export default class LaunchChecklist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checklist: [],
    }
  }

  componentWillMount() {
    if (!isNode) {
      if (localStorage.getItem('checklist')) {
        this.setState({
          checklist: JSON.parse(localStorage.getItem('checklist')),
        })
      } else {
      }
      app.content.get('checklist').then(checklist =>
        this.setState({
          checklist: checklist,
        })
      )
    }
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem('checklist', JSON.stringify(this.state.checklist))
  }

  handleChange = id => event => {
    this.setState(prevState => ({
      content: _.map(prevState.checklist, obj =>
        obj.content.map(
          content =>
            content.uniqueKey === id
              ? Object.assign(content, { checked: !content.checked })
              : content
        )
      ),
    }))
  }

  renderList() {
    return _.map(this.state.checklist, checklist => {
      return (
        <div className="checklist">
          <div className="container" key={checklist.id}>
            <div className="banner">
              <i className={checklist.icon} />
              <h2 className="title">{checklist.category}</h2>
            </div>
            <FormControl component="fieldset">
              <FormGroup>
                {_.map(checklist.content, content => {
                  return (
                    <FormControlLabel
                      key={content.label}
                      control={
                        <Checkbox
                          checked={content.checked}
                          onChange={this.handleChange(content.uniqueKey, event)}
                          check={content.label}
                        />
                      }
                      label={content.label}
                    />
                  )
                })}
              </FormGroup>
            </FormControl>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <Button variant="contained" color="primary">
          Reset Checkboxes
        </Button>
      </div>
    )
  }
}
