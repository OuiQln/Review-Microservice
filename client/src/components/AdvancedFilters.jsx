import React from 'react';
import StarRatingFilter from './StarRatingFilter';
import style from './AdvancedFilters.css';

function AdvancedFilters() {
  return (
    <>
      <div className={style.FilterAttributes}>
        <div className={style.AdvancedFiltersTitle}>Advanced Filters</div>
        <div className={style.FiltersBody}>
          {/* Should I add a separate component here? probably */}
          {/* Should pass in functions from the App to change state of which is being filtered */}
          <StarRatingFilter />
        </div>
      </div>
    </>
  );
}

export default AdvancedFilters;
