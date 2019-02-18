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
  this function needs to know if the app is filtering
*/

function ReviewAggregate() {
  let filterText;

  if (true) {
    filterText = <span className={style.basedOnFilters}>Calculated based on filtering:</span>;
  }

  return (
    <>
      <div className={style.aggReview}>
        <div>
          {filterText}
          <OverallRating />
          <Histogram />
        </div>
        <WriteReview />
      </div>
      <div className="advanced-filters">
        <div>advanced Filters</div>
      </div>
    </>
  );
}

export default ReviewAggregate;
