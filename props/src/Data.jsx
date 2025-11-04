import React, { Component } from 'react'
import ClassProps from './ClassProps'

export default class Data extends Component {
  render() {
    return (
      <div>
        <ClassProps userName="Ramya" age={33}/>
      </div>
    )
  }
}
