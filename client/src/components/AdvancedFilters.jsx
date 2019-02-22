import React from 'react';
import StarFilterBox from './FilterBoxes/StarFilterBox';
import AgeFilterBox from './FilterBoxes/AgeFilterBox';
import SizeFilterBox from './FilterBoxes/SizeFilterBox';
import HeightFilterBox from './FilterBoxes/HeightFilterBox';
import style from './AdvancedFilters.css';

function AdvancedFilters() {
  return (
    <>
      <div className={style.FilterAttributes}>
        <div className={style.AdvancedFiltersTitle}>Advanced Filters</div>
        <div className={style.FiltersBody}>
          {/* Should I add a separate component here? probably */}
          {/* Should pass in functions from the App to change state of which is being filtered */}
          <StarFilterBox />
          <SizeFilterBox />
          <AgeFilterBox />
          <HeightFilterBox />
        </div>
      </div>
    </>
  );
}

export default AdvancedFilters;
