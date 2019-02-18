import React from 'react';
import style from './Histogram.css';
import HistogramBarRow from './HistogramBarRow';

function Histogram() {
  // function createHist() {
  //   const hist = [];
  //   for (let i = 0; i < 5; i += 1) {
  //     hist.push(<HistogramBarRow key={i} />);
  //   }
  //   return hist;
  // }

  return (
    <div className={style.histogram}>
      <div className={style.histTitle}>
        <span className={style.histTitleText}>Rating Distribution</span>
      </div>
      <div className={style.histContent}>
        <HistogramBarRow title="5 Star" />
        <HistogramBarRow title="4 Star" />
        <HistogramBarRow title="3 Star" />
        <HistogramBarRow title="2 Star" />
        <HistogramBarRow title="1 Star" />
      </div>
    </div>
  );
}

export default Histogram;
