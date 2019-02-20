import React from 'react';
import PropType from 'prop-types';
import style from './HistogramBarRow.css';

//  this component needs the number of reviews per its star designation
//  and the total number of reviews to calculate the width

function HistogramBarRow(props) {
  const width = `${Math.floor(Math.random() * 100)}%`;
  const num = `${Math.floor(Math.random() * 100)}`;
  const { title } = props;
  return (
    <div className={style.HistogramBarRow}>
      <span className={style.HistogramStarLabel}>
        <span className={style.HistogramStarLabelText}>{ title }</span>
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

HistogramBarRow.propTypes = {
  title: PropType.string.isRequired,
};

export default HistogramBarRow;
