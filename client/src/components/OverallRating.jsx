import React from 'react';
import RatingSlider from './RatingSlider';
import RatingStars from './RatingStars';
import style from './OverallRating.css';

//  this component needs the aggregate data props for stars and avg scales

function OverallRating() {
  // this funciton indicates we need total stars count and num of reviews props
  return (
    <>
      <div className={style.OverallRatingContainer}>
        <div className={style.OverallRatingContainerStar}>
          <div className={style.OverallRatingEntry}>
            <div className={style.RatingOverall}>
              <div className={style.Label}>Overall Rating</div>
              <RatingStars />
            </div>
          </div>
        </div>
        <div className={style.SecondaryRatingContainer}>
          <RatingSlider title="Fit" high="Very Small" low="Very Large" />
          <RatingSlider title="Length" high="Very Short" low="Very Long" />
          <RatingSlider title="Quality" high="Poor" low="Perfect" />
        </div>
      </div>
    </>
  );
}

export default OverallRating;
