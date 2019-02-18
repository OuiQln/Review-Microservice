import React from 'react';
import WriteReview from './WriteReview';
import Histogram from './Histogram';
import OverallRating from './OverallRating';
import style from './reviewAggregate.css';

/*
  advanced filter div at the bottom
  overallRating needs props {
    total num of stars
    total num of reviews
  }
*/

function ReviewAggregate() {
  return (
    <>
      <div className={style.aggReview}>
        <OverallRating />
        <Histogram />
        <WriteReview />
      </div>
      <div className="advanced-filters">
        <div>advanced Filters</div>
      </div>
    </>
  );
}

export default ReviewAggregate;
