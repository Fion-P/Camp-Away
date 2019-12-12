import React from 'react'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camp_id: this.props.camp.id,
      body: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props.currentUser);
    if (this.props.currentUser) {
      const review = Object.assign({}, this.state);
      this.props.createReview(review);
      this.setState({body: ""});
    } else {
      this.props.openModal('login');
    }
  }

  render() {

    return (
      <div className="review-form">
        <h1>Write a review</h1>
        <form>
          <div className="review-input">
            <textarea 
              value={this.state.body}
              onChange={this.handleInput('body')}
              placeholder="Talk about your experience..."
              cols="40" rows="5"
            ></textarea>
          <button onClick={this.handleSubmit}>Submit review</button>
          </div>
        </form>
      </div>
    )
  }

}

export default ReviewForm;