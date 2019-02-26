/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import ReviewEntry from './ReviewEntry';
import ReviewData from './reviewData';
import style from './ReviewSection.css';

function ReviewSection() {
// this component needs to get the up to 4 currently visible reviews
  const [moreReviews, setMoreReviews] = useState(false);
  
  function makeReviewTest(start = 0, end = 4) {
    const reviewArr = [];
    for (let i = start; i < end; i += 1) {
      let review = ReviewData[i];
      reviewArr.push(<ReviewEntry key={i} reviewData={review} />);
    }
    return reviewArr;
  }
  
  return (
    <div>
      {moreReviews ? makeReviewTest(4, 8) : makeReviewTest()}
      <div onClick={() => setMoreReviews(!moreReviews)} className={style.Paginator}>
        <img src="https://s3.us-east-2.amazonaws.com/ouiqln-review-img/assets/paginator.png" />
      </div>
    </div>
  );
}

export default ReviewSection;
