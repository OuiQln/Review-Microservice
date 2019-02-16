import React from 'react';
import style from './OverallRating.css';

//  this component needs the aggregate data props for stars and avg scales

function OverallRating() {
  // this funciton indicates we need total stars count and num of reviews props

  function numOfReviews() {
    return Math.floor(Math.random() * 100);
  }

  function totalStars(num) {
    return ((Math.random() * 5) * num);
  }

  function sliderRating() {
    const numStr = (((Math.random() * 4) + 1).toFixed(1));
    const rtgArr = [...numStr];
    rtgArr[1] = '_';
    return rtgArr.join('');
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

  const sliderImg = 'https://s3.us-east-2.amazonaws.com/ouiqln-review-img/review-scale/ratingSlider';
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
          <div className={style.RatingContainerSlider}>
            <div className={style.RatingEntry}>
              <div className={style.RatingHeader}>Fit</div>
            </div>
            <div className={style.RatingSlider}>
              <div className={style.RatingSliderLabel}>Very Small</div>
              <div className={style.RatingSliderImage}>
                <img className={style.Sprite} src={`${sliderImg}${sliderRating()}.png`} alt="slider rating" />
              </div>
              <div className={style.RatingSliderLabelTwo}>Very Large</div>
            </div>
          </div>
          <div className={style.RatingContainerSlider}>
            <div className={style.RatingEntry}>
              <div className={style.RatingHeader}>Length</div>
            </div>
            <div className={style.RatingSlider}>
              <div className={style.RatingSliderLabel}>Very Short</div>
              <div className={style.RatingSliderImage}>
                <img className={style.Sprite} src={`${sliderImg}${sliderRating()}.png`} alt="slider rating" />
              </div>
              <div className={style.RatingSliderLabelTwo}>Very Long</div>
            </div>
          </div>
          <div className={style.RatingContainerSlider}>
            <div className={style.RatingEntry}>
              <div className={style.RatingHeader}>Quality</div>
            </div>
            <div className={style.RatingSlider}>
              <div className={style.RatingSliderLabel}>Poor</div>
              <div className={style.RatingSliderImage}>
                <img className={style.Sprite} src={`${sliderImg}${sliderRating()}.png`} alt="slider rating" />
              </div>
              <div className={style.RatingSliderLabelTwo}>Perfect</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OverallRating;
