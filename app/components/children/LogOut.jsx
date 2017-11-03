import React from "react";
import { Link } from 'react-router-dom';

class LogOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-default auth-buttons">
              <Link to="/login">Log In</Link>
            </button>
          </div>
        </div>
    );
  }
}

export default LogOut;
