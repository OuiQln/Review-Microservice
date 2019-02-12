import React, { Component } from 'react';
import ReviewAggregate from './ReviewAggregate';

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
      <div className="review-container">
        <ReviewAggregate />
      </div>
    );
  }
}

export default ReviewApp;
