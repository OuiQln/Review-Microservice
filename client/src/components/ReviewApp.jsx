import React, { Component } from 'react';
import ReviewAggregate from './ReviewAggregate';

/*
 This component needs to make the get requests for
 the review aggregate data to pass into ReviewAggregate
 the reviews entry component will need to get passed the
 array of reviews
*/

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
