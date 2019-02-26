import React from 'react';
import moment from 'moment';
import style from './ReviewBody.css';

function ReviewBody() {
  const timeNow = moment().format('LL');
  return (
    <div className={style.ReviewBodyContainer}>
      ReviewBody
      <div className={style.ReviewDate}>{timeNow}</div>
    </div>
  );
}

export default ReviewBody;
