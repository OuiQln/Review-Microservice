import React from 'react';
import style from './RatingSlider.css';

//  this component needs name and label and rating props

function RatingSlider() {

  function sliderRating() {
    const numStr = (((Math.random() * 4) + 1).toFixed(1));
    const rtgArr = [...numStr];
    rtgArr[1] = '_';
    return rtgArr.join('');
  }

  const sliderImg = 'https://s3.us-east-2.amazonaws.com/ouiqln-review-img/review-scale/ratingSlider';

  return (
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
  );
}

export default RatingSlider;
