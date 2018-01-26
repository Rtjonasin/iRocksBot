import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="demo-header">
        <div className="demo-header--title">iRocksBot</div>
        <div className="demo-header--links">
          <a href="https://dialogflow.com/">DialogFlow</a>
        </div>
      </div>
    )
  }
}

export default Header