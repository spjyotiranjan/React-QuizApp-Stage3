import React, { Component } from 'react'
import "./ResultComponent.css"
import { Link } from 'react-router-dom'

export default class ResultComponent extends Component {

  
  render() {
    let score = localStorage.getItem('Score')
    console.log('scoreValue:', score)
    let attempted = localStorage.getItem('attempted')
    console.log('attemptedQuestions', attempted)
    let correct = localStorage.getItem('correct')
    console.log('correctAnswer', correct)
    let wrong = localStorage.getItem('wrong')
    console.log('wrongAnswer', wrong)
    return (
    <div className='result'>  
      <h1 className='heading'>Result</h1>
      <div className='result-box'>
        <h3 id='comment'>{score > 40 ? "Nice! keep it up": "You need more practice"}</h3>
        <h1 id='score-declare'>Your score is <span>{score}</span>%</h1>
        <div id='detailed-results'>
          <div className='details'>
            <h4>Total number of questions</h4>
            <h4>15</h4>
          </div>
          <div className='details'>
            <h4>Number of attempted questions</h4>
            <h4>{attempted}</h4>
          </div>
          <div className='details'>
            <h4>Number of corrected answers</h4>
            <h4>{correct ? correct: "0"}</h4>
          </div>
          <div className='details'>
            <h4>Number of wrong answers</h4>
            <h4>{wrong ? wrong:"0"}</h4>
          </div>
        </div>
      </div>
      <div className='result-actions'>
        <Link to={"/quiz"}><button id='playAgain-btn' className='result-action-btn'>Play Again</button></Link>
        <Link to={"/"}><button id='backToHome-btn' className='result-action-btn'>Back to Home</button></Link>
      </div>
    </div>
    )
  }
}
