import React from 'react';
import PropTypes from 'prop-types';
import style from './RatingSlider.css';

//  this component needs the coressponding rating for the slide

function RatingSlider(props) {
  const { title, high, low } = props;

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
        <div className={style.RatingHeader}>{title}</div>
      </div>
      <div className={style.RatingSlider}>
        <div className={style.RatingSliderLabel}>{high}</div>
        <div className={style.RatingSliderImage}>
          <img className={style.Sprite} src={`${sliderImg}${sliderRating()}.png`} alt="slider rating" />
        </div>
        <div className={style.RatingSliderLabelTwo}>{low}</div>
      </div>
    </div>
  );
}

RatingSlider.propTypes = {
  title: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
  high: PropTypes.string.isRequired,
};

export default RatingSlider;
