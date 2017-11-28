import React from 'react';
import { Link } from 'react-router-dom';

class Copyright extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <footer className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>{`${String.fromCharCode(169)} Copyright 2017 Roper Macaraeg`}</p>
            </div>
          </div>
        </footer>
      </div>
    )};
}

export default Copyright;
