import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import style from './LineItemFilter.css';

function LineItemFilter(props) {
  const { name, numOf, handleFilterToggle } = props;
  return (
    <li style={{ listStyle: 'none', height: '30.5px'}}>
      <Checkbox checked={false} name={name} handleFilterToggle={handleFilterToggle} />
      <span className={style.LabelName}>{name}</span>
      <span className={style.NumOf}>{`(${numOf})`}</span>
    </li>
  );
}

LineItemFilter.propTypes = {
  name: PropTypes.string.isRequired,
  numOf: PropTypes.number.isRequired,
  handleFilterToggle: PropTypes.func.isRequired,
};

export default LineItemFilter;

// needs a disabled mode that makes it grey!!!