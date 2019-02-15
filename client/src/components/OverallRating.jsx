import React from 'react';
import style from './OverallRating.css';

function OverallRating() {
  return (
    <div className={style.OverallRatingContainer}>
      <div className={style.OverallRatingContainerStar}>
        <div className={style.OverallRatingEntry}>
          <div className={style.RatingOverall}>
            <div className={style.Label}>Overall Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverallRating;
