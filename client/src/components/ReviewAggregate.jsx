import React from 'react';
import WriteReview from './WriteReview';
import Histogram from './Histogram';
import OverallRating from './OverallRating';
import AdvancedFilters from './AdvancedFilters';
import style from './ReviewAggregate.css';

/*
  advanced filter div at the bottom
  overallRating needs props {
    total num of stars
    total num of reviews
  }
  this function needs to know if the app is filtering
*/

function ReviewAggregate() {
  //  this component needs a prop determining if
  //  filtering is active
  let filterText;

  if (false) {
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
        <AdvancedFilters />
      </div>
    </>
  );
}

export default ReviewAggregate;
