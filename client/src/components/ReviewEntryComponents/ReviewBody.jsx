import React from 'react';
import moment from 'moment';
import style from './ReviewBody.css';

function ReviewBody({ reviewText, reviewTitle }) {
  const timeNow = moment().format('LL');
  return (
    <>
      <div className={style.ReviewBodyContainer}>
        <div className={style.ReviewDate}>{timeNow}</div>
        <div className={style.ReviewTitle}>{reviewTitle}</div>
        <div className={style.ReviewText}>{reviewText}</div>
        {/* div in here about the Yes i reccommend */}
        <div className={style.WasHelpful}>
          <span className={style.WasHelpfulText}>
            Was this review helpful?
          </span>
          <span className={style.thumbUp} />
          <span className={style.thumbDown} />
        </div>
      </div>
    </>
  );
}

export default ReviewBody;
