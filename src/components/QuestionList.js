import React from 'react';
import QuestionItem from './QuestionItem';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedId: null,
      data: []
    };
    this.handleClickedId = this.handleClickedId.bind(this);
  }

  componentDidMount () {
    fetch("http://localhost:3000/api/v1/questions")
      .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ data: body });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


  handleClickedId (id) {
    if (id === this.state.clickedId) {
      this.setState({ clickedId: null });
    } else {
      this.setState({ clickedId: id });
    }
  }

  render () {
    let questionList = this.state.data.map(questionItem => {
      let onClick = () => {
        this.handleClickedId(questionItem.id);
      };
      return (
        <QuestionItem
          key={questionItem.id}
          id={questionItem.id}
          question={questionItem.question}
          answer={questionItem.answer}
          onClick={onClick}
          clickedState={this.state.clickedId}
        />
      );
    });
    return (
      <ul className="question-box">
        {questionList}
      </ul>
    );
  }
}

export default QuestionList;
