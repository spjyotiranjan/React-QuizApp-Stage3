import React, { Component, useLayoutEffect } from "react";
import "./QuizComponent.css";
import Questions from "./../resources/quizQuestion.json";
import { Link } from "react-router-dom";

export default class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      currIndex: 1,
      score: 0,
      attempted: 0,
      correct: 0,
      wrong: 0,
      questionLength: Questions.length,
    };
  }
  goNext = () => {
    if (this.state.currIndex < this.state.questionLength) {
      this.setState({ currIndex: this.state.currIndex + 1 });
    }
  };
  goPrevious = () => {
    if (this.state.currIndex > 1) {
      this.setState({ currIndex: this.state.currIndex - 1 });
    }
  };
  quitQuiz = () => {
    let confirmQuit = confirm("Are you sure you want to quit ?");
    if (confirmQuit) {
      this.setState({ currIndex: 1 });
    }
  };

  handleAnswer = (e) => {
    let check;
    
    if (
      e.target.id == "A" &&
      Questions[this.state.currIndex - 1].answer ==
        Questions[this.state.currIndex - 1].optionA
    ) {
      this.setState((prev) => ({ score: prev.score + 6.66 }));
      this.setState((prev) => ({ correct: prev.correct + 1 }));
      check = true
      console.log("score", this.state.score);
      alert("Correct Answer");
    } else if (
      e.target.id == "B" &&
      Questions[this.state.currIndex - 1].answer ==
        Questions[this.state.currIndex - 1].optionB
    ) {
      this.setState((prev) => ({ score: prev.score + 6.66 }));
      this.setState((prev) => ({ correct: prev.correct + 1 }));
      check = true
      console.log("score", this.state.score);
      alert("Correct Answer");
    } else if (
      e.target.id == "C" &&
      Questions[this.state.currIndex - 1].answer ==
        Questions[this.state.currIndex - 1].optionC
    ) {
      this.setState((prev) => ({ score: prev.score + 6.66 }));
      this.setState((prev) => ({ correct: prev.correct + 1 }));
      check = true
      console.log("score", this.state.score);
      alert("Correct Answer");
    } else if (
      e.target.id == "D" &&
      Questions[this.state.currIndex - 1].answer ==
        Questions[this.state.currIndex - 1].optionD
    ) {
      this.setState((prev) => ({ score: prev.score + 6.66 }));
      this.setState((prev) => ({ correct: prev.correct + 1 }));
      check = true
      console.log("score", this.state.score);
      alert("Correct Answer");
    }

    if (
      e.target.id == "A" &&
      Questions[this.state.currIndex - 1].answer !=
        Questions[this.state.currIndex - 1].optionA
    ) {
      this.setState((prev) => ({ wrong: prev.wrong + 1 }));
      check = false
      alert("Wrong Answer");
    } else if (
      e.target.id == "B" &&
      Questions[this.state.currIndex - 1].answer !=
        Questions[this.state.currIndex - 1].optionB
    ) {
      this.setState((prev) => ({ wrong: prev.wrong + 1 }));
      check = false
      alert("Wrong Answer");
    } else if (
      e.target.id == "C" &&
      Questions[this.state.currIndex - 1].answer !=
        Questions[this.state.currIndex - 1].optionC
    ) {
      this.setState((prev) => ({ wrong: prev.wrong + 1 }));
      check = false
      alert("Wrong Answer");
    } else if (
      e.target.id == "D" &&
      Questions[this.state.currIndex - 1].answer !=
        Questions[this.state.currIndex - 1].optionD
    ) {
      this.setState((prev) => ({ wrong: prev.wrong + 1 }));
      check = false
      alert("Wrong Answer");
    }
    this.goNext();
    if(check){
      localStorage.setItem("Score", Math.ceil(this.state.score) + 6);
    }
    if(check){
      localStorage.setItem("correct", this.state.correct + 1);
    }else{
      localStorage.setItem("wrong", this.state.wrong + 1);
    }
    localStorage.setItem(
      "attempted",
      this.state.attempted + 1
    );
  };

  componentDidMount(){
    this.state.currIndex = 1
    this.state.score = 0
    this.state.correct = 0
    this.state.attempted = 0
    this.state.wrong = 0

    localStorage.setItem("Score",0)
    localStorage.setItem("correct",0)
    localStorage.setItem("wrong",0)
    localStorage.setItem("attempted",0)
  }

  render() {
    return (
      <div className="quiz">
        <h1 id="title">Question</h1>
        <p className="start">
          <span>{this.state.currIndex}</span> of{" "}
          <span>{this.state.questionLength}</span>
        </p>
        <h4 id="question">{Questions[this.state.currIndex - 1].question}</h4>
        <div className="option">
          <button
            className="option-btn"
            id="A"
            onClick={(e) => {
              this.handleAnswer(e);
              this.setState((prev) => ({
                attempted: prev.attempted + 1,
              }));
            }}
          >
            {Questions[this.state.currIndex - 1].optionA}
          </button>
          <button
            className="option-btn"
            id="B"
            onClick={(e) => {
              this.handleAnswer(e);
              this.setState((prev) => ({
                attempted: prev.attempted + 1,
              }));
            }}
          >
            {Questions[this.state.currIndex - 1].optionB}
          </button>
          <button
            className="option-btn"
            id="C"
            onClick={(e) => {
              this.handleAnswer(e);
              this.setState((prev) => ({
                attempted: prev.attempted + 1,
              }));
            }}
          >
            {Questions[this.state.currIndex - 1].optionC}
          </button>
          <button
            className="option-btn"
            id="D"
            onClick={(e) => {
              this.handleAnswer(e);
              this.setState((prev) => ({
                attempted: prev.attempted + 1,
              }));
            }}
          >
            {Questions[this.state.currIndex - 1].optionD}
          </button>
        </div>
        <div className="action">
          <button
            id="previous-btn"
            className="action-btn"
            onClick={this.goPrevious}
          >
            Previous
          </button>
          {this.state.currIndex < 15 ? (
            <button id="next-btn" className="action-btn" onClick={this.goNext}>
              Next
            </button>
          ) : (
            <Link to={"/result"}>
              <button
                id="next-btn"
                className="action-btn"
                onClick={this.goNext}
              >
                Next
              </button>
            </Link>
          )}
          <Link to={"/"}>
            <button
              id="quit-btn"
              className="action-btn"
              onClick={this.quitQuiz}
            >
              Quit
            </button>
          </Link>
          <Link to={"/result"}>
            <button
              id="finish-btn"
              className="action-btn"
              // onClick={this.finishQuiz}
            >
              Finish
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
