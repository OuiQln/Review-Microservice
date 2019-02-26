import React from 'react';
import style from './ReviewEntry.css';
import ReviewBody from './ReviewEntryComponents/ReviewBody';
import RatingScales from './ReviewEntryComponents/RatingScales';
import Attributes from './ReviewEntryComponents/Attributes';

function ReviewEntry(props) {
// this component needs to get the up to 4 currently visible reviews
  const { name, location, age, size, reviewText, reviewTitle } = props.reviewData;
  return (
    <div className={style.ReviewEntryContainer}>
      <Attributes name={name} location={location} age={age} size={size} />
      <ReviewBody reviewText={reviewText} reviewTitle={reviewTitle} />
      <RatingScales />
    </div>
  );
}

export default ReviewEntry;
