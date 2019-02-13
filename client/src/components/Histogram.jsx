import React from 'react';
import style from './Histogram.css';

function Histogram() {
  return (
    <div className={style.histogram}>
      <div className={style.histTitle}>
        <span className={style.histTitleText}>Rating Distribution</span>
      </div>
      <div className={style.histContent}>
        {/* make recurring histogrambarrow(index that calcuates the rating) */}
      </div>
    </div>
  );
}

export default Histogram;
