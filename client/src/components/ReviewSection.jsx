import React from 'react';
import ReviewEntry from './ReviewEntry';
import ReviewData from './reviewData';

function ReviewSection() {
// this component needs to get the up to 4 currently visible reviews
  function makeReviewTest() {
    const reviewArr = [];
    for (let i = 0; i < 4; i += 1) {
      let review = ReviewData[i];
      reviewArr.push(<ReviewEntry key={i} reviewData={review} />);
    }
    return reviewArr;
  }

  return (
    <div>
      {makeReviewTest()}
      {/* <div>Paginator at the bottom</div> */}
    </div>
  );
}

export default ReviewSection;
