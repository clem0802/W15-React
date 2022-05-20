// this file is created inside "src" folder
// it is "RCC" (Class Component)
// for this to show up in MainContent, go to MainContent

import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
          Profile
          <img src={this.props.url} alt=""/>
      </div>
    )
  }
}
