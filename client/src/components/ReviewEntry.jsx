import React from 'react';
import style from './ReviewEntry.css';
import ReviewBody from './ReviewEntryComponents/ReviewBody';
import RatingScales from './ReviewEntryComponents/RatingScales';
import Attributes from './ReviewEntryComponents/Attributes';

function ReviewEntry() {
// this component needs to get the up to 4 currently visible reviews
  return (
    <div className={style.ReviewEntryContainer}>
      <Attributes />
      <ReviewBody />
      <RatingScales />
    </div>
  );
}

export default ReviewEntry;
