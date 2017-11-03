import React from 'react';
import helpers from '../../utils/helpers.js';
import Dashboard from '../Dashboard.jsx';

class MsgInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      isPrivate: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'title') {
      this.setState({title: event.target.value});
    }
    else if (event.target.id === 'comment') {
      this.setState({body: event.target.value})
    }
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.setMessage(this.state);

    // event.preventDefault();
    // let msg = this.state.message;
    // console.log(this.value);
    // (this.value === 'Post Public') ?
    //   helpers.createPublicMsg(msg) : helpers.createPrivMsg(msg)
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Comment Title
          </label>
          <input type="text" onChange={this.handleChange} className="form-control" name="title" size="20" maxLength="64" id="title"/>
          <br />
          <label htmlFor="comment">
            Comments
          </label>
          <textarea type="comment"  onChange={this.handleChange} className="form-control" rows="10" id="comment" placeholder="Enter comment" />
          <button type="submit" value="Submit" className="btn btn-default" id="public">Post Public</button>
          {/*<button type="submit" value="Submit" className="btn btn-default" id="private">Post Private</button>*/}
        </form>
      </div>
  )}
}

export default MsgInput;
