import React, { Component } from 'react';
import ReviewAggregate from './ReviewAggregate';

/*
 This component needs to make the get requests for
 the review aggregate data to pass into ReviewAggregate
 the reviews entry component will need to get passed the
 array of reviews

 this component is statefull because it needs to pass data received
 from and API to two children components who do other actions with the data.
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
        {/* this is where the mapped review entries will go */}
      </div>
    );
  }
}

export default ReviewApp;
