import React from 'react';
import style from './writeReview.css';

function WriteReview() {
  return (
    <div className={style.writeReview}>
      <span className={style.reviewBox}>
        <span className={style.customHeader}>WRITE A REVIEW</span>
        Tell us what you think about this product. We value your feedback.
      </span>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">WRITE A REVIEW</a>
    </div>
  );
}

export default WriteReview;
