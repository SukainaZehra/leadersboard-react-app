import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      fail: false
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }

  addScore() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
      }
    );
  }

  subScore() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score < 340) {
          this.setState({ fail: true });
        }
      }
    );
  }

  render() {
    const isSuccess = this.state.success;
    const isFail = this.state.fail;
    let text;
    text = isSuccess ? <span>Success</span> : isFail ? <span>Fail</span> : "";

    return (
      <div className="student">
        <div className="left">
          <h2 className="studentName">
            {this.props.name}
            <button className="addScorebtn" onClick={() => this.addScore()}>
              +
            </button>
            <button className="subScorebtn" onClick={() => this.subScore()}>
              -
            </button>
          </h2>
          <p className="universityName">
            {this.props.university} {text}
          </p>
        </div>
        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
