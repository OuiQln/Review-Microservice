import React, { Component } from 'react';

class ReviewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  render() {
    const { loaded } = this.state;
    return (
      <div>
        <p>
          Hello from React:
          { loaded.toString() }
        </p>
      </div>
    );
  }
}

export default ReviewApp;
