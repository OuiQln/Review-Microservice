import React from 'react';
import style from './RatingScales.css';

function RatingScales() {
  return (
    <div className={style.RatingScale}>
      <div className={style.RatingStars}>
        {/* put the rating star function here */}
        <div className={style.RatingTitle}>Rating</div>
      </div>
      <div className={style.RatingScaleContainer}>
        {/* put the scales here, import */}
      </div>
    </div>
  );
}

export default RatingScales;
