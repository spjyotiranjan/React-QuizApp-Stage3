import React, { Component } from 'react'
import "./HomeComponent.css"
import { Link } from 'react-router-dom'

export default class HomeComponent extends Component {

  render() {
    return (
      <div className='home'>
        <h1 className='title'>Quiz App</h1>
        <Link to={"/quiz"}><button className='play'>Play</button></Link>
      </div>
    )
  }
}
