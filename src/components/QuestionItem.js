import React from 'react';

const QuestionItem = props => {
  let answer;
  if (props.clickedState === props.id) {
    answer = props.answer;
  }
  return (
    <div className="item-div">
      <span>
        <i className="fa fa-magic" onClick={props.onClick}></i>
        {props.question}
        <ul> {answer} </ul>
        <hr></hr>
      </span>
    </div>
  );
};

export default QuestionItem;
