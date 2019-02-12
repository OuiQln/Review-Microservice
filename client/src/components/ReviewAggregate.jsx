import React from 'react';
import WriteReview from './WriteReview';

/*
  needs to have a overall rating component
  rating distribution component
  advanced filter div at the bottom
*/

function ReviewAggregate(props) {
  return (
    <>
      <div className="review-aggregator">
        <WriteReview />
      </div>
      <div className="advanced-filters">
        <div>advanced Filters</div>
      </div>
    </>
  );
}

export default ReviewAggregate;
