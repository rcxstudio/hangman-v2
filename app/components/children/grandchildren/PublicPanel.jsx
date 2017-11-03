import React from 'react';
import helpers from '../../utils/helpers.js'

class PublicPanel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    helpers.retrievePubMsgs().then(helpersRes =>  {
      this.setState({messages: helpersRes.data})
    })
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Public Panel</h3>
          </div>
          <div className="panel-body">
            {/* NOTE: mapping through the array to render the elements needed */}
            {this.state.messages.map((msgs, i) => {
              return (
                <p key={i}>{msgs.body} by {msgs.author}</p>
              );
            })}
          </div>
        </div>
      </div>
  )}
}

export default PublicPanel;
