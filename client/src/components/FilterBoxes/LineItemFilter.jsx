/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import style from './LineItemFilter.css';

function LineItemFilter(props) {
  const { name, numOf, handleFilterToggle, checked = false } = props;
  const disabled = numOf > 0 ? '' : 'disabled';
  // const disabled = true;
  return (
    <div className={style.LineItem}>
      <label className={style.labelStyle} style={disabled ? { color: '#636262', pointerEvents: 'none' } : {}}>
        <svg style={disabled ? { opacity: '0', backgroundColor: 'grey' } : {}} className={style.plusSign} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 60" width="10" height="10" fill="grey">
          <path d="M38 48 L38 38 L48 38 L48 26 L38 26 L38 16 L26 16 L26 26 L16 26 L16 38 L26 38 L26 48" />
        </svg>
        <Checkbox ixd={name} checked={checked} name={name} handleFilterToggle={handleFilterToggle} disabled={disabled} />
        <span className={style.LabelName}>{name}</span>
        <span className={style.NumOf}>{`(${numOf})`}</span>
      </label>
    </div>
  );
}

LineItemFilter.propTypes = {
  name: PropTypes.string.isRequired,
  numOf: PropTypes.number.isRequired,
  handleFilterToggle: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default LineItemFilter;

// needs a disabled mode that makes it grey!!!
