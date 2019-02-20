import React from 'react';
import style from './StarRatingFilter.css';

function StarRatingFilter() {
  return (
    // this div is going to contain a list that
    //  is visible when the mouse is hovering
    //  the font needs to be red on hover too
    <div className={style.FilterBoxDiv}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">
        <span className={style.FilterTitle}>
          Star Rating
          <img src="https://s3.us-east-2.amazonaws.com/ouiqln-review-img/assets/downarrowbold.png" alt="down arrow" />
        </span>
      </a>
    </div>
  );
}

export default StarRatingFilter;
