import React from 'react';
import moment from 'moment';
import style from './ReviewBody.css';

function ReviewBody() {
  const timeNow = moment().format('LL');
  return (
    <>
      <div className={style.ReviewBodyContainer}>
        <div className={style.ReviewDate}>{timeNow}</div>
        <div className={style.ReviewTitle}>MEDIUM SIZE IS TOO WIDE</div>
        <div className={style.ReviewText}>
        The size chart on the UNIQLO website
        is not accurate. According to the chart
        I need a Large but even the Medium is too big.
        </div>
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
