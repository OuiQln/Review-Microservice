import React from 'react';
import style from './OverallRating.css';
import RatingSlider from './RatingSlider';

//  this component needs the aggregate data props for stars and avg scales

function OverallRating() {
  // this funciton indicates we need total stars count and num of reviews props

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
      <div className={style.OverallRatingContainer}>
        <div className={style.OverallRatingContainerStar}>
          <div className={style.OverallRatingEntry}>
            <div className={style.RatingOverall}>
              <div className={style.Label}>Overall Rating</div>
              <div className={style.NormalImage}>
                <img src={starImg} alt={`Rating of ${avgStars}`} />
              </div>
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
