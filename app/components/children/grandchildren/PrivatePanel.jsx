import React from 'react';
import helpers from '../../utils/helpers.js'

class PrivatePanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const userToFind = this.props.username;

    helpers.retrievePrivMsgs(userToFind).then(helpersRes =>  {
      //TODO: verify that adding messages still keeps index 0 ok to access user's private messages.
      this.setState({messages: helpersRes.data[0].messages})
      console.log(this.state);
    })
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Private Panel</h3>
          </div>
          <div className="panel-body">
            {/* NOTE: mapping through the array to render the elements needed */}
            {this.state.messages.map((msgs, i) => {
              return (
                <p key={i}>{msgs.body} by {this.props.username}</p>
              );
            })}
          </div>
        </div>
      </div>
  )}
}

export default PrivatePanel;
