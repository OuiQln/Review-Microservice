import React from 'react';
import style from './RatingStars.css';

function RatingStars() {
// component still needs props
  function numOfReviews() {
    return Math.floor(Math.random() * 100);
  }

  function totalStars(num) {
    return ((Math.random() * 5) * num);
  }

  function rating(countStars, countReviews) {
    const avgRating = (countStars / countReviews).toFixed(1);
    const rtgArr = [...`${avgRating}`];
    rtgArr[1] = '_';
    return rtgArr.join('');
  }

  const reviewCount = numOfReviews();
  const starCount = totalStars(reviewCount);

  const avgStars = rating(starCount, reviewCount);
  const starImg = `https://s3.us-east-2.amazonaws.com/ouiqln-review-img/review-stars/rating${avgStars}.png`;
  return (
    <>
      <div className={style.NormalImage}>
        <img src={starImg} alt={`Rating of ${avgStars}`} />
      </div>
    </>
  );
}

export default RatingStars;
