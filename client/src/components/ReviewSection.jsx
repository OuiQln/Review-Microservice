import React from 'react';
import ReviewEntry from './ReviewEntry';

function ReviewSection() {
// this component needs to get the up to 4 currently visible reviews
  function makeReviewTest() {
    const reviewArr = [];
    for (let i = 0; i < 4; i += 1) {
      reviewArr.push(<ReviewEntry />);
    }
    return reviewArr;
  }

  return (
    <div>
      {makeReviewTest()}
      <div>Paginator at the bottom</div>
    </div>
  );
}

export default ReviewSection;
