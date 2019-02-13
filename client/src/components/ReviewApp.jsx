import React, { Component } from 'react';
import ReviewAggregate from './ReviewAggregate';

class ReviewApp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="review-container">
        <ReviewAggregate />
      </div>
    );
  }
}

export default ReviewApp;
