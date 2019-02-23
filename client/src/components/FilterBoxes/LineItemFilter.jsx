/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import style from './LineItemFilter.css';

function LineItemFilter(props) {
  const { name, numOf, handleFilterToggle } = props;
  return (
    <div className={style.LineItem}>
      <label>
        <Checkbox id={name} checked={false} name={name} handleFilterToggle={handleFilterToggle} />
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
};

export default LineItemFilter;

// needs a disabled mode that makes it grey!!!