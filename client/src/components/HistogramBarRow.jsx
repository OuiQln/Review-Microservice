import React from 'react';
import style from './HistogramBarRow.css';

function HistogramBarRow() {
  const width = `${Math.floor(Math.random() * 100)}%`;
  const num = `${Math.floor(Math.random() * 100)}`;
  return (
    <div className={style.HistogramBarRow}>
      <span className={style.HistogramStarLabel}>
        <span className={style.HistogramStarLabelText}>5 Star</span>
      </span>
      <div className={style.HistogramBar}>
        <div className={style.HistogramFullBar} style={{ width }} />
      </div>
      <span className={style.HistAbsLabel}>
        { num }
      </span>
    </div>
  );
}

export default HistogramBarRow;
