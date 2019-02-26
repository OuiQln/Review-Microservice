import React from 'react';
import RatingSlider from '../RatingSlider';
import RatingStars from '../RatingStars';
import style from './RatingScales.css';

function RatingScales() {
  return (
    <div className={style.RatingScale}>
      <div className={style.RatingStars}>
        <div className={style.RatingTitle}>Rating</div>
        <RatingStars />
      </div>
      <div className={style.RatingScaleContainer}>
        <RatingSlider title="Fit" high="Very Small" low="Very Large" />
        <RatingSlider title="Length" high="Very Short" low="Very Long" />
        <RatingSlider title="Quality" high="Poor" low="Perfect" />
      </div>
    </div>
  );
}

export default RatingScales;
