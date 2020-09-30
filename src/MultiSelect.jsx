import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

let textInput = React.createRef();
export class MultiSelect extends Component {
  constructor() {
    super();
    this.addAnswer = this.addAnswer.bind(this);
  }
  state = {
    answers: [{ text: "" }],
  };

  onInputChange = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value.trim() !== "") {
        this.setState({
          answers: [{ text: value }, ...this.state.answers],
        });
        e.target.value = "";
      }
    }
  };

  addAnswer = function () {
    let textContent = textInput.current.value;
    console.log(textContent);
    this.setState({
      answers: [{ text: textContent }, ...this.state.answers],
    });
    textInput.current.value = "";
  };

  render() {
    return (
      <div className="multiSelect">
        <div className="question">
          <span>?</span>
          <div>Which of the following apps you have on your phone?</div>
        </div>

        <p>Options</p>
        <div className="multiSelect__answer">
          <input
            type="text"
            ref={textInput}
            onKeyDown={this.onInputChange}
            placeholder="Type answer here"
          />
          <button onClick={this.addAnswer}>+</button>
          <button>-</button>
        </div>

        {this.state.answers.map((ans) => (
          <div className="multiSelect__answerList">
            <span>{ans.text}</span>
            <button>+</button>
            <button>-</button>
          </div>
        ))}

        
        {this.state.answers.length === 5 ?
            <div className="multiSelect__button">
            <Button variant="contained" color="secondary">
                Add Question
            </Button>
            <Button variant="contained" color="secondary">
                Publish
            </Button>
            </div> : null
        }
      </div>
    );
  }
}

export default MultiSelect;
