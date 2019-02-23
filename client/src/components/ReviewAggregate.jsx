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
  //  due to variable changing a child on a to affect other
  //  consider hooks?
  let filterText;

  if (true) {
    filterText = <span className={style.basedOnFilters}>Calculated based on filtering:</span>;
  }

  return (
    <>
      {filterText}
      <div className={style.aggReview}>
        <OverallRating />
        <Histogram />
        <WriteReview />
      </div>
      <div className="advanced-filters">
        <AdvancedFilters />
      </div>
    </>
  );
}

export default ReviewAggregate;
