import React from 'react'

class EditReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.review.id);
    document.addEventListener('keydown', this.escFunction);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.updateReview(review).then(this.props.closeModal);
  }

  escFunction(e) {
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  }

  render() {
    // debugger
    return (
      <div className="edit-review-form">
        <div tabIndex="0" onKeyDown={this.escFunction}></div>
        <h2 onClick={this.props.closeModal} className="update-review-close">
          x
        </h2>
        <div className="edit-form">
          <h1>Edit your review</h1>
          <form>
            <div className="edit-input">
              <textarea
                value={this.state.body}
                onChange={this.handleInput('body')}
                placeholder="Talk about your experience..."
                cols="40" rows="5"
              ></textarea>
              <button onClick={this.handleSubmit}>Edit review</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default EditReview;